-- USERS TABLE

create table public.users (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique,
  username text unique,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null    
);

comment on table public.users is 'Profile data for each user.';
comment on column public.users.id is 'References the internal Supabase Auth user.';

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');


alter table public.users enable row level security;

create policy "Allow logged-in read access" on public.users for select using ( auth.role() = 'authenticated' );
create policy "Allow individual insert access" on public.users for insert with check ( auth.uid() = id );
create policy "Allow individual update access" on public.users for update using ((select auth.uid()) = id);
alter table public.users replica identity full; 

create function public.handle_new_user() 
returns trigger as $$
declare is_admin boolean;

begin

  insert into public.users (id,email,username,full_name,avatar_url)
    values (new.id, 
          new.email,
          new.raw_user_meta_data->>'username',
          new.raw_user_meta_data->>'full_name', 
          new.raw_user_meta_data->>'avatar_url'
          );
  
  select count(*) = 1 from auth.users into is_admin;
  
  return new;
end;
$$ language plpgsql security definer set search_path = auth, public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


begin; 
  drop publication if exists supabase_realtime; 

  create publication supabase_realtime;  
commit;

alter publication supabase_realtime add table public.users;


-- POSTS TABLE

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references public.users on delete cascade not null,
  caption text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null    
);

comment on table public.posts is 'Posts created by users.';
comment on column public.posts.id is 'Unique identifier for each post.';
comment on column public.posts.author_id is 'References the user who created the post.';

-- Set up Storage!

insert into storage.buckets (id, name)
  values ('post_images', 'post_images');

create policy "Post images are  accessible by authenticated users." on storage.objects
    for select using (bucket_id = 'post_images' and auth.role() = 'authenticated');

create policy "Only authenticated users can upload a post image." on storage.objects
    for insert with check (bucket_id = 'post_images' and auth.role() = 'authenticated');



alter table public.posts enable row level security;

create policy "Allow logged-in read access" on public.posts for select using ( auth.role() = 'authenticated' );

create policy "Allow individual insert access" on public.posts for insert with check ( auth.uid() = author_id );
create policy "Allow individual update access" on public.posts for update using ((select auth.uid()) = author_id);
create policy "Allow individual delete access" on public.posts for delete using ((select auth.uid()) = author_id);

alter table public.posts replica identity full;

begin; 
  drop publication if exists supabase_realtime; 

  create publication supabase_realtime;
commit;

alter publication supabase_realtime add table public.posts;


-- LIKES TABLE

create table public.likes (
  post_id uuid references public.posts on delete cascade not null,
  user_id uuid references public.users on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (post_id, user_id)
);

comment on table public.likes is 'Likes for each post.';

alter table public.likes enable row level security;

create policy "Allow logged-in read access" on public.likes for select using ( auth.role() = 'authenticated' );

create policy "Allow individual insert access" on public.likes for insert with check ( auth.uid() = user_id );
create policy "Allow individual delete access" on public.likes for delete using ((select auth.uid()) = user_id);


alter table public.likes replica identity full;

begin; 
  drop publication if exists supabase_realtime; 

  create publication supabase_realtime;

commit;


alter publication supabase_realtime add table public.likes;



-- BOOKMARKS TABLE

create table public.bookmarks (
    post_id uuid references public.posts on delete cascade not null,
    user_id uuid references public.users on delete cascade not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    primary key (post_id, user_id)
);

comment on table public.bookmarks is 'Bookmarks for each post.';

alter table public.bookmarks enable row level security;

create policy "Allow logged-in read access" on public.bookmarks for select using ( auth.role() = 'authenticated' );

create policy "Allow individual insert access" on public.bookmarks for insert with check ( auth.uid() = user_id );
create policy "Allow individual delete access" on public.bookmarks for delete using ((select auth.uid()) = user_id);


alter table public.bookmarks replica identity full;

begin; 
    drop publication if exists supabase_realtime; 

    create publication supabase_realtime;

commit;


alter publication supabase_realtime add table public.bookmarks;



-- COMMENTS TABLE

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.posts on delete cascade not null,
  user_id uuid references public.users on delete cascade not null,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null    
);

comment on table public.comments is 'Comments for each post.';
comment on column public.comments.id is 'Unique identifier for each comment.';
comment on column public.comments.post_id is 'References the post that the comment is on.';
comment on column public.comments.user_id is 'References the user who created the comment.';

alter table public.comments enable row level security;

create policy "Allow logged-in read access" on public.comments for select using ( auth.role() = 'authenticated' );

create policy "Allow individual insert access" on public.comments for insert with check ( auth.uid() = user_id );
create policy "Allow individual update access" on public.comments for update using ((select auth.uid()) = user_id);
create policy "Allow individual delete access" on public.comments for delete using ((select auth.uid()) = user_id);

alter table public.comments replica identity full;

begin; 
  drop publication if exists supabase_realtime; 

  create publication supabase_realtime;
commit;

alter publication supabase_realtime add table public.comments;

-- END OF MIGRATION



-- FOLLOWERS TABLE

create table public.followers (
    id uuid primary key default gen_random_uuid(),
    follower_id uuid not null references public.users(id),
    following_id uuid not null references public.users(id),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

comment on table public.followers is 'A table to track followers and followings';

comment on column public.followers.follower_id is 'The user who is following';
comment on column public.followers.following_id is 'The user who is being followed';


alter table public.followers enable row level security;

create policy "Allow logged-in read access" on public.followers for select using ( auth.role() = 'authenticated' );

create policy "Allow individual insert access" on public.followers for insert with check ( auth.uid() = follower_id );
create policy "Allow individual delete access" on public.followers for delete using ((select auth.uid()) = follower_id);


alter table public.followers replica identity full;

begin; 
    drop publication if exists supabase_realtime; 

    create publication supabase_realtime;

commit;


alter publication supabase_realtime add table public.followers;
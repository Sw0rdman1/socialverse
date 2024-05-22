import Image from "./Image";

interface AvatarProps {
    url: string;
    size: number;
}


const Avatar: React.FC<AvatarProps> = ({ url, size }) => {
    return (
        <Image
            style={{
                width: size,
                aspectRatio: 1,
                borderRadius: size / 2,

            }}
            source={{ uri: url }}
        />
    )
}

export default Avatar

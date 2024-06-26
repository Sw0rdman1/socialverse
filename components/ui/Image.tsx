import { ImageProps } from 'expo-image';
import { Image as DefaultImage } from 'expo-image';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Image = (props: ImageProps) => {

    return (
        <DefaultImage
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            {...props}
        />
    );
}

export default Image

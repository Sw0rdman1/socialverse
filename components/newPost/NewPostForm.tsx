import { StyleSheet, Text, View } from 'react-native'
import MyImagePicker from './ImagePicker'
import { useState } from 'react'
import { ImagePickerAsset } from 'expo-image-picker'
import Button from '../ui/Button'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { useColors } from '@/hooks/useColors'
import { BlurView } from 'expo-blur'
import Image from '../ui/Image'
import CreatePostButton from './CreatePostButton'
import CaptionInput from './CaptionInput'
import { useApi, useCurrentUser } from '@/context/AppContext'

const NewPostForm = () => {
    const [caption, setCaption] = useState<string>("")
    const [image, setImage] = useState<ImagePickerAsset | null>(null)
    const [imageUrl, setImageUrl] = useState<string>("")
    const { tint, tintTransparent } = useColors();
    const router = useRouter();
    const { posts } = useApi();
    const { id } = useCurrentUser();

    const createPostHandler = async () => {
        await posts.createPost(caption, imageUrl, id)
        router.navigate('(home)')

    }

    return (
        <LinearGradient colors={[tint, tintTransparent]} style={styles.container}>
            <BlurView intensity={100} tint="systemThinMaterialDark" style={styles.blurContainer}>
                {image && <Image source={{ uri: image.uri }} style={styles.image} />}
                <MyImagePicker image={image} setImage={setImage} setImageUrl={setImageUrl} />
                <CaptionInput caption={caption} setCaption={setCaption} />
                <Button text="Post" onPress={createPostHandler} />
            </BlurView>
        </LinearGradient>
    )
}

export default NewPostForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    blurContainer: {
        paddingTop: 50,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        gap: 30,
    },

    image: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
})
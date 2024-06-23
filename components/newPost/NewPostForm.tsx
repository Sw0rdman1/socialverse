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

const NewPostForm = () => {
    const [image, setImage] = useState<ImagePickerAsset | null>(null)
    const [imageUrl, setImageUrl] = useState<string>("")
    const { tint, tintTransparent } = useColors();

    const router = useRouter();

    const handlePress = () => {
        router.navigate('(home)')
    }

    return (
        <LinearGradient colors={[tint, tintTransparent]} style={styles.container}>
            <BlurView intensity={100} tint="default" style={styles.blurContainer}>
                {image && <Image source={{ uri: image.uri }} style={styles.image} />}
                <MyImagePicker image={image} setImage={setImage} setImageUrl={setImageUrl} />
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
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
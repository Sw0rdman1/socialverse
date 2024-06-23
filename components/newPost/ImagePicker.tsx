import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Button, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useApi, useCurrentUser } from '@/context/AppContext';
import { useColors } from '@/hooks/useColors';

interface ImagePickerProps {
    image: ImagePicker.ImagePickerAsset | null;
    setImage: (image: ImagePicker.ImagePickerAsset) => void;
    setImageUrl: (url: string) => void;
}

const MyImagePicker: React.FC<ImagePickerProps> = ({ image, setImage, setImageUrl }) => {
    const [loading, setLoading] = useState(false);
    const currentUser = useCurrentUser();
    const { images } = useApi();
    const { tint, backgroundTransparent } = useColors();

    if (currentUser === null) {
        return null;
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setLoading(true);
            setImage(result.assets[0]);
            const imageUrl = await
                images.uploadImage(result.assets[0], currentUser.id, "post_images");
            setImageUrl(imageUrl);
            setLoading(false);
        }
    };

    const renderImage = () => {
        if (!image) {
            return (
                <View style={styles.noPhotoContainer}>
                    <Ionicons name="images" size={32} color={"white"} />
                    <Text style={[styles.buttonText, { color: "white" }]}>Gallery</Text>
                </View>
            )
        }


        if (image && loading) {
            return (
                <>
                    <Image blurRadius={50} source={{ uri: image.uri }} style={styles.uploadingImage} />
                    <ActivityIndicator style={styles.spinner} size="large" color={tint} />

                </>
            )
        }

        return (
            <Image source={{ uri: image.uri }} style={styles.image} />
        )

    }

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: backgroundTransparent }]} onPress={pickImage}>
            {renderImage()}
        </TouchableOpacity>
    );
}

export default MyImagePicker;

const styles = StyleSheet.create({
    button: {
        aspectRatio: 1,
        width: "85%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(153, 157, 160, 0.15)',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '600',
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        borderRadius: 20,
    },
    noPhotoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    uploadingImage: {
        width: "100%",
        height: "100%",
        flex: 1,
        borderRadius: 20,
    },
    spinner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

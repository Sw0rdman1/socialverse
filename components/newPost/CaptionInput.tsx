import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useColors } from '@/hooks/useColors';

interface CaptionInputProps {
    caption: string;
    setCaption: (caption: string) => void;
}

const CaptionInput: React.FC<CaptionInputProps> = ({ caption, setCaption }) => {
    const { text } = useColors();
    return (
        <View
            style={[styles.captionInputContainer, { borderColor: "white" }]}
        >
            <Text style={[styles.captionInputTitle, { color: "white" }]}>Caption</Text>
            <TextInput
                style={[styles.captionInput, { color: "white" }]}
                placeholder="Enter post caption"
                placeholderTextColor={'lightgrey'}
                value={caption}
                onChangeText={setCaption}
            />
        </View>
    )
}

export default CaptionInput

const styles = StyleSheet.create({
    captionInputContainer: {
        width: "85%",
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 5,
    },
    captionInputTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        opacity: 0.8
    },
    captionInput: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
})
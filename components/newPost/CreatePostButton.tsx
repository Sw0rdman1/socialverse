import { useColors } from '@/hooks/useColors';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const CreatePostButton: React.FC<ButtonProps> = ({ text, onPress }) => {
    const { tint, text: background } = useColors();

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: background }]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: tint }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default CreatePostButton;
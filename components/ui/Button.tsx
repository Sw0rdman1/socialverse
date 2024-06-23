import { useColors } from '@/hooks/useColors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
    const { tint, background: textColor } = useColors();
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: tint }]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Button;
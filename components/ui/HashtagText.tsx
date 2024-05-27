import { StyleSheet } from 'react-native'
import { Text } from './Themed'
import { useColors } from '@/hooks/useColors';

interface Props {
    children: string
    style?: object
}

const HashtagText: React.FC<Props> = ({ children, ...props }) => {
    const words = children.split(' ');
    const { tint } = useColors();

    return (
        <Text {...props}>
            {words.map((word, index) => {
                if (word.startsWith('#')) {
                    return (
                        <Text key={index} style={{ color: tint }}>
                            {word}{' '}
                        </Text>
                    );
                } else {
                    return <Text key={index}>{word} </Text>;
                }
            })}
        </Text>
    );
};

export default HashtagText

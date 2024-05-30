import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { TextInput, TouchableOpacity, View } from '../ui/Themed';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchHeaderProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchTerm, setSearchTerm }) => {
    const { top } = useSafeAreaInsets();
    const { tint, backgroundSecondary, text } = useColors();

    const cancelHandler = () => {
        setSearchTerm('');
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundSecondary }]}>
            <View style={[styles.inputContainer, { marginTop: top }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <FontAwesome style={styles.icon} name="search" size={21} color={tint} />
                {searchTerm &&
                    <TouchableOpacity onPress={cancelHandler} style={styles.cancelIcon}>
                        <Ionicons name="close" size={22} color={text} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 6,
        paddingBottom: 12,
        position: 'absolute',
        width: '100%',
        zIndex: 100,
        top: 0,
        opacity: 0.9,
    },
    inputContainer: {
        flex: 1,
        borderRadius: 18,
        padding: 15,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        marginLeft: 30,
        fontSize: 17,
        fontWeight: '600',
    },
    icon: {
        marginLeft: 8,
        position: 'absolute',
        left: 5,
        bottom: 0,
        marginBottom: 15,
    },
    cancelIcon: {
        position: 'absolute',
        right: 12,
        top: 14,
    },

})
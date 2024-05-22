import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export const useColors = () => {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light']
    return colors
}
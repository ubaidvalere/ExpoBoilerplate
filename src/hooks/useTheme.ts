import { colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

type ColorName = keyof typeof colors.light & keyof typeof colors.dark;
type ThemeColors = typeof colors.light & typeof colors.dark;

export function useTheme(): ThemeColors;
export function useTheme(props: { light?: string; dark?: string }, colorName: ColorName): string;
export function useTheme(
  props?: { light?: string; dark?: string },
  colorName?: ColorName
) {
  const theme = useColorScheme() ?? "light";

  // If no colorName is provided, return the entire theme object
  if (!colorName) {
    return colors[theme];
  }

  // Handle single color case
  const colorFromProps = props?.[theme];
  if (colorFromProps) {
    return colorFromProps;
  }
  
  return colors[theme][colorName];
}

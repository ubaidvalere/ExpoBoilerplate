import { Text as RNText, type TextProps } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { createStyleSheet } from "@/hooks/useStyles";
import fonts from "@/constants/font";

export type Props = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

function Text({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: Props) {
  const color = useTheme({ light: lightColor, dark: darkColor }, "text");
  const styles = useStyles();

  return (
    <RNText
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const useStyles = createStyleSheet((theme) => ({
  default: {
    fontSize: 16,
    // lineHeight: 24,
    fontFamily: fonts.regular,
  },
  defaultSemiBold: {
    fontSize: 16,
    // lineHeight: 24,
    fontFamily: fonts.semiBold,
  },
  title: {
    fontSize: 32,
    // lineHeight: 32,
    fontFamily: fonts.bold,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fonts.medium,
  },
  link: {
    // lineHeight: 30,
    fontSize: 16,
    color: theme.link,
    fontFamily: fonts.regular,
  },
}));

export default Text;

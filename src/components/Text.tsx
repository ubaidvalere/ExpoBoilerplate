import { Text as RNText, type TextProps, StyleSheet } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { createStyleSheet } from "@/hooks/useStyles";

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
    lineHeight: 24,
    fontFamily: "Comfortaa-Regular",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Comfortaa-SemiBold",
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Comfortaa-Bold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Comfortaa-Medium",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Comfortaa-Regular",
  },
}));

export default Text;

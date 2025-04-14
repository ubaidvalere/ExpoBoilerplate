import { View as RNVIew, type ViewProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

function View({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useTheme(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <RNVIew style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;

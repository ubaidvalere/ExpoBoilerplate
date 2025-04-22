import { View as RNVIew, type ViewProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";

export type Props = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

function View({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: Props) {
  const backgroundColor = useTheme(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <RNVIew style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;

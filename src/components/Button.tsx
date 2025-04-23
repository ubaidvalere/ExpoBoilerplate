import React from "react";
import {
  Pressable,
  ActivityIndicator,
  PressableProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { createStyleSheet } from "@/hooks/useStyles";
import Text from "./Text";
import fonts from "@/constants/font";

export type ButtonProps = PressableProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

const Button = ({
  title,
  loading = false,
  style,
  disabled,
  ...rest
}: ButtonProps) => {
  const themeColors = useTheme();
  const styles = useStyles();

  return (
    <Pressable
      style={[styles.button, (disabled || loading) && styles.disabled, style]}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={themeColors.background} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
};

const useStyles = createStyleSheet((theme) => ({
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.primaryColor,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: theme.white,
    fontFamily: fonts.semiBold,
  },
}));

export default Button;

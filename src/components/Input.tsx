import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { createStyleSheet } from '@/hooks/useStyles';

export type InputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

const Input = ({ style, lightColor, darkColor, ...rest }: InputProps) => {
  const themeColors = useTheme();
  const styles = useStyles();
  
  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: useTheme({ light: lightColor, dark: darkColor }, 'background'),
          borderColor: themeColors.border, // Using the theme object directly
          color: themeColors.text,
        },
        style,
      ]}
      placeholderTextColor={themeColors.icon}
      {...rest}
    />
  );
};

const useStyles = createStyleSheet((theme) => ({
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Comfortaa-Regular',
    backgroundColor: theme.background,
    borderColor: theme.border,
    color: theme.text,
    fontSize: 16,
  },
}));

export default Input;

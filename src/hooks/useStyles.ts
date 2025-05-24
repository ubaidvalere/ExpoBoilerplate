import { useMemo } from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { useTheme } from "./useTheme";
import { colors } from "@/constants/colors";

export type ThemeType = typeof colors.light & typeof colors.dark;

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type DynamicStyleFn<Args extends any[] = any[]> = (
  ...args: Args
) => ViewStyle | TextStyle | ImageStyle;

export type StyleObject<T> = {
  [P in keyof T]: T[P] | DynamicStyleFn;
};

export type StyleCreator<T = ThemeType> = (theme: T) => StyleObject<any>;

export type ProcessedStyles<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any
    ? T[P]
    : T[P] extends ViewStyle | TextStyle | ImageStyle
    ? T[P]
    : never;
};

export function createStyleSheet<T extends Record<string, any>>(
  styleFactory: (theme: ThemeType) => T
): () => ProcessedStyles<T> {
  return function useComponentStyles(): ProcessedStyles<T> {
    const theme = useTheme();
    const styles = useMemo(() => {
      const rawStyles = styleFactory(theme);
      const processedStyles: Partial<ProcessedStyles<T>> = {};
      Object.keys(rawStyles).forEach((key) => {
        const value = rawStyles[key];
        if (typeof value === "function") {
          processedStyles[key as keyof T] = value;
        } else {
          processedStyles[key as keyof T] = StyleSheet.create({ [key]: value })[
            key
          ];
        }
      });
      return processedStyles as ProcessedStyles<T>;
    }, [theme]);
    return styles;
  };
}

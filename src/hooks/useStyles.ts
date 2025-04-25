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
  [P in keyof T]: T[P] extends DynamicStyleFn<infer Args>
    ? (...args: Args) => ViewStyle | TextStyle | ImageStyle
    : T[P];
};

export function createStyleSheet<T extends NamedStyles<T> | NamedStyles<any>>(
  styleFactory: (theme: ThemeType) => T | StyleObject<T>
): () => ProcessedStyles<T> {
  return function useComponentStyles(): ProcessedStyles<T> {
    const theme = useTheme();

    const styles = useMemo(() => {
      const rawStyles = styleFactory(theme);
      const processedStyles: Partial<ProcessedStyles<T>> = {};

      Object.keys(rawStyles).forEach((key) => {
        const styleKey = key as keyof T;
        if (typeof rawStyles[styleKey] === "function") {
          processedStyles[styleKey] = rawStyles[styleKey] as any;
        } else {
          processedStyles[styleKey] = StyleSheet.create({
            [key]: rawStyles[styleKey],
          })[key] as any;
        }
      });

      return processedStyles as ProcessedStyles<T>;
    }, [theme]);

    return styles;
  };
}

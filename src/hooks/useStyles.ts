import { useMemo } from 'react';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { useTheme } from './useTheme';
import { colors } from '@/constants/colors';

export type ThemeType = typeof colors.light & typeof colors.dark;

export type RNStyleType = ViewStyle | TextStyle | ImageStyle;

export type StyleObject = {
  [key: string]: RNStyleType | DynamicStyleFn;
};

export type DynamicStyleFn<Args extends any[] = any[]> = (...args: Args) => RNStyleType;

export type StyleCreator<T = ThemeType> = (theme: T) => StyleObject;

export type ProcessedStyles<S extends StyleObject> = {
  [K in keyof S]: S[K] extends DynamicStyleFn<infer Args> 
    ? (...args: Args) => RNStyleType 
    : RNStyleType;
};

export function createStyleSheet<T = ThemeType, S extends StyleObject = StyleObject>(
  styleFactory: (theme: T) => S
): () => ProcessedStyles<S> {
  return function useComponentStyles(): ProcessedStyles<S> {
    const theme = useTheme();
    
    const styles = useMemo(() => {
      const rawStyles = styleFactory(theme as T);
      const processedStyles: Partial<ProcessedStyles<S>> = {};
      
      Object.keys(rawStyles).forEach((key) => {
        const styleKey = key as keyof S;
        if (typeof rawStyles[styleKey] === 'function') {
          processedStyles[styleKey] = rawStyles[styleKey] as any;
        } else {
          processedStyles[styleKey] = StyleSheet.create({ 
            [key]: rawStyles[styleKey] 
          })[key] as any;
        }
      });
      
      return processedStyles as ProcessedStyles<S>;
    }, [theme]);
    
    return styles;
  };
}

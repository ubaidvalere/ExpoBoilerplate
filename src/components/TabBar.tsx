import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet } from "@/hooks/useStyles";
import { Monicon } from "@monicon/native";
import { useTheme } from "@/hooks/useTheme";
import Spacer from "./Spacer";
import fonts from "@/constants/font";

function TabBar({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder();
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  const theme = useTheme();

  const animatedValues = React.useRef(
    state.routes.map(() => new Animated.Value(1))
  ).current;

  const shrinkAnimation = (index) => {
    Animated.sequence([
      Animated.timing(animatedValues[index], {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getIcon = (name: string, isFocused: boolean) => {
    switch (name) {
      case "Home":
        return isFocused ? (
          <Monicon
            name="solar:home-angle-2-bold"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        ) : (
          <Monicon
            name="solar:home-angle-2-linear"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        );
      case "Profile":
        return isFocused ? (
          <Monicon
            name="solar:user-rounded-bold"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        ) : (
          <Monicon
            name="solar:user-rounded-outline"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        );

      case "Chat":
        return isFocused ? (
          <Monicon
            name="solar:chat-line-bold"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        ) : (
          <Monicon
            name="solar:chat-line-linear"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        );
      default:
        return (
          <Monicon
            name="solar:user-rounded-outline"
            size={25}
            color={isFocused ? theme.tint : theme.icon}
          />
        );
    }
  };

  return (
    <View style={styles.container(insets)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          shrinkAnimation(index);

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            android_ripple={null}
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            pressOpacity={1}
            style={[
              styles.tabItem,
              {
                transform: [{ scale: animatedValues[index] }],
              },
            ]}
          >
            {getIcon(route.name, isFocused)}
            <Spacer height={5} />
            <Text style={styles.tabLabel(isFocused)}>{label}</Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default TabBar;

const useStyles = createStyleSheet((theme) => ({
  container: (insets) => ({
    flexDirection: "row",
    paddingBottom: insets.bottom,
    backgroundColor: theme.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.border,
    paddingTop: 10,
  }),
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: (isFocused) => ({
    color: isFocused ? theme.tint : theme.text,
    fontFamily: fonts.semiBold,
    fontSize: 13,
  }),
}));

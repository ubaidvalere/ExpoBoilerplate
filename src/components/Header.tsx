import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "./Text";
import View from "./View";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  hideBack?: boolean;
  rightComponent?: React.ReactNode;
}

const Header = ({ title, hideBack, rightComponent }: HeaderProps) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: top }} />
      <View style={styles.container}>
        <View style={styles.leftComponent}>
          {!hideBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.centerComponent}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightComponent}>{rightComponent}</View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  leftComponent: {
    flex: 1,
    alignItems: "flex-start",
  },
  centerComponent: {
    flex: 2,
    alignItems: "center",
  },
  rightComponent: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 17,
  },
});

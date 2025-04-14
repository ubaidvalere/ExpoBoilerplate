import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }} {...props}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});

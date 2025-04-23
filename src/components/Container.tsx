import React from "react";
import View from "./View";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = ({
  children,
  topInsets,
  bottomInsets,
}: {
  children: React.ReactNode;
  topInsets?: boolean;
  bottomInsets?: boolean;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: topInsets ? insets.top : 0,
        paddingBottom: bottomInsets ? insets.bottom : 0,
      }}
    >
      {children}
    </View>
  );
};

export default Container;

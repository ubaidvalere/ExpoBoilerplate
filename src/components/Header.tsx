import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "./Text";
import View from "./View";
import { useNavigation } from "@react-navigation/native";
import { createStyleSheet } from "@/hooks/useStyles";
import { Monicon } from "@monicon/native";
import { useTheme } from "@/hooks/useTheme";
import useCartStore from "@/stores/cartStore";

interface HeaderProps {
  title: string;
  hideBack?: boolean;
  hideCart?: boolean;
  rightComponent?: React.ReactNode;
}

const Header = ({ title, hideBack, hideCart, rightComponent }: HeaderProps) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const styles = useStyles();
  const theme = useTheme();
  const { getCartItemCount } = useCartStore();
  const cartCount = getCartItemCount();

  const renderCartIcon = () => {
    if (hideCart) return null;

    return (
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart" as never)}
      >
        <Monicon name="solar:cart-3-linear" size={24} color={theme.icon} />
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

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
        <View style={styles.rightComponent}>
          {rightComponent || renderCartIcon()}
        </View>
      </View>
    </>
  );
};

export default Header;

const useStyles = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
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
  cartButton: {
    padding: 5,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: theme.grayBG,
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: theme.text,
    fontSize: 10,
    fontWeight: "bold",
  },
}));

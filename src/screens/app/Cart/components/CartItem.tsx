import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Spacer } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import { CartItem as CartItemType } from "@/stores/cartStore";
import { Image } from "expo-image";
import { Monicon } from "@monicon/native";
import useCartStore from "@/stores/cartStore";
import { useTheme } from "@/hooks/useTheme";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const { updateQuantity, removeFromCart } = useCartStore();
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={item.product.thumbnail}
        style={styles.image}
        contentFit="contain"
      />
      <View style={styles.contentContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={1}>
            {item.product.title}
          </Text>
          <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
            <Monicon
              name="solar:trash-bin-trash-linear"
              size={18}
              color={theme.icon}
            />
          </TouchableOpacity>
        </View>
        <Spacer height={5} />
        <Text type="subtitle">${item.product.price}</Text>
        <Spacer height={10} />
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
          >
            <Text>−</Text>
          </TouchableOpacity>
          <View style={styles.quantityTextContainer}>
            <Text>{item.quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Spacer width={20} />
          <Text>${(item.product.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const useStyles = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.grayBG,
    borderRadius: 15,
  },
  quantityTextContainer: {
    width: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
}));

import React from "react";
import { FlatList, Alert } from "react-native";
import { Container, Header, View, Text, Spacer, Button } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import useCartStore from "@/stores/cartStore";
import CartItem from "./components/CartItem";
import { useTheme } from "@/hooks/useTheme";

const Cart = () => {
  const { items, clearCart, getCartTotal } = useCartStore();
  const styles = useStyles();
  const theme = useTheme();

  const handleCheckout = () => {
    if (items.length === 0) {
      Alert.alert("Cart Empty", "Your cart is empty. Add some products first.");
      return;
    }

    Alert.alert(
      "Checkout",
      "This would normally proceed to checkout. This is a demo app, so we'll just clear the cart.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => {
            clearCart();
            Alert.alert("Success", "Order placed successfully!");
          },
        },
      ]
    );
  };

  return (
    <Container>
      <Header title="Cart" hideCart />
      <View style={{ flex: 1 }}>
        {items.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <Spacer height={20} />
            <Text>Add some products to get started</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={items}
              keyExtractor={(item) => item.product.id.toString()}
              renderItem={({ item }) => <CartItem item={item} />}
              contentContainerStyle={styles.listContainer}
            />
            <View style={styles.totalContainer}>
              <Text type="defaultSemiBold">Total:</Text>
              <Text type="subtitle">${getCartTotal().toFixed(2)}</Text>
            </View>
            <View style={styles.checkoutContainer}>
              <Button
                title="Checkout"
                onPress={handleCheckout}
                style={{ marginHorizontal: 20 }}
              />
              <Spacer height={10} />
            </View>
          </>
        )}
      </View>
    </Container>
  );
};

export default Cart;

const useStyles = createStyleSheet((theme) => ({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 100,
  },
  totalContainer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.background,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  checkoutContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.background,
    paddingBottom: 10,
  },
}));

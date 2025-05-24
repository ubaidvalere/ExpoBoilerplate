import { ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Container, Header, View, Text, Spacer, Button } from "@/components";
import { useProductById } from "@/api/queries/useProductQueries";
import { createStyleSheet } from "@/hooks/useStyles";
import useCartStore from "@/stores/cartStore";

interface RouteParams {
  id: number;
}

interface Props {
  route: {
    params: RouteParams;
  };
}

const ProductDetail = ({ route }: Props) => {
  const { data: product, isLoading: productLoading } = useProductById(
    route.params.id
  );
  const { addToCart, items, updateQuantity } = useCartStore();
  const styles = useStyles();
  const [adding, setAdding] = useState(false);

  // Check if product is in cart and get its quantity
  const getCartItem = () => {
    console.log("getCartItem");
    if (!product) return null;
    return items.find((item) => item.product.id === product.id);
  };

  const cartItem = getCartItem();

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(product);

    // setAdding(true);

    // // Adding with a small delay to show loading state
    // setTimeout(() => {
    //   addToCart(product);
    //   setAdding(false);
    //   // Alert removed as requested
    // }, 500);
  };

  const handleIncrement = () => {
    if (!product) return;
    updateQuantity(product.id, (cartItem?.quantity || 0) + 1);
  };

  const handleDecrement = () => {
    if (!product || !cartItem) return;
    updateQuantity(product.id, cartItem.quantity - 1);
  };

  return (
    <Container>
      <Header title="Product Detail" />

      {productLoading && <Text>Loading...</Text>}

      <ScrollView>
        <View style={{ padding: 20 }}>
          <Image source={{ uri: product?.thumbnail }} style={styles.image} />
          <Text type="subtitle">{product?.title}</Text>
          <Spacer height={20} />

          <Text type="subtitle">${product?.price}</Text>
          <Spacer height={20} />

          <Text style={{ fontSize: 16 }}>{product?.description}</Text>

          <Spacer height={40} />

          {cartItem ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleDecrement}
              >
                <Text>−</Text>
              </TouchableOpacity>
              <View style={styles.quantityTextContainer}>
                <Text>{cartItem.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleIncrement}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Button
              title="Add to Cart"
              loading={adding}
              onPress={handleAddToCart}
            />
          )}
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProductDetail;

const useStyles = createStyleSheet((theme) => ({
  image: {
    aspectRatio: 1,
    marginBottom: 20,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.grayBG,
    borderRadius: 20,
  },
  quantityTextContainer: {
    width: 60,
    alignItems: "center",
    paddingHorizontal: 10,
  },
}));

import { ScrollView, Image } from "react-native";
import React from "react";
import { Container, Header, View, Text, Spacer } from "@/components";
import { useProductById } from "@/api/queries/useProductQueries";
import { createStyleSheet } from "@/hooks/useStyles";

const ProductDetail = ({ route }) => {
  const { data: product, isLoading: productLoading } = useProductById(
    route.params.id
  );
  const styles = useStyles();

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
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProductDetail;

const useStyles = createStyleSheet((theme) => ({
  image: {
    aspectRatio: 1,
    margin: 20,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
}));

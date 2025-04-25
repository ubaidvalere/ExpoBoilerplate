import { ScrollView } from "react-native";
import React from "react";
import { Container, Text, View } from "@/components";
import { useProducts } from "@/api/queries/useProductQueries";
import Product from "./components/Product";

const Home = () => {
  const { data: products, isLoading: productsLoading } = useProducts();

  return (
    <Container topInsets>
      <Text type="title" style={{ margin: 20, marginBottom: 0 }}>
        Home
      </Text>
      <ScrollView>
        <View style={{ padding: 20 }}>
          {productsLoading && <Text>Loading...</Text>}
          {products?.products?.length > 0 &&
            products?.products?.map((product: any) => (
              <Product key={product.id} data={product} />
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

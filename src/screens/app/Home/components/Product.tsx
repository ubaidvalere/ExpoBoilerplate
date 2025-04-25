import React from "react";
import { Pressable } from "react-native";
import { ProductType } from "@/utils/interfaces";
import { View, Text, Spacer } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

type Props = {
  data: ProductType;
};

const Product = ({ data }: Props) => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const styles = useStyles();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetail", { id: data.id })}
    >
      <Image
        source={data.thumbnail}
        style={styles.image}
        contentFit="contain"
      />
      <View style={styles.rightContainer}>
        <Text numberOfLines={2}>{data.title}</Text>
        <Spacer height={10} />
        <Text type="subtitle">${data.price}</Text>
      </View>
    </Pressable>
  );
};

export default Product;

const useStyles = createStyleSheet((theme) => ({
  container: {
    padding: 10,
    backgroundColor: theme.grayBG,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: theme.grayBG,
  },
}));

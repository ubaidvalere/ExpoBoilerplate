import { ScrollView } from "react-native";
import React from "react";
import { Container, Text, View } from "@/components";

const Home = () => {
  return (
    <Container topInsets>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text type="title">Home</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

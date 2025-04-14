import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../../components";
import useAppStore from "../../../store/appStore";

const Home = () => {
  const { setIsLogin } = useAppStore();

  return (
    <Container>
      <Text>Home</Text>

      <Button title="Logout" onPress={() => setIsLogin(false)} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});

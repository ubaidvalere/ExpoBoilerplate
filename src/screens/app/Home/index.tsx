import { Button, StyleSheet } from "react-native";
import React from "react";
import { Header, Text, View } from "@/components";
import useAuthStore from "@/store/authStore";

const Home = () => {
  const { setIsLogin } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <Header title="Home" hideBack />
      <Button title="Logout" onPress={() => setIsLogin(false)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

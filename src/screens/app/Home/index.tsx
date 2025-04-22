import { Button } from "react-native";
import React from "react";
import { Header, View } from "@/components";
import useAuthStore from "@/stores/authStore";
import { Monicon } from "@monicon/native";

const Home = () => {
  const { setIsLogin } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <Header title="Home" hideBack />
      <Monicon name="hugeicons:profile" size={25} color="black" />
      <Button title="Logout" onPress={() => setIsLogin(false)} />
    </View>
  );
};

export default Home;


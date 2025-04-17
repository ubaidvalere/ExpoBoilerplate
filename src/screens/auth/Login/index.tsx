import { Button, StyleSheet } from "react-native";
import React from "react";
import useAuthStore from "@/stores/authStore";
import { View, Text, Header } from "@/components";

const Login = () => {
  const { setIsLogin } = useAuthStore();

  return (
    <View style={{ flex: 1 }}>
      <Header title="Login" hideBack />
      <Button
        title="Login"
        onPress={() => {
          setIsLogin(true);
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

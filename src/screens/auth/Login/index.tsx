import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../../components";
import useAppStore from "../../../store/appStore";

const Login = () => {
  const { setIsLogin } = useAppStore();

  return (
    <Container>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          setIsLogin(true);
        }}
      />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});

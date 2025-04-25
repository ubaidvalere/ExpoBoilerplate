import { Alert, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import useAuthStore from "@/stores/authStore";
import { View, Input, Button, Spacer, Container } from "@/components";
import { useLogin } from "@/api/queries/useAuthQueries";
import useAppStore from "@/stores/appStore";

const Login = () => {
  const { setIsLogin, setAccessToken, setRefreshToken } = useAuthStore();
  const { setUserData } = useAppStore();
  const loginAPI = useLogin();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    loginAPI.mutate(
      { username, password },
      {
        onSuccess: (data) => {
          setIsLogin(true);
          setAccessToken(data.token);
          setRefreshToken(data.refreshToken);
          setUserData(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
    // setIsLogin(true);
  };

  return (
    <Container topInsets>
      <View style={{ padding: 20 }}>
        <Spacer height={80} />

        <Image
          source={require("@/assets/images/app-icon.png")}
          style={styles.logo}
        />

        <Spacer height={80} />

        <Input
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={setUsername}
          value={username}
        />
        <Spacer height={20} />

        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <Spacer height={40} />

        <Button
          title="Login"
          loading={loginAPI.isPending}
          onPress={handleLogin}
        />
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    borderRadius: 20,
    alignSelf: "center",
  },
});

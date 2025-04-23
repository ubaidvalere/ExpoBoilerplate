import { Alert, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import useAuthStore from "@/stores/authStore";
import {
  View,
  Text,
  Header,
  Input,
  Button,
  Spacer,
  Container,
} from "@/components";

const Login = () => {
  const { setIsLogin } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsLogin(true);
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
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Spacer height={20} />

        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />

        <Spacer height={40} />

        <Button title="Login" loading={isLoading} onPress={handleLogin} />
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

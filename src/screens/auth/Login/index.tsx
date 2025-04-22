import { Alert, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import useAuthStore from "@/stores/authStore";
import { View, Text, Header, Input, Button, Spacer } from "@/components";

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
    <View style={{ flex: 1 }}>
      <Header title="Login" hideBack />
      <View style={styles.inputContainer}>
        <Spacer height={20} />

        <Image
          source={require("@/assets/images/app-icon.png")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 20,
            alignSelf: "center",
          }}
        />

        <Spacer height={20} />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Spacer height={10} />

        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <Spacer height={20} />

      <Button title="Login" loading={isLoading} onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
});

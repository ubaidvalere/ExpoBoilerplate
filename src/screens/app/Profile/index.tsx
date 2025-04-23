import React from "react";
import { ScrollView } from "react-native";
import { Button, Container, Text, View } from "@/components";
import useAuthStore from "@/stores/authStore";

const Profile = () => {
  const { setIsLogin } = useAuthStore();

  return (
    <Container topInsets>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text type="title">Profile</Text>

          <Button title="Logout" onPress={() => setIsLogin(false)} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

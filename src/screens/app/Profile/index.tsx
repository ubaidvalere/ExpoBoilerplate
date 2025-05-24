import React from "react";
import { ScrollView } from "react-native";
import { Image } from "expo-image";
import { Button, Container, Spacer, Text, View } from "@/components";
import useAuthStore from "@/stores/authStore";
import { useUser } from "@/api/queries/useUserQueries";
import { createStyleSheet } from "@/hooks/useStyles";
import { NestedScrollView, NestedScrollViewHeader } from "@sdcx/nested-scroll";
import PagerView from "react-native-pager-view";

const Profile = () => {
  const styles = useStyles();
  const { setIsLogin } = useAuthStore();
  const { data, isLoading } = useUser();

  return (
    <Container topInsets>
      <NestedScrollView>
        <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
          <Image />
          <Text>Hello</Text>
        </NestedScrollViewHeader>
        <PagerView>
          <View style={{ flex: 1, backgroundColor: "green" }}></View>
          <View style={{ flex: 1, backgroundColor: "green" }}></View>
          <View style={{ flex: 1, backgroundColor: "green" }}></View>
        </PagerView>
      </NestedScrollView>
      {/* <ScrollView>
        <View style={{ padding: 20 }}>
          <Text type="title">Profile</Text>

          <Spacer height={20} />

          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <View style={styles.profileContainer}>
              <Image
                source={"https://i.ibb.co/j9n5ZCfV/pp.png"}
                style={styles.image}
              />

              <Spacer height={20} />

              <Text type="subtitle">
                {data?.firstName} {data?.lastName}
              </Text>

              <Spacer height={10} />

              <Text>{data?.company?.title}</Text>
            </View>
          )}
          <Spacer height={20} />

          <Button title="Logout" onPress={() => setIsLogin(false)} />
        </View>
      </ScrollView> */}
    </Container>
  );
};

export default Profile;

const useStyles = createStyleSheet((theme) => ({
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
    alignSelf: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
}));

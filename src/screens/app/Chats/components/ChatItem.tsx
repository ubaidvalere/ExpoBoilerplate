import React from "react";
import { Pressable } from "react-native";
import { View, Text, Spacer } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

export type ChatItemType = {
  id: string;
  name: string;
  lastMessage: string;
  date: string;
  avatar: string;
};

type Props = {
  data: ChatItemType;
};

const ChatItem = ({ data }: Props) => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const styles = useStyles();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Conversation", { id: data.id, name: data.name })}
    >
      <Image
        source={data.avatar}
        style={styles.avatar}
        contentFit="cover"
      />
      <View style={styles.contentContainer}>
        <View style={styles.topRow}>
          <Text type="defaultSemiBold" numberOfLines={1}>{data.name}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>
        <Spacer height={4} />
        <Text numberOfLines={1} style={styles.message}>{data.lastMessage}</Text>
      </View>
    </Pressable>
  );
};

export default ChatItem;

const useStyles = createStyleSheet((theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: theme.grayBG,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: theme.icon,
  },
  message: {
    color: theme.icon,
    fontSize: 14,
  },
}));

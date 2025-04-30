import { FlatList } from "react-native";
import React from "react";
import { Container, Text } from "@/components";
import ChatItem, { ChatItemType } from "./components/ChatItem";

// Mock data for chat list
const mockChats: ChatItemType[] = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey, how are you doing?",
    date: "10:30 AM",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    lastMessage: "Can we meet tomorrow?",
    date: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "3",
    name: "Michael Brown",
    lastMessage: "The project is going well!",
    date: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "4",
    name: "Emily Davis",
    lastMessage: "Thanks for your help!",
    date: "Monday",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "5",
    name: "David Wilson",
    lastMessage: "Let's catch up soon",
    date: "Sunday",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "6",
    name: "Jessica Taylor",
    lastMessage: "Did you see the latest update?",
    date: "Last week",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: "7",
    name: "Robert Martinez",
    lastMessage: "I'll send you the files",
    date: "Last week",
    avatar: "https://i.pravatar.cc/150?img=30",
  },
];

const Chats = () => {
  return (
    <Container topInsets>
      <Text type="title" style={{ margin: 20, marginBottom: 15 }}>
        Chats
      </Text>
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem data={item} />}
      />
    </Container>
  );
};

export default Chats;

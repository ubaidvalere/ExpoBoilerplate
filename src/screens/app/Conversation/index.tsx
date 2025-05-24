import { Container, Header } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  Platform,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { ChatContent } from "./components/ChatContent";
import { MessageItem } from "./components/MessageItem";
import { MessageInput } from "./components/MessageInput";

const MESSAGE_PAGE_SIZE = 20;

// Mock data for demonstration purposes
const generateMockMessages = (count, startId = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: String(startId + i),
    text: `This is message ${startId + i}. ${
      startId + (i % 3) === 0
        ? "This is a longer message to demonstrate multiline capabilities in the chat message bubbles."
        : ""
    }`,
    sender: (startId + i) % 2 === 0 ? "user" : "other",
    timestamp: new Date(Date.now() - (count - i) * 60000).toISOString(),
  }));
};

const ChatScreen = () => {
  const styles = useStyles();
  const [messages, setMessages] = useState(
    generateMockMessages(MESSAGE_PAGE_SIZE, 0)
  );
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const flatListRef = useRef(null);
  const inputRef = useRef(null);
  const inputHeight = useSharedValue(50);

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: String(Date.now()),
      text: inputText.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setInputText("");
    inputHeight.value = 50;

    setTimeout(() => {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 100);
  };

  const loadMoreMessages = () => {
    if (loading || !hasMoreMessages) return;

    setLoading(true);

    setTimeout(() => {
      const newMessages = generateMockMessages(
        MESSAGE_PAGE_SIZE,
        page * MESSAGE_PAGE_SIZE
      );

      if (page >= 4) {
        setHasMoreMessages(false);
      }

      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      (e) => {
        setKeyboardVisible(true);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      () => {
        setKeyboardVisible(false);
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const renderMessage = ({ item }) => <MessageItem message={item} />;

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0084ff" />
      </View>
    );
  };

  const keyExtractor = (item) => item.id;
  const getItemLayout = (_, index) => ({
    length: 80,
    offset: 80 * index,
    index,
  });

  return (
    <Container bottomInsets>
      <Header title="Chat" />
      <ChatContent
        keyboardHeight={keyboardHeight}
        keyboardVisible={keyboardVisible}
        messages={messages}
        inputText={inputText}
        flatListRef={flatListRef}
        inputRef={inputRef}
        renderMessage={renderMessage}
        renderFooter={renderFooter}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        loadMoreMessages={loadMoreMessages}
        MessageInput={
          <MessageInput
            inputRef={inputRef}
            inputText={inputText}
            setInputText={setInputText}
            inputHeight={inputHeight}
            onSend={sendMessage}
          />
        }
      />
      <View style={styles.test(true)} />
    </Container>
  );
};

const useStyles = createStyleSheet(() => ({
  loaderContainer: {
    paddingVertical: 15,
    alignItems: "center",
  },
  test: (isOn: boolean) => ({
    backgroundColor: isOn ? "red" : "blue",
  }),
}));

export default ChatScreen;

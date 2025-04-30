import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Animated from "react-native-reanimated";
import { createStyleSheet } from "@/hooks/useStyles";

type ChatContentProps = {
  keyboardHeight: number;
  keyboardVisible: boolean;
  messages: any[];
  inputText: string;
  flatListRef: React.RefObject<FlatList>;
  inputRef: React.RefObject<TextInput>;
  animatedInputStyle?: any;
  renderMessage: ({ item }: { item: any }) => JSX.Element;
  renderFooter: () => JSX.Element | null;
  keyExtractor: (item: any) => string;
  getItemLayout: (
    data: any,
    index: number
  ) => { length: number; offset: number; index: number };
  loadMoreMessages: () => void;
  handleInputChange?: (text: string) => void;
  handleContentSizeChange?: (event: any) => void;
  sendMessage?: () => void;
  MessageInput: JSX.Element;
};

export const ChatContent = ({
  keyboardHeight,
  keyboardVisible,
  messages,
  flatListRef,
  renderMessage,
  renderFooter,
  keyExtractor,
  getItemLayout,
  loadMoreMessages,
  MessageInput,
}: ChatContentProps) => {
  const styles = useStyles();
  const isIOS = Platform.OS === "ios";

  const flatListProps = {
    ref: flatListRef,
    data: messages,
    renderItem: renderMessage,
    keyExtractor: keyExtractor,
    getItemLayout: getItemLayout,
    onEndReached: loadMoreMessages,
    onEndReachedThreshold: 0.3,
    inverted: true,
    ListFooterComponent: renderFooter,
    contentContainerStyle: styles.flatListContent,
    initialNumToRender: 10,
    maxToRenderPerBatch: 10,
    windowSize: 10,
    removeClippedSubviews: true,
  };

  const content = (
    <View
      style={{
        flex: 1,
        marginBottom: !isIOS && keyboardVisible ? keyboardHeight : 0,
      }}
    >
      <FlatList {...flatListProps} />
      {MessageInput}
    </View>
  );

  if (isIOS) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
};

const useStyles = createStyleSheet((theme) => ({
  flatListContent: {
    paddingVertical: 10,
    paddingTop: Platform.OS === "ios" ? 0 : 70,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.border,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 200,
    backgroundColor: theme.background,
    color: theme.text,
  },
  sendButton: {
    backgroundColor: "#0084ff",
    width: 60,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sendButtonDisabled: {
    backgroundColor: "#c7c7c7",
  },
  sendButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
}));

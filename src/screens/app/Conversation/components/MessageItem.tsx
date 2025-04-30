import { Text, View } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import React from "react";

type MessageItemProps = {
  message: {
    sender: string;
    text: string;
    timestamp: string;
  };
};

export const MessageItem = ({ message }: MessageItemProps) => {
  const styles = useStyles();
  const isUser = message.sender === "user";

  return (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessageContainer : styles.otherMessageContainer,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.otherBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isUser ? styles.userMessageText : styles.otherMessageText,
          ]}
        >
          {message.text}
        </Text>
        <Text style={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    </View>
  );
};

const useStyles = createStyleSheet((theme) => ({
  messageContainer: {
    paddingHorizontal: 15,
    marginVertical: 3,
    flexDirection: "row",
  },
  userMessageContainer: {
    justifyContent: "flex-end",
  },
  otherMessageContainer: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "80%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },
  userBubble: {
    backgroundColor: "#0084ff",
    borderBottomRightRadius: 5,
  },
  otherBubble: {
    backgroundColor: "#e5e5ea",
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: "#ffffff",
  },
  otherMessageText: {
    color: "#000000",
  },
  timestamp: {
    fontSize: 11,
    marginTop: 2,
    opacity: 0.7,
    alignSelf: "flex-end",
    color: "#e5e5ea",
  },
}));
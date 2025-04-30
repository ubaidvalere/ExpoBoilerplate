import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "@/components";
import { createStyleSheet } from "@/hooks/useStyles";
import Animated, {
  useAnimatedStyle,
  SharedValue,
  withTiming,
} from "react-native-reanimated";

type MessageInputProps = {
  inputRef: React.RefObject<TextInput>;
  inputText: string;
  setInputText: (text: string) => void;
  inputHeight: SharedValue<number>;
  onSend: () => void;
};

export const MessageInput = ({
  inputRef,
  inputText,
  setInputText,
  inputHeight,
  onSend,
}: MessageInputProps) => {
  const styles = useStyles();

  const animatedInputStyle = useAnimatedStyle(() => ({
    height: inputHeight.value,
  }));

  const handleContentSizeChange = (event: any) => {
    const { height } = event.nativeEvent.contentSize;
    const newHeight = Math.min(Math.max(50, height), 200);
    inputHeight.value = withTiming(newHeight, { duration: 150 });
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.View style={[styles.inputWrapper, animatedInputStyle]}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          multiline
          onContentSizeChange={handleContentSizeChange}
        />
        <TouchableOpacity
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
          onPress={onSend}
          disabled={!inputText.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const useStyles = createStyleSheet((theme) => ({
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
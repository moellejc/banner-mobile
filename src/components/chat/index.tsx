import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ChatProps {}
const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Chat Screen</Text>
    </View>
  );
};

export default Chat;

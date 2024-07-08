import { View, Text } from "react-native";
import React from "react";
import { styles, text } from "@/constants/Styles";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={text.headerTitle}>Sign In</Text>
      <View style={styles.containerWelcome}>
        <Text style={text.headerWelcome}>Welcome To VietGangz</Text>
        <Text style={[text.headerTitle, { fontSize: 14 }]}>
          Please entry your details to proceed
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

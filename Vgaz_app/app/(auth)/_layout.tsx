import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Auth_Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign_up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Auth_Layout;

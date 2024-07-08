import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles, text } from "@/constants/Styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./sign_in";
const Stack = createStackNavigator();

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.containerIntro}>
        <Image
          source={require("@/assets/images/Logo.png")}
          style={{
            width: 400,
            height: 400,
          }}
        />
        <Text style={text.title}>VIETGANGZ</Text>
        <Text style={text.infoTitle}>OfficialStore-VIETGANGZ</Text>
        <Text style={text.infoTitle}>IG: vietgangz_original</Text>
        <Text style={text.infoTitle}>Đợi xíu nhe ní</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="sign_in"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default LoadingScreen;

import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useState } from "react";
import { styles, text } from "@/constants/Styles";
import { isLoading } from "expo-font";
import { Colors } from "@/constants/Colors";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadData = () => {
    setIsLoading(true);
  };

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
      {isLoading ? (
        <ActivityIndicator size={"large"} color="#F1EFEF" />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default index;

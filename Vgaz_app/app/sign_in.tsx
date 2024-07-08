import { View, Text, TextInput, Image, TouchableHighlight } from "react-native";
import React from "react";
import { styles, text } from "@/constants/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

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
      <View
        style={[
          styles.container,
          {
            alignSelf: "stretch",
            alignItems: "center",
            gap: 6,
            paddingTop: 0,
          },
        ]}
      >
        <Text
          style={[
            text.title,
            {
              fontSize: 15,
              color: Colors.fontTitle,
              marginVertical: 2,
              alignSelf: "baseline",
            },
          ]}
        >
          Username Or Email
        </Text>
        <TextInput
          style={{
            backgroundColor: "white",
            alignSelf: "stretch",
            borderRadius: 25,
            paddingLeft: 15,
            paddingVertical: 12,
            marginVertical: 2,
          }}
          placeholder="Vietgangz@gmail.com or Vietgangz"
          placeholderTextColor="gray"
        ></TextInput>
        <Text
          style={[
            text.title,
            {
              fontSize: 15,
              color: Colors.fontTitle,
              marginVertical: 2,
              alignSelf: "baseline",
            },
          ]}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="**********"
          placeholderTextColor="gray"
          style={{
            backgroundColor: Colors.font,
            color: "black",
            alignSelf: "stretch",
            borderRadius: 25,
            paddingLeft: 15,
            paddingVertical: 12,
            marginVertical: 2,
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => router.push("./(tabs)/home")}
          style={{
            backgroundColor: Colors.fontTitle,
            padding: 12,
            paddingHorizontal: 70,
            marginTop: 30,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontFamily: "PolyRegular",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("./forpass")}>
          <Text style={[text.headerTitle, { fontSize: 14, paddingTop: 5 }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { justifyContent: "flex-end", gap: 10 }]}>
        <Text
          style={[
            text.headerTitle,
            { fontSize: 15, padding: 0, paddingBottom: 0 },
          ]}
        >
          or you can sign up with
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "center", gap: 20 }}>
          <Ionicons
            name="logo-facebook"
            style={{
              width: 33,
              fontSize: 33,
              color: Colors.font,
            }}
          />

          <Ionicons
            name="logo-google"
            style={{
              width: 33,
              fontSize: 33,
              color: Colors.font,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 3 }}>
          <Text style={[text.infoTitle, { fontSize: 17 }]}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.replace("./(auth)/sign_up")}>
            <Text style={[text.headerTitle, { fontSize: 17, paddingTop: 5 }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

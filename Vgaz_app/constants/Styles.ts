import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 20,
    paddingTop: 35,
  },
  containerIntro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  subTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerWelcome: {
    display: "flex",
    alignSelf: "center",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export const text = StyleSheet.create({
  title: {
    color: Colors.font,
    alignItems: "center",
    fontSize: 60,
    fontFamily: "PolyRegular",
    paddingVertical: 5,
  },
  infoTitle: {
    color: Colors.font,
    alignItems: "center",
    fontSize: 20,
    fontFamily: "PolyRegular",
    paddingTop: 5,
  },
  headerTitle: {
    color: Colors.fontTitle,
    alignItems: "center",
    fontSize: 30,
    fontFamily: "PolyRegular",
    paddingTop: 15,
    paddingBottom: 25,
  },
  headerWelcome: {
    color: Colors.fontTitle,
    alignItems: "flex-start",
    fontSize: 25,
    fontFamily: "PolyItalic",
    paddingTop: 5,
  },
});

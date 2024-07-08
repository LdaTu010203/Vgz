import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    padding: 10,
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
});

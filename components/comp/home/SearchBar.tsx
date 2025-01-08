import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, searchIcon }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: searchIcon }} style={styles.icon} />
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
});
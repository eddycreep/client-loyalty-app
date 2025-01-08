import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { CategoryCardProps } from "./types";

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, isActive, arrowIcon }) => {
  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      {arrowIcon && <Image source={{ uri: arrowIcon }} style={styles.arrowIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  activeContainer: {
    backgroundColor: "violet",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  arrowIcon: {
    marginTop: 8,
    width: 24,
    height: 24,
  },
});
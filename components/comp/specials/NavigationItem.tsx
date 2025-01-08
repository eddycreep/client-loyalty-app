import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationItemProps } from "./types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  isActive,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, isActive && styles.active]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24, // equivalent to "pt-6"
  },
  text: {
    fontSize: 16,
  },
  active: {
    color: "#7C3AED", // equivalent to "text-violet-400"
  },
});

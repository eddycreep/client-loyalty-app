import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { SpecialItemProps } from "./types";

export const SpecialItem: React.FC<SpecialItemProps> = ({
  imageUrl,
  title,
  expiryDate,
  price,
}) => {
  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        {/* Removed the `loading` property as it is not supported in React Native */}
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>

      {/* Title container */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {/* Expiry date row */}
      <View style={styles.expiryRow}>
        <Text style={styles.expiryLabel}>Exd: </Text>
        <Text style={styles.expiryDate}>{expiryDate}</Text>
      </View>

      {/* Price container */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 172,
    width: 172,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  imageContainer: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#10b981",
    borderRadius: 20,
  },
  image: {
    aspectRatio: 0.98,
    width: 100,
    marginTop: 0,
    zIndex: 10,
  },
  titleContainer: {
    marginTop: 8,
  },
  titleText: {
    fontSize: 12, // Title font size
    fontWeight: "500", // Medium weight
    color: "#000000", // Black color
  },
  expiryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  expiryLabel: {
    fontSize: 12, // Expiry label font size
    color: "#64748b", // Slate color
  },
  expiryDate: {
    fontSize: 12, // Expiry date font size
    color: "#f43f5e", // Rose color
  },
  priceContainer: {
    alignSelf: "flex-start",
  },
  priceText: {
    fontSize: 14, // Price font size
    fontWeight: "600", // Semi-bold
    color: "#000000", // Black color
  },
});
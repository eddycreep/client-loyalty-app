import * as React from "react";
import { View, Image, Text, StyleSheet} from "react-native";
import { SpecialItem } from "./SpecialItem";
import { NavigationItem } from "./NavigationItem";

const specialItems = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/de35329de90fde341e109c1b347e12f1e81475ee07beca507804fe8a70c55aeb?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Chipotle Cheesy Chicken",
    expiryDate: "Wed Dec 31 2024",
    price: "R20.95",
  },
];

const navigationItems = [
  { label: "Home", isActive: true },
  { label: "Favorites" },
  { label: "Account" },
  { label: "More" },
];

export const SpecialsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/a1f6fa693fccc9d0baaf33fa4c65b0098c3689d7bd53e8a1b60d85bfa3fa4398?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
            }}
            style={styles.headerImage}
          />
          <View style={styles.locationContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/9608eaa49b343bfb361aa738fb23df60f9fff19da53d6cfd648fd0ac8fcc18ad?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
              }}
              style={styles.locationImage}
            />
            <View>
              <Text>Chicago, IL</Text>
            </View>
          </View>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/ad51af432ba968d29e668cade676edf5347f742baff9b2f04fab7e38b8752108?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
            }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Active Specials</Text>
        </View>
        <View style={styles.specialsContainer}>
          {specialItems.map((item, index) => (
            <SpecialItem key={index} {...item} />
          ))}
        </View>
      </View>
      <View style={styles.navigation}>
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    borderRadius: 24,
    maxWidth: 480,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: "contain",
  },
  titleContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  specialsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 32,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(67,93,107,0.25)",
    shadowOffset: { width: -6, height: -6 },
    shadowRadius: 30,
    shadowOpacity: 1,
  },
});
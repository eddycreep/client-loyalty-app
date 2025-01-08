import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { CategoryCard } from "../../components/comp/home/CategoryCard";
import { SearchBar } from "../../components/comp/home/SearchBar";
import { Location } from "../../components/comp/home/Location";

const categories = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/42c6a8f5602f17f4ae02458bb36b00801b509ba1e1308c01684a19ea1536ce73?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Burgers",
    isActive: true,
    arrowIcon:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/f1f2eaeefcc3e86b3819beadfdb666c8b890de457becac82fa5ad62189ead764?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/4370a8331c8e1eb54fe5d362324c37c992206e9ae376bc64819139a2efc7ffe4?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Pizza",
    arrowIcon:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/f48db7cada512bef93f3326102f4a9197f4cf1b9a76337e5f8ee174766440b57?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/98358c8d21d9b674212b0dfc5af3b9c187b6dde7ea27b75ed48cf18123da3496?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
    title: "Cakes",
    arrowIcon:
      "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/f48db7cada512bef93f3326102f4a9197f4cf1b9a76337e5f8ee174766440b57?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://example.com/logo.png" }}
          style={styles.logo}
        />
        <Location city="Chicago" state="IL" />
        <Image
          source={{ uri: "https://example.com/user.png" }}
          style={styles.userAvatar}
        />
      </View>

      <Text style={styles.greeting}>Hey! {"\n"}Let's get your order</Text>
      {/* <SearchBar /> */}
      <SearchBar 
        placeholder="Search for delicious food..." 
        searchIcon="https://example.com/search-icon.png" 
      />


      <View style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryWrapper}>
            <CategoryCard {...category} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  logo: { width: 24, height: 24 },
  userAvatar: { width: 40, height: 40, borderRadius: 20 },
  greeting: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  categories: { flexDirection: "row", marginTop: 16 },
  categoryWrapper: { flex: 1 },
});
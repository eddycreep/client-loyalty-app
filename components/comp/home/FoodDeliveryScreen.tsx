import * as React from "react";
import { View, Image, Text } from "react-native";
import { CategoryCard } from "./CategoryCard";
import { SearchBar } from "./SearchBar";
import { Location } from "./Location";

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

export const FoodDeliveryScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col pt-8 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
      <View className="flex flex-col px-4 w-full">
        <View className="flex gap-5 justify-between items-center w-full text-base font-medium text-black">
          <Image
            // loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/a1f6fa693fccc9d0baaf33fa4c65b0098c3689d7bd53e8a1b60d85bfa3fa4398?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
            }}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <View className="flex gap-1 self-stretch my-auto">
            <Image
              // loading="lazy"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/9608eaa49b343bfb361aa738fb23df60f9fff19da53d6cfd648fd0ac8fcc18ad?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
              }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <Location city="Chicago" state="IL" />
          </View>
          <Image
            // loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/ad51af432ba968d29e668cade676edf5347f742baff9b2f04fab7e38b8752108?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&",
            }}
            className="object-contain shrink-0 self-stretch w-10 rounded-xl aspect-square"
          />
        </View>

        <View className="mt-4 text-base font-semibold text-black">
          <Text>Hey! {"\n"}Let's get your order</Text>
        </View>

        <SearchBar
          searchIcon="https://cdn.builder.io/api/v1/image/assets/83e343ceb2c4461a81f2d831cd0ec1db/d78254fae9d0661268bd6bf1e3d8442016c91057265ece6c483a5216b0b61fb0?apiKey=83e343ceb2c4461a81f2d831cd0ec1db&"
          placeholder="Search our delicious burgers"
        />

        <View className="flex gap-8 mt-6">
          {categories.map((category, index) => (
            <View
              key={index}
              className={
                index === 0
                  ? "flex flex-col flex-1 whitespace-nowrap"
                  : "flex flex-col flex-1 font-medium"
              }
            >
              <CategoryCard {...category} />
              {index === 0 && (
                <View className="self-start mt-7 text-lg font-semibold text-black">
                  <Text>Specials</Text>
                </View>
              )}
              {index === 2 && (
                <View className="self-end mt-9 text-xs text-violet-400">
                  <Text>View all &gt;</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
      <View className="flex mt-5 w-full bg-white rounded-2xl min-h-[324px] shadow-[-6px_-6px_30px_rgba(0,0,0,0.15)]" />
    </View>
  );
};
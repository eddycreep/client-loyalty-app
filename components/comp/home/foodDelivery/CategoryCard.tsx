import * as React from "react";
import { View, Image, Text } from "react-native";

import { CategoryCardProps } from "./types";

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  isActive = false,
  arrowIcon,
}) => {
  return (
    <View
      className={`flex flex-col items-center px-5 py-4 text-base font-medium text-center ${
        isActive ? "bg-violet-400 text-white" : "bg-white text-black"
      } rounded-3xl`}
    >
      <Image
        // loading="lazy"
        source={{ uri: icon }}
        className="object-contain self-stretch w-full rounded-xl aspect-square"
      />
      <View className="mt-6">
        <Text>{title}</Text>
      </View>
      {arrowIcon && (
        <Image
          // loading="lazy"
          source={{ uri: arrowIcon }}
          className="object-contain mt-5 aspect-square w-[26px]"
        />
      )}
    </View>
  );
};

import * as React from "react";
import { View, Image, Text } from "react-native";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  searchIcon,
}) => {
  return (
    <View className="flex gap-2.5 px-3.5 py-3 mt-4 text-xs bg-white rounded-md shadow-[4px_4px_30px_rgba(0,0,0,0.15)] text-slate-500">
      <Image
        // loading="lazy"
        source={{ uri: searchIcon }}
        className="object-contain shrink-0 aspect-square w-[18px]"
      />
      <View className="flex-auto w-[287px]">
        <Text>{placeholder}</Text>
      </View>
    </View>
  );
};

import * as React from "react";
import { View, Text } from "react-native";
import { LocationProps } from "./types";

export const Location: React.FC<LocationProps> = ({ city, state }) => {
  return (
    <View>
      <Text>
        {city}, {state}
      </Text>
    </View>
  );
};

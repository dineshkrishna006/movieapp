import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Details_id = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={{ marginTop: 80 }}>The id of the page is {id}</Text>
    </View>
  );
};

export default Details_id;

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
export function getServerSideProps() {
  return {
    props: {
      options: {
        headerShown: false, // Hides the header for this specific page
      },
    },
  };
}
const Details_id = () => {
  const { id } = useLocalSearchParams();
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Text style={{ marginTop: 80 }}>The id of the page is {id}</Text>
    </View>
  );
};

export default Details_id;

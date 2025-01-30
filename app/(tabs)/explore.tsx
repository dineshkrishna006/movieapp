import TrendingCard from "@/components/Trendingcard";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Link href={`/details/129552`} style={{ marginTop: 80 }}>
        <Pressable style={{ paddingLeft: 20 }}>
          <Text style={{ color: "black", fontSize: 50 }}>Hello</Text>
        </Pressable>
      </Link>
      {/* <TrendingCard
            imageurl={require("@/assets/images/h1.png")}
            poster_path={`/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg`}
          /> */}
    </View>
  );
}

// const styles = StyleSheet.create({});

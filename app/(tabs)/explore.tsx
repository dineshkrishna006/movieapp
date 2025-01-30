import TrendingCard from "@/components/Trendingcard";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";

export default function TabTwoScreen() {
  const router = useRouter();
  // useEffect(() => {
  //   router.prefetch("/detail/129552");
  // }, []);
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
      {/* <Link href={`/detail/129552`} style={{ marginTop: 80 }}> */}
      <Pressable
        style={{ paddingLeft: 20 }}
        onPress={() => {
          router.push(`/detail/129552`);
        }}
      >
        <TrendingCard
          id={"123445"}
          imageurl={require("@/assets/images/h1.png")}
          poster_path={`/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg`}
        />
      </Pressable>
      {/* </Link> */}
      {/* <TouchableOpacity
        onPress={() => {
          router.replace(`/detail/129552`);
        }}
        activeOpacity={0.7}
        style={{
          inset: 0,
          marginTop: 80,
        }}
      >
        <TrendingCard
          imageurl={require("@/assets/images/h1.png")}
          poster_path={`/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg`}
        />
      </TouchableOpacity> */}
    </View>
  );
}

// const styles = StyleSheet.create({});

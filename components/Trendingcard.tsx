//@ts-nocheck
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";


import Numberedimg from "../assets/images/h4.png";
import { useRouter } from "expo-router";

const TrendingCard = ({
  id,
  imageurl,
  poster_path,
}: {
  id: string;
  imageurl: string;
  poster_path: string;
}) => {
  const router = useRouter();
  return (
    <TouchableHighlight
      hitSlop={200}
      onPress={() => {
        router.push(`/detail/${id}`);
        console.log("Pressed");
      }}
    >
      <View style={{ position: "relative", marginRight: 10 }}>
        <Image
          source={imageurl}
          width={100}
          height={100}
          style={{ position: "absolute", left: 5, top: 50 }}
        />

        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          }}
          width={130}
          height={180}
          style={{ borderRadius: 20, position: "absolute", left: 60 }}
        />
      </View>
    </TouchableHighlight>
  );
};

export default TrendingCard;

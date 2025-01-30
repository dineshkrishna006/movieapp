import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
//@ts-ignore
import bgimage from "@/assets/images/hero-bg.png";
import TrendingCard from "@/components/Trendingcard";
import getTrendingMovies, { getTrendingTvShows } from "@/scrape";
//@ts-ignore
import axios from "axios";
// Import the images using require() instead of direct imports
const numbered_images = [
  require("@/assets/images/h1.png"),
  require("@/assets/images/h2.png"),
  require("@/assets/images/h3.png"),
  require("@/assets/images/h4.png"),
  require("@/assets/images/h5.png"),
];
interface TrendingMovies {
  id: string;
  poster_path: string;
  title: string;
}
const App = () => {
  const [trendingmovies, setTrendingMovies] = useState<TrendingMovies[]>([]);
  const [trendingtvshows, setTrendingTvshows] = useState<TrendingMovies[]>([]);
  const getmovieData = async () => {
    try {
      const res = await getTrendingMovies();
      console.log("API Response:", res); // Debug log
      if (res?.status === 200) {
        setTrendingMovies(res.arr_);
      }
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };
  const gettvshowsData = async () => {
    try {
      const res = await getTrendingTvShows();
      console.log("API Response:", res); // Debug log
      if (res?.status === 200) {
        setTrendingTvshows(res.tvshows);
      }
    } catch (error) {
      console.error("Error fetching trending tv shows:", error);
    }
  };
  useEffect(() => {
    getmovieData();
    gettvshowsData();
  }, []); // Empty dependency array for single fetch on mount

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
        <ImageBackground
          source={bgimage}
          resizeMode="cover"
          style={styles.image_bg_container}
        >
          <Image
            source={require("@/assets/images/hero.png")}
            style={{
              width: 300,
              height: 180,
              justifyContent: "flex-start",
              marginTop: 80,
            }}
          />
          <View>
            <Text style={styles.title}>
              Find <Text style={{ color: "#ccbcf7" }}>Movies</Text>
            </Text>
            <Text style={styles.title}>You'll Enjoy</Text>
            <Text style={styles.title}>Without hassle</Text>
            {/* <Text style={styles.title}>Hassle</Text> */}
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingVertical: 10,
              width: "100%",
              paddingHorizontal: 20,
              gap: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 30,
              }}
            >
              Trending Movies
            </Text>
            <View
              style={{
                minWidth: "100%",
                height: 180,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollView
                scrollEnabled={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
              >
                {trendingmovies?.map((movie_, ind) => {
                  return (
                    <TrendingCard
                      key={movie_.id}
                      imageurl={numbered_images[ind]}
                      poster_path={movie_.poster_path}
                    />
                  );
                })}
                {/* <TrendingCard
                  imageurl={require("@/assets/images/h1.png")}
                  poster_path={"4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg"}
                /> */}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingVertical: 20,
              width: "100%",
              paddingHorizontal: 20,
              gap: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 30,
              }}
            >
              Trending TV Shows
            </Text>
            <View
              style={{
                minWidth: "100%",
                height: 250,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <ScrollView
                scrollEnabled={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
              >
                {trendingtvshows?.map((tv_, ind) => {
                  return (
                    <TrendingCard
                      key={tv_.id}
                      imageurl={numbered_images[ind]}
                      poster_path={tv_.poster_path}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    flexDirection: "column",
    minHeight: "100%",
    // Aligns items to the top (start)
  },
  image_bg_container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    // padding: 10,
  },
  title: {
    fontSize: 40,
    display: "flex",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  flexContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  fancy_text: {
    fontSize: 190,
    fontFamily: "Bebas Neue, sans-serif",
    color: "#CECEFB66",
  },
  scrollViewContent: {
    // flexDirection: "row",
    minWidth: "100%",
    gap: 200,
    paddingRight: 200,
  },
});

export default App;

import { ScrollView, FlatList, View, StyleSheet } from "react-native";
import TrendingCard from "./Trendingcard";

const TrendingSection = () => {
  return (
    <View>
      <ScrollView
        scrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
    minWidth: "100%",
    gap: 180,
    paddingRight: 180,
  },
});

export default TrendingSection;

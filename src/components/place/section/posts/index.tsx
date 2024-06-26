import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import PostCard from "./postcard";
import { styles } from "./styles";
import { createPosts, Post as PostData } from "../../../../tests/data";

const postsData = createPosts(10);

interface PlacePostsSectionProps {}

const PlacePostsSection = () => {
  return (
    <View style={styles.container}>
      <TitleSection smallTitle="Posts" style={{ marginHorizontal: 10 }} />
      <FlatList
        data={postsData}
        keyExtractor={(item: PostData) => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <PostCard data={item.item as PostData} />}
        onRefresh={() => console.log("is refreshing")}
        onEndReachedThreshold={0.1}
        onEndReached={() => console.log("end reached")}
      />
    </View>
  );
};

export default PlacePostsSection;

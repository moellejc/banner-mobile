import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import Post from "../../../post";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import MasonryList from "@react-native-seoul/masonry-list";
import { createPosts, Post as PostData } from "../../../../tests/data";

const postsData = createPosts(10);

interface PlacePostsSectionProps {}

const PlacePostsSection = () => {
  return (
    <View style={styles.container}>
      <TitleSection smallTitle="Posts" style={{ marginHorizontal: 10 }} />
      <MasonryList
        data={postsData}
        keyExtractor={(item: PostData) => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <Post data={item.item as PostData} />}
        refreshing={false}
        onRefresh={() => console.log("is refreshing")}
        onEndReachedThreshold={0.1}
        onEndReached={() => console.log("end reached")}
      />
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        scrollEventThrottle={16}
        style={styles.postsList}
        data={postsData}
        contentOffset={{ x: -10, y: 0 }}
        keyExtractor={(item: PostData) => `${item.id}`}
        renderItem={(item) => <Post data={item.item} />}
      /> */}
    </View>
  );
};

export default PlacePostsSection;

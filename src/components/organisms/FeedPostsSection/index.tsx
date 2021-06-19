import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

interface PostsSectionProps {
  height?: number;
  width?: number;
}

const PostSection: React.FC<PostsSectionProps> = (props: PostsSectionProps) => {
  useEffect(() => {
    // TODO: load posts

    return;
  });

  return <View></View>;
};

PostSection.defaultProps = {
  height: 30,
  width: 100,
};

const styles = StyleSheet.create({
  btn: {},
});

export default PostSection;

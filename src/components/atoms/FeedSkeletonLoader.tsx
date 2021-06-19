import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const FeedSkeletonLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        {/* header location section */}
        <SkeletonPlaceholder.Item width={170} height={30} borderRadius={4} />
        <SkeletonPlaceholder.Item
          width={120}
          height={15}
          borderRadius={4}
          marginTop={10}
        />
        <SkeletonPlaceholder.Item
          width={100}
          height={15}
          borderRadius={4}
          marginTop={10}
        />

        {/* people section */}
        <SkeletonPlaceholder.Item
          width={170}
          height={30}
          borderRadius={4}
          marginTop={30}
        />
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginTop={10}
        >
          <SkeletonPlaceholder.Item
            width={40}
            height={40}
            borderRadius={20}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={40}
            height={40}
            borderRadius={20}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={40}
            height={40}
            borderRadius={20}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={40}
            height={40}
            borderRadius={20}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={40}
            height={40}
            borderRadius={20}
            marginRight={20}
          />
        </SkeletonPlaceholder.Item>

        {/* stories section */}
        <SkeletonPlaceholder.Item
          width={170}
          height={30}
          borderRadius={4}
          marginTop={30}
        />
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginTop={10}
        >
          <SkeletonPlaceholder.Item
            width={100}
            height={150}
            borderRadius={15}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={150}
            borderRadius={15}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={150}
            borderRadius={15}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={150}
            borderRadius={15}
            marginRight={20}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={150}
            borderRadius={15}
            marginRight={20}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

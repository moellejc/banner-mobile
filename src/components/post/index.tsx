import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { DateTime } from "luxon";
import { Post as PostData, Media } from "../../tests/data";

interface PostProps {
  data: PostData;
}

const formatElapsedTime = (postDateISO: Date): string => {
  const diff = DateTime.now().diff(DateTime.fromJSDate(postDateISO), "second");

  // min = 60s
  if (diff.seconds < 60) return `${Math.floor(diff.seconds)} sec`;

  // hour = 3600s
  if (diff.seconds >= 60 && diff.seconds < 3600)
    return `${Math.floor(diff.as("minutes"))} min`;

  // day = 86400s
  if (diff.seconds >= 3600 && diff.seconds < 86400)
    return `${Math.floor(diff.as("hours"))}h`;

  // week = 604800s
  if (diff.seconds >= 86400 && diff.seconds < 604800)
    return `${Math.floor(diff.as("days"))}d`;

  // month = 2419200s
  if (diff.seconds >= 604800 && diff.seconds < 2419200)
    return `${Math.floor(diff.as("weeks"))}w`;

  // year = 365d = 31536000s
  if (diff.seconds >= 2419200 && diff.seconds < 31536000)
    return `${Math.floor(diff.as("months"))}m`;

  if (diff.seconds >= 31536000) return `${Math.floor(diff.as("years"))}y`;

  return "";
};

const Post = ({ data }: PostProps) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity>
            <Avatar
              bg="gray.300"
              alignSelf="center"
              size="md"
              source={{
                uri: data.user.avatar,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerInfoContainer}>
          <View style={styles.locationContainer}>
            <TouchableOpacity>
              <Text style={[styles.parentLocation, styles.locationTxt]}>
                West Chester
              </Text>
            </TouchableOpacity>
            <View style={styles.locationSeparator}>
              <FontAwesomeIcon color="black" size={12} icon={faAngleRight} />
            </View>
            <TouchableOpacity>
              <Text style={[styles.currentLocation, styles.locationTxt]}>
                Topgolf
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.usernameContainer}>
            <TouchableOpacity>
              <Text style={styles.usernameTxt}>{`@${data.user.username}`}</Text>
            </TouchableOpacity>
            <Text style={styles.postTimeTxt}>
              {formatElapsedTime(data.postDate)}
            </Text>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <FontAwesomeIcon color="gray" size={24} icon={faEllipsis} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageTxt}>{data.content.message}</Text>
        </View>
        <View style={styles.mediaContainer}>
          <TouchableOpacity>
            <Image
              style={styles.mediaImage}
              resizeMode={"cover"}
              source={{ uri: data.content.media[0].url }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.ratingContainer}></View>
        <View style={styles.commentsContainer}></View>
        <View style={styles.shareContainer}></View>
      </View>
    </View>
  );
};

export default Post;

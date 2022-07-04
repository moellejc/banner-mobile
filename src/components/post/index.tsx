import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleRight,
  faEllipsis,
  faArrowUp,
  faArrowDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { DateTime } from "luxon";
import { Shadow } from "react-native-shadow-2";
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
  const [isMediaLoading, setIsMediaLoading] = useState(true);

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
            <View style={styles.mediaImageContainer}>
              <Image
                style={styles.mediaImage}
                resizeMode={"cover"}
                source={{ uri: data.content.media[0].url }}
                onLoadStart={() => setIsMediaLoading(true)}
                onLoadEnd={() => setIsMediaLoading(false)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingIcon}>
            <TouchableOpacity>
              <FontAwesomeIcon color="black" size={20} icon={faArrowUp} />
            </TouchableOpacity>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingTxt}>27</Text>
          </View>
          <View style={styles.ratingIcon}>
            <TouchableOpacity>
              <FontAwesomeIcon color="black" size={20} icon={faArrowDown} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <View style={styles.commentsIcon}>
            <TouchableOpacity>
              <FontAwesomeIcon color="black" size={20} icon={faMessage} />
            </TouchableOpacity>
          </View>
          <View style={styles.commentsCount}>
            <Text style={styles.commentsCountTxt}>10</Text>
          </View>
        </View>
        <View style={styles.shareContainer}>
          <View style={styles.commentsIcon}>
            <TouchableOpacity>
              <FontAwesomeIcon color="black" size={20} icon={faShare} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
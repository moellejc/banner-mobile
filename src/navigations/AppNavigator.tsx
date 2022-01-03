import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { FeedScreen } from "../screens/feed";
import { MessagesScreen } from "../screens/messages";
import { CameraScreen } from "../screens/camera";
import { DiscoverScreen } from "../screens/discover";
import { AddScreen } from "../screens/add";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <LinearGradient
            colors={["black", "transparent"]}
            start={[0, 1]}
            end={[0, 0]}
            style={styles.tabBarBackground}
          ></LinearGradient>
        ),
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused: boolean }) => (
            <View>
              <Image
                source={require("../../assets/images/icon-feed-white.png")}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused: boolean }) => (
            <View>
              <Image
                source={require("../../assets/images/icon-chat-full-white.png")}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused: boolean }) => (
            <View>
              <Image
                source={require("../../assets/images/icon-camera-circle.png")}
                resizeMode="contain"
                style={styles.tabIconCamera}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused: boolean }) => (
            <View>
              <Image
                source={require("../../assets/images/icon-explore.png")}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused: boolean }) => (
            <View>
              <Image
                source={require("../../assets/images/icon-plus-thick-white.png")}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    borderTopWidth: 0,
  },
  tabBarBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  tabIconCamera: {
    width: 55,
    height: 55,
  },
});

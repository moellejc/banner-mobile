import React from "react";
import { View, Image } from "react-native";
import { FeedScreen } from "../screens/feed";
import { MessagesScreen } from "../screens/messages";
import { CameraScreen } from "../screens/camera";
import { DiscoverScreen } from "../screens/discover";
import { AddScreen } from "../screens/add";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const barOptions = {
  showLabel: false,
  style: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
};

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
        },
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
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "white",
                }}
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
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "white",
                }}
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
                style={{
                  width: 25,
                  height: 25,
                }}
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
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "white",
                }}
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
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "white",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;

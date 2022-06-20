import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import HubScreen from "../screens/hub";
// import { MessagesScreen } from "../screens/messages";
import { CameraScreen } from "../screens/camera";
// import { DiscoverScreen } from "../screens/discover";
import { AddScreen } from "../screens/add";
// import { ProfileScreen } from "../screens/profile";
import { SearchScreen } from "../screens/search";
import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import AppTheme from "../constants/styles/Theme";

const Stack = createSharedElementStackNavigator();
// const Tab = createBottomTabNavigator();

const screenOptions = {
  title: "",
  headerStyle: {
    backgroundColor: "transparent",
    shadowColor: "transparent",
  },
  headerTintColor: "white",
};

const forSlide = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -1, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "white" },
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Hub" component={HubScreen} options={screenOptions} />
      {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }): StackNavigationOptions => {
          return {
            headerTitle: "",
            headerStyle: {
              backgroundColor: "transparent",
              shadowColor: "transparent",
            },
            headerTintColor: "white",
            headerRight: () => (
              <TouchableWithoutFeedback
                style={{}}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={32}
                  color="#000"
                />
              </TouchableWithoutFeedback>
            ),
            gestureDirection: "horizontal-inverted",
            cardStyleInterpolator: forSlide,
          };
        }}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`ProfilePhoto`];
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }): StackNavigationOptions => {
          return {
            headerTitle: "",
            headerStyle: {
              backgroundColor: "transparent",
              shadowColor: "transparent",
            },
            headerTintColor: "white",
            headerLeft: () => (
              <TouchableWithoutFeedback
                style={{}}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="chevron-back-outline" size={32} color="#000" />
              </TouchableWithoutFeedback>
            ),
            gestureDirection: "horizontal",
            cardStyleInterpolator: forSlide,
          };
        }}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`SearchIcon`];
        }}
      /> */}
    </Stack.Navigator>
  );

  // {{
  //   ...screenOptions,
  //   gestureDirection: "horizontal",
  //   cardStyleInterpolator: forSlide,
  // }}

  // return (
  //   <Tab.Navigator
  //     screenOptions={{
  //       tabBarShowLabel: false,
  //       headerShown: false,
  //       tabBarStyle: styles.tabBar,
  //       tabBarBackground: () => (
  //         <LinearGradient
  //           colors={["black", "transparent"]}
  //           start={[0, 1]}
  //           end={[0, 0]}
  //           style={styles.tabBarBackground}
  //         ></LinearGradient>
  //       ),
  //     }}
  //   >
  //     <Tab.Screen
  //       name="Feed"
  //       component={FeedScreen}
  //       options={{
  //         tabBarIcon: ({ focused: boolean }) => (
  //           <View>
  //             <Image
  //               source={require("../../assets/images/icon-feed-white.png")}
  //               resizeMode="contain"
  //               style={styles.tabIcon}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Messages"
  //       component={MessagesScreen}
  //       options={{
  //         tabBarIcon: ({ focused: boolean }) => (
  //           <View>
  //             <Image
  //               source={require("../../assets/images/icon-chat-full-white.png")}
  //               resizeMode="contain"
  //               style={styles.tabIcon}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Camera"
  //       component={CameraScreen}
  //       options={{
  //         tabBarIcon: ({ focused: boolean }) => (
  //           <View>
  //             <Image
  //               source={require("../../assets/images/icon-camera-circle.png")}
  //               resizeMode="contain"
  //               style={styles.tabIconCamera}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Discover"
  //       component={DiscoverScreen}
  //       options={{
  //         tabBarIcon: ({ focused: boolean }) => (
  //           <View>
  //             <Image
  //               source={require("../../assets/images/icon-explore.png")}
  //               resizeMode="contain"
  //               style={styles.tabIcon}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Add"
  //       component={AddScreen}
  //       options={{
  //         tabBarIcon: ({ focused: boolean }) => (
  //           <View>
  //             <Image
  //               source={require("../../assets/images/icon-plus-thick-white.png")}
  //               resizeMode="contain"
  //               style={styles.tabIcon}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //   </Tab.Navigator>
  // );
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

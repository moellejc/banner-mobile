import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, SectionList, StatusBar } from "react-native";

const SectionData = [
    {
      title: "People",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Stories",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
  ];

  const PeopleData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Person',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Person',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Person',
    },
  ];

  const StoriesData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-98a7ds9fp8',
      title: 'First Story',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-9a8sdyfnp9ua',
      title: 'Second Story',
    },
    {
      id: '58694a0f-3da1-471f-bd96-fhiludhdfg',
      title: 'Third Story',
    },
  ];

type FeedSectionProps = {
    title: string
};
const Item = ({ title }: FeedSectionProps) => (
<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>
);

const PlaceSectionHeader = () => (
    <View>
        <View><Text>People</Text></View>
        <View><Text>Who's Here</Text></View>
    </View>
);

const PersonHere = () => (
    <View></View>
);

const WhosHereContent = () => (
    <View>
        <FlatList
        data={PeopleData}
        horizontal={true}
        renderItem={PersonHere}
        keyExtractor={item => item.id}
      />
    </View>
);

const StoryHere = () => (
    <View></View>
);
const StoriesContent = () => (
    <View>
        <FlatList
        data={StoriesData}
        horizontal={true}
        renderItem={StoryHere}
        keyExtractor={item => item.id}
      />
    </View>
);

type UltraAppProps = {};
export const UltraApp: React.FC = () => {

  return (
    <View>
      <View style={{backgroundColor: "blue"}}><Text>Place Background</Text></View>
      <View><Text>Place Header</Text></View>

      
      <SectionList
        sections={SectionData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
            return <WhosHereContent />}
        }
        renderSectionHeader={({ section: { title } }) => (<PlaceSectionHeader />)
        }
        /> 

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
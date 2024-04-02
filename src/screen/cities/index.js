/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  


} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CitiesData from './dummy';


const Cities = (props) => {
  return (
    <ScrollView style={styles.mainContainerStyle}>
      <Text style={styles.headingTextStyle} testID='Europe'>Europe</Text>
      <FlatList
    
        style={styles.listStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CitiesData.europe}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.containerStyle}>
              <Image
                src={item.url}
                resizeMode="contain"
                style={styles.cityImageStyle}
                testID={`Europe-image-${index}`}
              />
              <Text style={styles.labelStyle}  testID={`Europe-text-${index}`}>{item.name}</Text>
            </View>
          );
        }}
      />
      <Text style={styles.headingTextStyle}  testID={`USA/Canada`}>USA/Canada</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        style={styles.listStyle}
        horizontal
        data={CitiesData.usaCanada}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.containerStyle}>
              <Image
                src={item.url}
                resizeMode="contain"
                style={styles.cityImageStyle}
                testID={`USA/Canada-image-${index}`}
              />
              <Text style={styles.labelStyle} testID={`USA/Canada-text-${index}`}>{item.name}</Text>
            </View>
          );
        }}
      />
       <Text style={styles.headingTextStyle} testID={`Asia`}>Asia</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        style={styles.listStyle}
        horizontal
        data={CitiesData.asia}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.containerStyle}>
              <Image
                src={item.url}
                resizeMode="contain"
                style={styles.cityImageStyle}
                testID={`Asia-image-${index}`}
              />
              <Text style={styles.labelStyle} testID={`Asia-text-${index}`}>{item.name}</Text>
            </View>
          );
        }}
      />





    </ScrollView>
  );
}

export default Cities;

const styles = StyleSheet.create({
  mainContainerStyle: {
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",

  },
  listStyle: {
    width: "100%",
    height: 240,
    paddingLeft:10
  },
  containerStyle: {

    alignItems: "center",
    marginRight:10,
    marginLeft:10

  },
  labelStyle: {
    color: "#000",
    fontSize: 13
  },
  cityImageStyle: {
    width: 250,
    height: 200
  },
  headingTextStyle: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  }

});

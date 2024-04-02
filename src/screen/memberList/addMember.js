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
  TouchableOpacity


} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; 

const AddMember = (props) => {
  return (
    <View style={styles.mainContainerStyle}>
    
     


    </View>
  );
}

export default AddMember;

const styles = StyleSheet.create({
  mainContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:"#fff"
  },
  containerStyle: {
    width: "80%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginTop:20
  },
  labelStyle: {
    color: "#000",
    fontSize: 13
  }

});

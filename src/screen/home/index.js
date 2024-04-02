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




const Home = (props) => {
  return (
    <View style={styles.mainContainerStyle}>

      <TouchableOpacity
        accessibilityLabel={"Water_Counter"}
        testID='WATERCOUNTER'
        style={styles.containerStyle}
        onPress={() => {
          console.log("Water counter is Pressed");
        }}>
        <Text style={styles.labelStyle}>WATER COUNTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // accessibilityActions={"Electricity_Counter"}
        style={styles.containerStyle}
        testID='ELECTRICITYCOUNTER'
        onPress={() => {
          console.log("Electricity counter is Pressed");
        }}>
        <Text style={styles.labelStyle}>ELECTRICITY COUNTER</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        //accessibilityActions={"Gas_Counter"}
        style={styles.containerStyle}
        testID='GASCOUNTER'
        onPress={() => {
          console.log("Gas counter is Pressed");
        }}>
        <Text style={styles.labelStyle} >GAS COUNTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //accessibilityActions={"Broadband_Counter"}
        style={styles.containerStyle}
        testID='BROADBANDCOUNTER'

        onPress={() => {
          console.log("BROADBAND counter is Pressed");
          props.navigation.goBack();
        }}>
        <Text style={styles.labelStyle} >BROADBAND COUNTER</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
      //accessibilityActions={"Broadband_Counter"}
        style={styles.containerStyle}
       // testID='BROADBANDCOUNTER'
       testID='GASCOUNTER'
        onPress={() => {
          console.log("BROADBAND counter is Pressed"); 
          props.navigation.goBack();
        }}>           
        <Text style={styles.labelStyle} testID='textInBroadband'>BROADBAND COUNTER</Text>
      </TouchableOpacity> */}


    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff"
  },
  containerStyle: {
    width: "80%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 20
  },
  labelStyle: {
    color: "#000",
    fontSize: 13
  }

});

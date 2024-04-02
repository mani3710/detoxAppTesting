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
import * as Routes from './src/navigation/routes';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = (props) => {
  return (
    <View style={styles.mainContainerStyle}>
      <TouchableOpacity
        accessibilityLabel={"Counter"} 
        style={styles.containerStyle}
        onPress={() => {
           console.log("Counter is Pressed"); 
          //props.navigation.navigate(Routes.Home)
  
        }}>
        <Text style={styles.labelStyle} testID='homeSectionText-Counters'>COUNTERS</Text>
      </TouchableOpacity>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity
     
        style={styles.containerStyle}
        onPress={() => {
           console.log("Counter is Members"); 
          props.navigation.navigate(Routes.MemberList);
  
        }}>
        <Text style={styles.labelStyle} testID='homeSectionText-Members'>Member List</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      testID='Cities'
     style={styles.containerStyle}
     onPress={() => {
        console.log("Counter is Cities"); 
       props.navigation.navigate(Routes.Cities)

     }}>
     <Text style={styles.labelStyle} testID='homeSectionText-Cities'>Cities</Text>
   </TouchableOpacity>
   <TouchableOpacity
     style={styles.containerStyle}
     onPress={() => {
        console.log("Counter is home"); 
      // props.navigation.navigate(Routes.Home)

     }}>
     <Text style={styles.labelStyle} testID='homeSectionText-Animation'>Animation</Text>
   </TouchableOpacity>
   <TouchableOpacity
     style={styles.containerStyle}
     onPress={() => {
        console.log("Counter is Extra1"); 
      //props.navigation.navigate(Routes.Home)

     }}>
     <Text style={styles.labelStyle}testID='extraSteps-1'>Extra1</Text>
   </TouchableOpacity>
   <TouchableOpacity
     style={styles.containerStyle}
     onPress={() => {
        console.log("Counter is Extra2"); 
      //props.navigation.navigate(Routes.Home)

     }}>
     <Text style={styles.labelStyle}testID='extraSteps-2'>Extra2</Text>
   </TouchableOpacity>
    


    </View>
  );
}

export default App;

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

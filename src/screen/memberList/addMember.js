/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions


} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CommonInputView from './textInputComp';
const {height,width} = Dimensions.get("screen");
const AddMember = (props) => {
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [dob, setDob] = useState("");
  const [startDay, setStartDay] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidViewStyle}>
      <ScrollView style={{height:height,width:width}}>
        <View style={styles.mainContainerStyle}>
          <CommonInputView
            title="Name :" 
            value={name}
            onChangeText={setName}
            placeholder="Please enter name"
          />
          <CommonInputView
            title="Surename :" 
            value={surename}
            onChangeText={setSurename}
            placeholder="Please enter Surename"
          />
           <CommonInputView
            title="Date of Birth :" 
            value={dob}
            onChangeText={setDob}
            placeholder="Please enter DOB"
          />
           <CommonInputView
            title="Start Day :" 
            value={startDay}
            onChangeText={setStartDay}
            placeholder="Please enter start date"
          />
           <CommonInputView
            title="Address Line one :" 
            value={addressLine1}
            onChangeText={setAddressLine1}
            placeholder="Please enter address line 1"
          />
           <CommonInputView
            title="Address Line two :" 
            value={addressLine2}
            onChangeText={setAddressLine2}
            placeholder="Please enter address line 2"
          />
           <CommonInputView
            title="City :" 
            value={city}
            onChangeText={setCity}
            placeholder="Please enter city"
          />





        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AddMember;

const styles = StyleSheet.create({
  mainContainerStyle: {
    // justifyContent: "center",
    // alignItems: "center",
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
  },
  keyboardAvoidViewStyle: {
    flex: 1
  }

});

import React from "react";
import {View,Text,TextInput,StyleSheet,Dimensions} from 'react-native';
const {height,width} = Dimensions.get("screen");

const CommonInputView = (props)=>{

    return(
        <View style={[styles.containerStyle, props.containerStyle]}>
           <Text style={[styles.titleLabelStyle,props.titleLabelStyle]}>{props.title}</Text>
          <TextInput
          style={[styles.textInputStyle,props.textInputStyle]}
          value={props.value}
          onChangeText={props.onChangeText}  
          placeholder={props.placeholder}
          />
        </View>
    );
}

export default CommonInputView;
const styles =StyleSheet.create({
    containerStyle:{
         width:width*0.86,
         alignSelf:"center",
         marginTop:16
    },
    titleLabelStyle:{
        color:"gray",
        fontSize:12,
        lineHeight:20
    },
    textInputStyle:{
      width:"100%",
      fontSize:18,
      color:"#000",
      borderColor:"gray",
      borderWidth:1,
      borderRadius:10,
      marginTop:9,
      paddingHorizontal:8
    }
})
import React from "react";
import {View,Text,TextInput,StyleSheet,Dimensions} from 'react-native';
const {height,width} = Dimensions.get("screen");

const CommonInputView = (props)=>{
    const {
        containerStyle,
        titleLabelStyle,
        textInputStyle,
        onChangeText,
        placeholder,
        title,
        value,
        formTestId
    } = props;

    return(
        <View style={[styles.containerStyle, containerStyle]}>
           <Text 
           testID={`formTitle-${formTestId}`}
           style={[styles.titleLabelStyle,titleLabelStyle]}
           >{title}</Text>
          <TextInput
          style={[styles.textInputStyle,textInputStyle]}
          value={value}
          onChangeText={onChangeText}  
          placeholder={placeholder}
          testID={`formInputFiled-${formTestId}`}
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
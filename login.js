import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function loginPage(){

  return(

    <View style={styles.container}>

      <Text style={styles.title}>My App</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <Button title="login"/>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'pink',
    flex:1,
    justifyContent:"center",
    padding:20,
    alignItems:'center'
  },

  title:{
    color:'green',
    fontWeight:'bold',
    fontSize:22,
    marginBottom:20,
    textAlign:"center"
  },

  input:{
    width:'30%',
    borderWidth:1,
    marginBottom:15,
    padding:10,
    margin:5,

  }

});
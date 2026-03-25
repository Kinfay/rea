import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
import { Checkbox } from 'react-native-paper';

export default function HomePage({ navigation }) {

  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const[image,setImage]=useState(null);
  const [reding, setReding] = useState(false);
  const [sport, setSport] = useState(false);
const [music, setMusict] = useState(false);
  const pickImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,quality:1,
    });

    if(!result.canceled)
    {
      setImage(result.assets[0].uri);
    }
  };

  return (
<View>
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Student Registration</Text>

<Text style={styles.label} >   First Name:  <TextInput style={styles.input}/></Text>
<Text style={styles.label}>Middle Name:<TextInput style={styles.input}/></Text>
<Text style={styles.label}>   Last Name: <TextInput style={styles.input}/></Text>
<Text style={styles.label}>            Age: <TextInput style={styles.input}/></Text>
  <Text style={styles.label}>            ID:  <TextInput style={styles.input}/></Text>
  <Text style={styles.label}>        Email: <TextInput style={styles.input}/></Text>
      

      <Text style={styles.label}>Gender</Text>

      <View style={styles.radioContainer}>
        
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender("Male")}
        >
          <View style={styles.radioCircle}>
            {gender === "Male" && <View style={styles.selectedRb}/>}
          </View>
          <Text>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender("Female")}
        >
          <View style={styles.radioCircle}>
            {gender === "Female" && <View style={styles.selectedRb}/>}
          </View>
          <Text>Female</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.label}>Department</Text>

      <Picker
        selectedValue={department}
        onValueChange={(itemValue) => setDepartment(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Department" value="" />
        <Picker.Item label="Computer Science (CS)" value="CS" />
        <Picker.Item label="Information Technology (IT)" value="IT" />
        <Picker.Item label="Information System (IS)" value="IS" />
        <Picker.Item label="Software Engineering (SE)" value="SE" />
      </Picker>

      <Text style={styles.label}>image</Text>

     <Button title="Upload Image" onPress={pickImage} />

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height:200 }} 
       />)}
  <View>
<ScrollView>
      <Text>xx</Text>

      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
</ScrollView>
    </View>
  );

<Text style={styles.label}>Address</Text>
      <TextInput style={styles.input}/>


      <Text style={styles.label}>Comment</Text>
      <TextInput style={styles.inputcomment}/>

      <Button title="Submit"/>

    </ScrollView>
</View>
);
}


const styles = StyleSheet.create({

  container:{
    flexGrow:1,
    padding:20,
    alignItems:'center'
  },

  backButton:{
    alignSelf:'flex-start',
    marginBottom:20
  },

  backText:{
    color:"blue",
    fontSize:18
  },

  title:{
    fontWeight:'bold',
    fontSize:22,
    textAlign:"center",
    marginBottom:20
  },

  label:{
    width:'40%',
    fontSize:16,
    marginTop:5
  },

  input:{
    width:'30%',
    borderWidth:1,
    borderRadius:6,
    marginBottom:20,
    padding:8
  },

  inputcomment:{
    width:'30%',
    borderWidth:1,
    borderRadius:6,
    marginBottom:20,
    padding:30
  },

  radioContainer:{
    flexDirection:"row",
    marginBottom:20
  },

  radioButton:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:20
  },
  radioCircle:{
    height:20,
    width:20,
    borderRadius:10,
    borderWidth:2,
    borderColor:"#000",
    marginRight:20
  },

  selectedRb:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:"#000"
  },

  picker:{
    width:'30%',
    marginBottom:20
  },

  image:{
    width:100,
    height:100,
    marginBottom:20
  }

});
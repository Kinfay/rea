import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homeScreen from './home';
import loginScreen from './login';

const Stack = createNativeStackNavigator();
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.titlebar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('home')}
        >
          <Text style={styles.buttontext}>home</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('#')}
        >
          <Text style={styles.buttontext}>About Us</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('#')}
        >
          <Text style={styles.buttontext}>Contact Us</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('login')}
        >
          <Text style={styles.buttontext}>login</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.sidebar}>
        <View style={styles.inner1}>
          <Text style={styles.innerText}>Sidebar 1</Text>
        </View>
        <View style={styles.inner2}>
          <Text style={styles.innerText}>Sidebar 2</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="login" component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 

  },
  titlebar: {
    flexDirection: 'row',
    backgroundColor: '#ecfeff',
    padding: 10,
    justifyContent: 'space-around',
  },
  sidebar: {
    flex: 1,
    flexDirection: 'row',
  },
  inner1: {
    flex: 1,
    backgroundColor: '#3bdc0efa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner2: {
    flex: 6,
    backgroundColor: '#e10e3b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#131312',
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
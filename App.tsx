/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const createUser = async () => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        'a.roman@gmail.com',
        '12345678',
      );

      console.log(user);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Pressable onPress={createUser}>
        <Text>Register</Text>
      </Pressable>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 100,
  },
});

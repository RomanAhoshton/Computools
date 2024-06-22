import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../../screens';
import {ScreenNames} from '../../helpers';
import {RootStackParamList} from '../../types';
import TopTabs from '../TopTabs';

import auth from '@react-native-firebase/auth';

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const currentUser = auth().currentUser;

  return (
    <Stack.Navigator
      initialRouteName={
        currentUser ? ScreenNames.TopTabs : ScreenNames.RegisterScreen
      }>
      <Stack.Screen
        name={ScreenNames.TopTabs}
        component={TopTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.RegisterScreen}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

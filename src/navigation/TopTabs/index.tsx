import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FeedsScreen, ProfileScreen} from '../../screens';
import {ScreenNames} from '../../helpers';
import {TopTabs} from '../../types';
import {colors} from '../../helpers';

export default () => {
  const Tab = createMaterialTopTabNavigator<TopTabs>();

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {paddingTop: 50},
        tabBarStyle: {height: 100, backgroundColor: colors.dark},

        tabBarIndicatorStyle: {
          backgroundColor: colors.blue,
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.blue,
        },
      }}>
      <Tab.Screen
        component={FeedsScreen}
        name={ScreenNames.FeedsScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        component={ProfileScreen}
        name={ScreenNames.ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

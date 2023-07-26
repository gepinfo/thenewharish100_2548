import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.bottamTab, }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            height: 75,
            display: getTabBarVisibility(route),
          },
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route:any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (
    routeName === 'SelectedActivity' ||
    routeName === 'SearchActivity' ||
    routeName === 'ActivityInsight'
  ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;

const styles = StyleSheet.create({
  bottamTab: {
    height: 75
  },
  featuers: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 100,
  },
});

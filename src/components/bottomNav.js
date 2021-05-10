import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeightScreen from '../screes/weightScreen';

// import {MaterialCommunityIcons} from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Weight"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        tabStyle: {paddingBottom: 10},
        style: {marginVertical: 10, borderRadius: 50, marginHorizontal: 10},
      }}>
      <Tab.Screen
        name="Weight"
        component={WeightScreen}
        options={{
          tabBarLabel: 'Home',
          //   tabBarIcon: ({color, size}) => (
          //     <MaterialCommunityIcons name="home" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          //   tabBarIcon: ({color, size}) => (
          //     <MaterialCommunityIcons name="bell" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          //   tabBarIcon: ({color, size}) => (
          //     <MaterialCommunityIcons name="account" color={color} size={size} />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <BottomTabs />;
}

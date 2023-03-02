import React, { ReactElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../views/4-screens/Home/Home";
import History from "../../views/4-screens/History/History";
import { MainTabRoutes } from "../stack-routes";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.brand,
  style: { backgroundColor: Colors.white, paddingBottom: 12 },
};

export default function MainTabs(): ReactElement {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={MainTabRoutes.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MainTabRoutes.History}
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="columns" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

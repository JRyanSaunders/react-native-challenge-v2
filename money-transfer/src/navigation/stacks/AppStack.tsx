import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { ReactElement } from "react";
import { AppStackRoutes } from "../stack-routes";
import MainTabs from "../tabs/MainTabs";

const Stack = createNativeStackNavigator();

export default function AppStack(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppStackRoutes.MainTabs} component={MainTabs} />
    </Stack.Navigator>
  );
}

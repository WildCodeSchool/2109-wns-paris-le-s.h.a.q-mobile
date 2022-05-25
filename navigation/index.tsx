import { FontAwesome } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import LoginScreen from "@screens/SignInScreen";
import SignUpScreen from "@screens/SignUpScreen";
import TaskScreen from "@screens/TaskScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "../types";
import CustomDrawerContent from "@components/Drawer";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DefaultTheme : DarkTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#111827",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Tasks"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

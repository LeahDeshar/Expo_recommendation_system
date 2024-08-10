import { StyleSheet } from "react-native";
import React from "react";
import { ThemeProvider } from "../constants/ThemeProvider";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/store";
const Layout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack>
          {/* <Stack.Screen
          name="(side)/home/HomeScreen"
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen name="(side)" options={{ headerShown: false }} />
          <Stack.Screen
            name="PopularityView"
            options={{
              title: "Popularity Based System",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="ContentBasedView"
            options={{
              title: "Content Based System",
              headerBackTitleVisible: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;

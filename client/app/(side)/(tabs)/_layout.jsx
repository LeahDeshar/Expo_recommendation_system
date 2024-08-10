import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    // add icon to header
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        headerTitle: "Recommendation System",
        headerStyle: { backgroundColor: "#b27805" },
        headerStatusBarHeight: 55,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#b27805" : "grey"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

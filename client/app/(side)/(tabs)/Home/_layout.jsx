import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../constants/ThemeProvider";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const { colors, setScheme, dark } = useTheme();
  const navigation = useNavigation();

  const projects = [
    {
      title: "Popularity Based",
      screen: "PopularityView",
      isCompleted: false,
    },
    {
      title: "Content Based Filtering",
      screen: "ContentBasedView",
      isCompleted: false,
    },
  ];

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return <ListProject projects={projects} handlePress={handlePress} />;
};

const ListProject = ({ projects, handlePress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={projects}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.screen)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {item.isCompleted ? (
                <Feather name="check-circle" size={20} />
              ) : (
                <Feather name="circle" size={20} />
              )}
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.screen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  item: {
    // da9711
    backgroundColor: "#da9711",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
});

export default HomeScreen;

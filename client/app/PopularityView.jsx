import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const PopularityView = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.3:8000/recommendations/")
      .then((response) => {
        setRecommendations(response.data.recommendations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,

        marginBottom: 50,
      }}
    >
      <ScrollView>
        {recommendations.map((movie, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              margin: 10,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
            }}
          >
            <Text>{movie.title}</Text>
            <Text>
              Rating: {movie.mean_rating} ({movie.rating_count}
              ratings)
            </Text>
            <Text>
              Rate Count: {movie.rating_count}
              ratings{" "}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularityView;

const styles = StyleSheet.create({});

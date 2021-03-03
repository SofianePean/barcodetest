import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Coucou depuis la home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // paddingTop: 50,
    flex: 1,
  },
});

export default Home;

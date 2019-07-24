import React, { Component } from "react";
import { View, Text } from "react-native";

class ProductsListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ProductsListScreen </Text>
      </View>
    );
  }
}

export default ProductsListScreen;

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
};

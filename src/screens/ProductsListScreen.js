// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { ProductCollection } from "../models/Product";

type Props = {
  products: Product[]
};

class ProductsListScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.products.map(product => (
          <Text key={product.id}> {product.name} </Text>
        ))}
      </View>
    );
  }
}

export default connect(({ productsReducer }) => ({
  products: Object.values(productsReducer.products)
}))(ProductsListScreen);

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
};

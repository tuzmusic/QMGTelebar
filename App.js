import React from "react";
import { Text, View } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import type { Saga } from "redux-saga";
import productsReducer from "./src/redux/reducers/productsReducer";
import productSaga from "./src/redux/actions/productActions";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
};

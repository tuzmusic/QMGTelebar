import React from "react";
import { Text, View } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import type { Saga } from "redux-saga";
import productsReducer from "./src/redux/reducers/productsReducer";
import productSaga from "./src/redux/actions/productActions";

const store = setupAndReturnStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
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

function setupAndReturnStore() {
  const combinedReducer = combineReducers({
    productsReducer
  });

  function* rootSaga(): Saga<void> {
    sagaMiddleware.run(productSaga);
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducer,
    {},
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

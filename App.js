import React from "react";
import { Text, View } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import type { Saga } from "redux-saga";
import productsReducer from "./src/redux/reducers/productsReducer";
import productSaga from "./src/redux/actions/productActions";
import AppNavigator from "./src/containers/AppNavigator";

const store = setupAndReturnStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
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

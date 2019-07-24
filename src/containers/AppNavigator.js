// @flow
import React, { Component } from "react";
import { Platform, View } from "react-native";
import { connect } from "react-redux";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ProductsListScreen from "../screens/ProductsListScreen";
import TabBarIcon from "../components/TabBarIcon";

const ListScreen = {
  screen: ProductsListScreen,
  navigationOptions: { title: "Products" }
};

const ListStack = createStackNavigator({ ListScreen });
ListStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

const AppNavigator = createAppContainer(ListStack);

type AppProps = {
  navigation: Object
};

class AppContainer extends Component<AppProps> {
  // static router = TabNavigator.router;
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <LoadingIndicator message={this.props.loadingMessage} /> */}
        <AppNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect()(AppContainer);

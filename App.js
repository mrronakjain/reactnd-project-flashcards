import React, { Component } from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./components/MainNavigator";
import UdaciStatusBar from "./components/UdaciStatusBar";
import store from "./state/store";
import { setLocalNotification } from "./utils/notifications";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

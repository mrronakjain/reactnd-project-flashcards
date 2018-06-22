import React from "react";
import { StatusBar, View } from "react-native";
import { Constants } from "expo";
import { purple } from "../utils/colors";

class UdaciStatusBar extends React.Component {
  render() {
    return (
      <View style={{ height: Constants.statusBarHeight }}>
        <StatusBar
          translucent
          backgroundColor={purple}
          barStyle="light-content"
        />
      </View>
    );
  }
}

export default UdaciStatusBar;

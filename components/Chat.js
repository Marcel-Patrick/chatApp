import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { backgroundColor, username, textColor } = this.props.route.params;
    this.props.navigation.setOptions({ title: username });

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor,
        }}
      >
        <Text style={{ fontSize: 22, color: textColor }}>Hi {username},</Text>
        <Text style={{ fontSize: 22, color: textColor }}> welcome to your chat area.</Text>
        <Text style={{ fontSize: 18, color: textColor }}>Your color choice is great!</Text>
      </View>
    );
  }
}

// Styling section start:
const styles = StyleSheet.create({});

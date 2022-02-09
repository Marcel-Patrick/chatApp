import React, { Component } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.props.route.params.username });

    this.setState({
      messages: [
        {
          // system message to urse after login or by starting a new chatnp
          _id: 1,
          text:
            "Hi " +
            this.props.route.params.username +
            ", welcome to your chat area. " +
            "Your color choice is great!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "black",
            borderColor: "white",
            borderWidth: 1,
          },
        }}
      />
    );
  }

  render() {
    const { backgroundColor } = this.props.route.params;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <GiftedChat
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          {Platform.OS === "android" ? <KeyboardAvoidingView behavior="height" /> : null}
        </View>
      </View>
    );
  }
}

// Styling section start:
const styles = StyleSheet.create({});

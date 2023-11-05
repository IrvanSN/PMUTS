import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

class SmallButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}

export default SmallButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#AA0000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  }
})

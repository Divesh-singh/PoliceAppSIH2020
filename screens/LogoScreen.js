import React from 'react';
import {Image, View} from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../assets/ncrb.png')}
          style={{ width: 50, height: 50, alignItems: "center" }}
        />
      );
    }
  }
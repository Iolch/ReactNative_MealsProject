import React from 'react';

// this package makes it easy to add buttons to header
import { HeaderButton } from 'react-navigation-header-buttons';

//this package will allow us to use icons
// import {Ionicicons} from '@expo/vector-icons';

import {
  StyleSheet,
  Platform,
} from 'react-native';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
        {...props}
        IconComponent={}
        iconSize={23}
        color= {Platform.OS ===  'android' ? 'white' : Colors.primary}
        />
  );
};

const styles = StyleSheet.create({
});

export default CustomHeaderButton;

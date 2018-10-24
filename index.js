import React from 'react';
import { AppRegistry } from 'react-native';
import setup from './js/page/setup'
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent('tianyue', () => setup);

import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text>Main View</Text>
  </View>
);

Main.navigationOptions = {
  title: 'Sua Biblioteca',
};

export default Main;

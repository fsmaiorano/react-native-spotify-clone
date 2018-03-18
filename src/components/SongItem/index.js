import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SongItem = ({ song }) => (
  <TouchableOpacity onPress={() => { }} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    <Icon name="play-circle-outline" size={24} style={styles.play} />
  </TouchableOpacity>
);

SongItem.prototype = {
  song: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default SongItem;

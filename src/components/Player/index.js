import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from 'store/ducks/player';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const currentSong = {
  title: 'Papercut',
  author: 'Linkin Park',
};

const Player = ({ player, play, pause }) => {
  if (player.currentSong.id === undefined) return null;

  const pressFunction = player.paused ? play : pause;
  const icon = player.paused ? 'play-circle-filled' : 'pause-circle-filled';

  return (
    <View style={styles.container}>
      <View style={styles.currentSong}>
        <Text style={styles.title}>{player.currentSong.title}</Text>
        <Text style={styles.author}>{player.currentSong.author}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => { }}>
          <Icon name="skip-previous" size={24} style={styles.controlIcons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.play} onPress={pressFunction}>
          <Icon name={icon} size={36} style={styles.controlIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Icon name="skip-next" size={24} style={styles.controlIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);

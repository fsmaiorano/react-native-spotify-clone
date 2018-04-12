import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import SongList from 'components/SongList';

import styles from './styles';

const Album = ({ navigation }) => {
  const { album } = navigation.state.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: album.thumbnail }}
        blurRadius={5}
      >
        <View style={styles.thumbnailContainer}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <SongList data={album.songs} />
    </View>
  );
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

export default Album;

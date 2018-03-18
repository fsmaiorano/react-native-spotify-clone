import React from 'react';
import {
  View,
  TextInput,
  FlatList,
} from 'react-native';

import SongItem from 'components/SongItem';
import styles from './styles';

const songs = [{
  id: 0,
  title: 'Papercut',
  author: 'Linkin Park',
},
{
  id: 1,
  title: 'One Step Closer',
  author: 'Linkin Park',
},
{
  id: 2,
  title: 'With You',
  author: 'Linkin Park',
},
{
  id: 3,
  title: 'Points of Authority',
  author: 'Linkin Park',
},
{
  id: 4,
  title: 'Crawling',
  author: 'Linkin Park',
},
];

const Search = () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Buscar por músicas..."
        placeholderTextColor="#666"
        underlineColorAndroid="transparent"
      />
    </View>
    <FlatList
      data={songs}
      keyExtractor={song => String(song.id)}
      renderItem={({ item }) => <SongItem song={item} />}
    />
  </View>
);

export default Search;

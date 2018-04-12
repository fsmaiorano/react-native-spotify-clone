import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from 'store/ducks/player';
import { FlatList } from 'react-native';
import SongItem from 'components/SongItem';

const SongList = ({ data, setSongRequest, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={song => String(song.id)}
    renderItem={({ item }) => <SongItem onPress={() => setSongRequest(item, data)} song={item} />}
  />
);

SongList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  setSongRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(null, mapDispatchToProps)(SongList);

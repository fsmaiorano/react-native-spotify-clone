import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    ...ifIphoneX({
      // Iphone X
      height: 74,
      paddingBottom: metrics.basePadding,
    }, {
      // Not Iphone X
      height: 54,
    }),
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSong: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    color: colors.white,
  },
  author: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 3,
  },
  controlIcons: {
    color: colors.white,
  },
  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
});

export default styles;

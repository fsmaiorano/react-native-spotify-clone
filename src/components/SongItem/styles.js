import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },

  author: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 3,
  },

  play: {
    color: colors.regular,
  },

});

export default styles;

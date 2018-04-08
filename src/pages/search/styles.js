import {
  StyleSheet
} from 'react-native';
import {
  colors,
  metrics
} from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary,
    paddingBottom: metrics.basePadding,
  },
  searchInput: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 42,
    color: colors.white,
  },
  loading : {
    marginTop: metrics.basePadding,
  }
});

export default styles;

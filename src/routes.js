import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Search from 'pages/search';
import Album from 'pages/album';

const Routes = StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.secundary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
  },
});

export default Routes;

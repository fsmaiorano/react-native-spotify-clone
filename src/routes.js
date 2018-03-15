import { StackNavigator } from 'react-navigation';

import Main from 'pages/main';
import Search from 'pages/search';
import Album from 'pages/album';

const Routes = StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
});

export default Routes;

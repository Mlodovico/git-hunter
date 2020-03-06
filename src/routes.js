import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import User from './pages/User';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#e71'
      },
      headerTintColor: '#FFF'
    }
  }),
);

export default Routes;

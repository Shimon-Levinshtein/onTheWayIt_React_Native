import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 
// import { Ionicons } from '@expo/vector-icons';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';

import MainPage from '../screens/MainPage';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    // fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    // fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitle: 'A Screen'
};

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const DrawerMainNavigator = createDrawerNavigator(
  {
    Main: {
      screen: MainNavigator,
      navigationOptions: {
        drawerLabel: 'ראשי'
      }
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      labelStyle: {
        // fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(DrawerMainNavigator);

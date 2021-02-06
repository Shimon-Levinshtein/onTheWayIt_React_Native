import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo-app-loading';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Navigator from './navigation/Navigator';


const store = createStore(reducers, applyMiddleware(thunk));

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <Navigator />

      {/* <Text >kjbkcfbkdgjbkkbjdkbjkbjdkjkd</Text> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//import ib to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';

//create component 

const App = () => 
// (
//   <Header />
// );
  
(
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <Albumlist />
  </View>
);


//render it to device
AppRegistry.registerComponent('Test', () => App);

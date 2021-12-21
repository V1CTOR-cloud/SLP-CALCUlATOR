/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {
   StyleSheet,
   ImageBackground
 } from 'react-native'; 

 class App extends Component {
   render() {
     return (
       <ImageBackground
       style={styles.contenidor}
       resizeMode='cover'
       source={require('../img/wallpaper.png')}>                   
       </ImageBackground>
     );
   }
 }
 
 const styles = StyleSheet.create({
     contenidor: {
       flex: 1,
     }
 });
 
 export default App;
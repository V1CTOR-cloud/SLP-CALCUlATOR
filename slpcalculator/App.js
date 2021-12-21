/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import Splashscreen from './components/Splashscreen.js';
 import Main from './components/Main.js';

 import {
   StyleSheet,
   View,
 } from 'react-native';
 
 class App extends Component {
   state = {
     timePassed: false
  }
  componentDidMount () {
   setTimeout(() => this.setState({timePassed: true}), 2000)
 }
   render() {
     return this.state.timePassed ? (
       <View style={styles.contenidor}>
         <Main></Main>
       </View>
     ) : <Splashscreen></Splashscreen>
   }
 }
 
 const styles = StyleSheet.create({
     contenidor: {
       flex: 1,
       backgroundColor: 'whitesmoke',
     },
 });
 
 export default App;

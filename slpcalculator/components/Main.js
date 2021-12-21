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
   View,
   Text,
   TextInput,
   Button,
   ImageBackground,
   Image
 } from 'react-native';
 
 
 
 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            slp: 0,
            precioSlp: 0,
            porcentaje: 0,
            total: 'Total',
            color: 'black' 
        }
    }    

    handleSlp = (text) => {
        this.setState({ slp: text });
     }
     handlePrecioSlp = (text) => {
        this.setState({ precioSlp: text });
     }
     handlePorcentaje = (text) => {
         this.setState({porcentaje: text});
     } 
     handleTotal = (text) => {
        this.setState({total: text});
    }
     handleColor =(text) =>{
        this.setState({color: text});
     }   

     calculo = (slp, precio, porcentaje) => {
        let totalPorcentaje = (porcentaje / 100);
        let totalBruto = slp * precio;
        let totalNeto = (totalBruto * totalPorcentaje).toFixed(2);        
        let cadena = '';       

        if (isNaN(totalNeto)) {
            cadena = 'The data does not match, use . at the price, ej: 0.035'
        }else{
            if (totalNeto < 5) {
                cadena = totalNeto.toString() + '€';
                this.handleColor('#d9534f');
            }else{
                if (totalNeto < 20) {
                    cadena = totalNeto.toString() + '€';
                    this.handleColor('#f0ad4e');
                }else{
                    if (totalNeto < 50) {
                        cadena = totalNeto.toString() + '€';
                        this.handleColor('#5cb85c');
                    }else{
                        cadena = totalNeto.toString() + '€';
                        this.handleColor('#5cb85c');
                    }
                }
            }
        }
        return this.handleTotal(cadena);
     }

   render() {
     return(
       <ImageBackground 
       style={styles.contenidor}
       resizeMode='cover'
       source={ require('../img/wallpaper3.jpg')}>
           <View style={styles.content}>
                <Text style={styles.h1}>SLP calculator</Text>
                
                <Text style={styles.p}>SLP</Text>
                <TextInput
                    style={styles.input1}
                    placeholder='Amount'
                    placeholderTextColor='black'
                    onChangeText={this.handleSlp}
                />
                <Text style={styles.p}>SLP Price</Text>
                <TextInput
                    style={styles.input1}
                    placeholder='Actual price'
                    placeholderTextColor='black'
                    onChangeText={this.handlePrecioSlp}
                />
                <Text style={styles.p}>% </Text>
                <TextInput
                    style={styles.input1}
                    placeholder='% you want to receive'
                    placeholderTextColor='black'
                    onChangeText={this.handlePorcentaje}
                />
                <TextInput
                    style={styles.input3}
                    placeholder={this.state.total}
                    placeholderTextColor={this.state.color}
                    textAlign='center'
                    editable={false}
                />
                <View style={styles.boton}>
                    <Button
                        color='#5bc0de'
                        title='Calculate'
                        onPress={() => this.calculo(this.state.slp, this.state.precioSlp, this.state.porcentaje)}
                    />
                </View>
           </View>
       </ImageBackground>
     );
   }
 }
 
 const styles = StyleSheet.create({
     contenidor: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',

     },
     content: {
        opacity: 0.8,
        height:'70%',
        width: '80%', 
        backgroundColor: '#fff',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',  
        marginBottom: '5%',
     },
     h1: {
        fontSize: 30,
        color: 'black'       
     },
     p: {
        fontSize: 20,
        color: 'black'              
     },
     input1: {
        height: '10%',
        width: 200,
        borderColor: '#5bc0de',
        borderWidth: 1,
        borderRadius: 10,        
        padding: 5,
        backgroundColor: 'whitesmoke'        
     },
     input3: {
        height: '15%',
        width: 200,
        borderColor: '#5bc0de',
        borderWidth: 1,
        borderRadius: 10,        
        padding: 5,       
        backgroundColor: 'whitesmoke'      
     },
     boton: {
        backgroundColor: '#5bc0de',        
     },
     logo: {
        height: '10%',
        width: '15%'
     }
 });
 
 export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
    getDataUsingGet() {
        //GET request 
        var URI = "https://alinea.herokuapp.com/Diagnosa/Headache?data=[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53]"
        fetch(URI, {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
                //If response is in json then in success
            .then((responseJson) => {
                //Success 
                // console.log(responseJson);
                alert(JSON.stringify(responseJson));
                return JSON.stringify(responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                alert(JSON.stringify(error));
                console.error(error);
            });
    } 
    
    
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {/* <Text style={styles.instructions}>{this.getDataUsingGet}</Text> */}
        {/*Running GET Request*/}
        <Button title='Get Data Using GET' onPress={this.getDataUsingGet} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

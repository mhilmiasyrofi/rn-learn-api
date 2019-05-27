/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';

// import Api from './src/services/Api'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// var api = new Api();
type Props = {};

export default class App extends Component<Props> {   

    convertArrayToString = (arr) => {
        return arr.toString();
    }

    getHeadacheDiagnosis = (data) => { 

        data_str = this.convertArrayToString(data);

        var URI = "https://alinea.herokuapp.com/Diagnosa/Headache?data=[" + data_str + "]";
        console.log(URI);
        // var URI = "https://alinea.herokuapp.com/Diagnosa/Headache?data=[0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53]";

        fetch(URI, {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log("responseJson");
                console.log(responseJson);
                // alert(JSON.stringify(responseJson));
                return JSON.stringify(responseJson);
                // return responseJson;
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
    }

    render() {
        
        var arr = [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53];        
        
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            {/* <Text style={styles.instructions}>{arr.toString()}</Text> */}
            {/* <Text style={styles.instructions}>{this.getHeadacheDiagnosis(arr)}</Text> */}
            
            {/*Running GET Request*/}
            <Button title='Get Data Using GET' onPress={this.getHeadacheDiagnosis(arr)} />
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

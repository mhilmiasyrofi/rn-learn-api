/**
 * API untuk http request diagnosa penyakit
 * https://github.com/mhilmiasyrofi
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';

class Api extends Component{

    getHeadacheDiagnosis = () => {
        
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
                // alert(JSON.stringify(responseJson));
                return JSON.stringify(responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                // alert(JSON.stringify(error));
                console.error(error);
            });    
    }
}
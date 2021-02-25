import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,ScrollView, Image } from 'react-native';

export default class Intro extends Component{

    render(){
        return(
            <ScrollView style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                Corruption is a form of dishonesty or criminal offense undertaken 
                by a person or organization entrusted with a position of authority, 
                to acquire illicit benefit or abuse power for one's private gain. 
                Corruption may include many activities including bribery and embezzlement, 
                though it may also involve practices that are legal in many countries.
                [1] Political corruption occurs when an office-holder or other governmental 
                employee acts in an official capacity for personal gain. Corruption is most 
                commonplace in kleptocracies, oligarchies, narco-states and mafia states
                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Prevention')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('HomeScreen')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Back
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity ,ScrollView, Image } from 'react-native';

export default class Awareness extends Component{

    render(){
        return(
            <ScrollView style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Aware About Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                The Foreign Corrupt Practices Act (FCPA, USA 1977) was an early 
                paradigmatic law for many western countries i.e. industrial countries of 
                the OECD. There, for the first time the old principal-agent approach was 
                moved back where mainly the victim (a society, private or public) and a 
                passive corrupt member (an individual) were considered, whereas the active 
                corrupt part was not in the focus of legal prosecution. Unprecedented, the law of an 
                industrial country directly condemned active corruption, particularly in international 
                business transactions, 
                which was at that time in contradiction to anti-bribery activities of the World Bank 
                and its spin-off organization Transparency International.
                As early as 1989 the OECD had established an ad hoc Working Group in order to explore 
                    "...the concepts fundamental to the offense of corruption, and the exercise of 
                    national jurisdiction over offenses committed wholly or partially abroad."[109] 
                    Based on the FCPA concept, the Working Group presented in 1994 the then "OECD 
                    Anti-Bribery Recommendation" as precursor for the OECD Convention on Combating 
                    Bribery of Foreign Public Officials in International Business Transactions[110] 
                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Thanks')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Complaint')
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


import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,ScrollView , Image } from 'react-native';

export default class Complaint extends Component{

    render(){
        return(
            <ScrollView style = {{flex:1,justifyContent:"center",alignItems:"center" }}>
                <Text style={{textAlign:"center",fontSize:30,fontFamily:"san-serif",color:"red"}}>
                    Complaint About Corruption
                </Text>
                <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",color:"red"}}>
                We challenge the conventional definition of corruption as the ‘abuse of public
office for private gain’, making a distinction between legal and illegal forms of
corruption, and paying more attention to corporate patterns of corruption (which also
affect public corruption). We undertake to identify general determinants of the pattern of
legal and illegal corruption worldwide, and present a model where both corruption
(modelled explicitly in the context of allocations) and the political equilibrium are
endogenous. Three types of equilibrium outcomes are identified as a function of basic
parameters, namely initial conditions (assets/productivity), equality, and fundamental
political accountability. These equilibria are: i) an illegal corruption equilibrium, where
the political elite does not face binding incentives; ii) a legal corruption equilibrium,
where the political elite is obliged to incur on a cost to “deceive” the population, and, iii)
a no-corruption equilibrium, where the population cannot be deceived. An integral
empirical test of the model is performed, using a broad range of variables and sources. Its
core variables, namely regarding legal corruption (and other manifestations of corporate
corruption) come from an original survey developed with the World Economic Forum (in
the Executive Opinion Survey 2004 of the Global Competitiveness Report). The
empirical results generally validate the model and explanations. Some salient
implications emerge
                </Text>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Awareness')
          }}
                style={{width: 100 ,height:50 , borderWidth : 1 ,marginTop :30 , 
                    paddingTop: 10 , borderRadius : 7,backgroundColor : "green" }}>
                    <Text style={{textAlign:"center",fontSize:20,fontFamily:"san-serif",
                    color:"red"}}>
                        Next
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Prevention')
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


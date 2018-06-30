import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types"


const weatherCases = {
  Rain: {
    colors:['#00C6FB','#005BEA'],
    title: "Raning like a MF",
    subtitle: "for more info look outside",
    icon: "ios-rainy"
  },
  Clear:{
    colors:['#FEF253','#FF7300'],
    title: "Sunny as fuck",
    subtitle: "get your ass burnt",
    icon: "ios-sunny"
  },
  Thunderstorm:{
    colors:['#00ECBC','#007ADF'],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "ios-thunderstorm"
  },
  clouds:{
    colors:['#D7D2CC','#304352'],
    title: "Coudes",
    subtitle: "I know, fucking boring",
    icon: "ios-cludy"
  },
  Snow:{
    colors:['#7DE2FC','#B9B6E5'],
    title: "Colde as balls",
    subtitle: "Do you wanna biuld the snowman",
    icon: "ios-snow"
  },
  Drizzle:{
    colors:['#89F7FE','#66A6FF'],
    title: "Drizzle",
    subtitle: "Is like rain, but gay",
    icon: "ios-rainy-outline"
  },
  Haze:{
    colors:['#89F7FE','#66A6FF'],
    title: "Haze",
    subtitle: "I don't know what that is ",
    icon: "ios-rainy-outline"
  },
}
// export default class Weather extends Component{
//   render(){
//     return(
//
//     <LinearGradient colors={["#00C6FB", "#005BEA"]} style ={styles.container}>
//       <View style ={styles.upper}>
//        <Ionicons color = "white" size = {144} name = "ios-rainy"/>
//        <Text style ={styles.temp}>35도</Text>
//      </View>
//      <View style = {styles.lower}>
//        <Text style= {styles.title}>Raining like a MF</Text>
//        <Text style={styles.subtitle}>For more info look outside</Text>
//      </View>
//      </LinearGradient>
//   );
//   }
// }

function Weather({weatherName, temp}){
  console.log(weatherName);
  return(
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style ={styles.container}>

      <View style ={styles.upper}>
       <Ionicons color = "white"
         size = {144}
         name = {weatherCases[weatherName].icon}/>
       <Text style ={styles.temp}>{temp}</Text>
     </View>
     <View style = {styles.lower}>
       <Text style= {styles.title}>{weatherCases[weatherName].title}</Text>
       <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
     </View>
     </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"transparent"
  },
  temp:{
    fontSize:38,
    backgroundColor: "transparent",
    color:"white",
    marginTop:10,

  },
  lower:{
    flex: 1,
    alignItems:"flex-start",
    justifyContent: "flex-end",
    paddingLeft:25
  },
  title:{
    fontSize :38,
    backgroundColor: "transparent",
    marginBottom: 2,
    color: "white",
    fontWeight: "300",
  },
  subtitle:{
    fontSize :24,
    backgroundColor: "transparent",
    marginBottom: 24,
    color: "white",
  },
})

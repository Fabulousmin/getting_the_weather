import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";
import {Ionicons} from "@expo/vector-icons";

const API_KEY = '9478c297c96e0288b0aa40a035a4d5d9';

export default class App extends React.Component {
 //위치정보 상태
  state = {
    isLoaded: false,
    error:null
  };

//위치정보 받아오기
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position =>{  //익명함수 서브루틴같은거
          this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }; //이부분 이해안됨..

_getWeather = (lat, long) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=9478c297c96e0288b0aa40a035a4d5d9`)
  //개얼탱이없네 씨발 ₩ 라니 저게 ㅆ:발
  .then(response => response.json())
  .then(json => {
    console.log(json);
    this.setState({
      temperature: json.main.temp,
      name: json.weather[0].main,
      isLoaded:true
    })
});
};

  render() {
    const { isLoaded, error } = this.state;
    return (
      //상단메뉴바 안보에게
      <View style= {styles.container}>
        <StatusBar hidden = {true}/>
      // 로딩 안되있으면 App.js 되있으면 Weather.js
        { isLoaded ? <Weather/> : (<View style= {styles.loading}>

          <Text style={styles.loadingText}>Getting the fucking weather</Text>
          {error ? <Text style = {styles.errorText}>{error}</Text> : null}
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom: 40
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 25,

  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }


});

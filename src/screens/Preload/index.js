import React, { useEffect }  from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Preload() {

    const navigation = useNavigation();

  useEffect (()=>{
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //validar o token
      } else {
        navigation.navigate('Login');
      }
    }
    checkToken();

  }, []);

 return (
    <View style={estilos.container}>
      <Image style={estilos.img} source={require('../Preload/diaspora.png')} />
      <ActivityIndicator style={estilos.loadg} size="large" color="#2F4F4F" />
    

    </View>
  );
}

const estilos = StyleSheet.create ({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#FFF0F5'
    },

    img:{
      justifyContent:'center',
      width: 400,
      height: 250,
     
    },

    loadg:{
      marginTop: 60,
     
    },

  })
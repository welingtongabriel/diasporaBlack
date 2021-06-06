import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  KeyboardAvoidingView, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Animated } from 'react-native';

  import Api from '../../Api';

export default function Login() {

  const navigation = useNavigation();

  const [ emailField, setEmailField ] = useState('');
  const [ passwordField, setPasswordField ] = useState('');
  
  const logar = async () => {
    if (emailField != '' && passwordField !=''){

        let json = await Api.login(emailField, passwordField);
        console.log(json);

        if(json.token){
            alert("DEU CERTO");
        }else {
          alert('E-mail e/ou senha errados!');
        }

    }else {
      alert("Preecha os campos!");
    }

  }
  const registerAccount = ()=> {
    navigation.reset({
        routes:[{name: 'Register'}]
    });

  }
  

  
  const [offset] = useState (new Animated.ValueXY({x: 0, y:95}));

  useEffect (()=> {

    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20
    }).start();
  }, []);

 return (
   
   <KeyboardAvoidingView style={estilos.container}>
      <View style={estilos.containerImage}>
        <Image style={estilos.img}source={require('../Login/diaspora.png')} />
      </View>
      <Animated.View style={[estilos.containerImput, 
      {
        transform: [
          { translateY: offset.y}
        ]
      }
      ]}
      >
        <TextInput style={estilos.imput}
        placeholder="Digite seu e-mail"
        autoCorrect={false}
        onChangeText={t=> setEmailField(t)}
        value={emailField}
         />
         <TextInput style={estilos.imput}
        placeholder="Digite sua senha"
        autoCorrect={false}
        onChangeText={t=> setPasswordField(t)}
        value={passwordField}
        secureTextEntry={setPasswordField}
             
         />
         <TouchableOpacity style={estilos.btnSubmit}
         onPress={logar}
         >
          <Text style={estilos.submitText}>Acessar</Text>
         </TouchableOpacity> 

         <TouchableOpacity style={estilos.btnRegister}
         onPress={registerAccount}
         >
          <Text style={estilos.registerText}>Criar conta</Text>
         </TouchableOpacity> 
      </Animated.View>

   </KeyboardAvoidingView>
   
  );
}


const estilos = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF0F5'
  },

  containerImage:{
    flex: 1,
    justifyContent:'center',

  },
  containerImput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 20,

  },

  imput:{
    backgroundColor: '#ADD8E6',
    width: '90%',
    marginBottom: 15,
    color: '#000000',
    fontSize: 17,
    borderRadius: 15,
    padding: 10,


  },

  img:{
    justifyContent:'center',
    width: 400,
    height: 250,
   
  },

  btnSubmit:{
    backgroundColor: '#2F4F4F',
    width: '90%',
    height: 45,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  submitText:{
    color: '#FFF',
    fontSize:18,
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#1E90FF'
  }


})

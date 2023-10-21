import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View } from 'react-native';
import { user_login } from '../../api/user_api';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {Octicons, Ionicons} from '@expo/vector-icons';

import KeyBoardAvoidingWarapper from '../components/KeyboardAvoidingWrapper';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  SubTitle,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent
} from '../components/styles';
import axios from 'axios';

const {brand, darkLight} = Colors;





const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyBoardAvoidingWarapper>

      <StyledContainer>
        <StatusBar style='dark'/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('../../../assets/images/pik8bis.png')}/>
            <PageTitle>Notas Moviles</PageTitle>
            <SubTitle>Account Login</SubTitle>

            <Formik
              initialValues={{ username:'', password:''}}
              onSubmit={(values) => {

  //               axios.post('https://appnotesservermoviles-production.up.railway.app/signin',{
  //                 username:values.username,
  //                 password:values.password
  //               }, { method:'POST',
  //               headers: {
  //                 accept: 'application/json',
  //                 'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  //               }
  // }).then((result) => {
  //                     // console.log(result);
  //                   if(result.status == 200){ 
  //                     console.log(result.data.token);
  //                     AsyncStorage.setItem("AccessToken", result.data.token);
  //                     navigation.replace("Welcome");
  //                   }

  //                 }).catch(err => {
  //                   console.log(err);
  //                 });
                user_login({
                  username: values.username,
                  password:values.password
                }).then((result) => {
                      console.log(result);
                    if(result.status == 200){ 
                      navigation.replace("Welcome");
                      AsyncStorage.setItem("AccessToken", result.values.token);
                    }

                  }).catch(err => {
                    console.log(err);
                  });
                console.log(values);
                console.log(values.username);
                // navigation.navigate("Welcome");
              }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <StyledFormArea>
                <MyTextInput 
                  label="Username"
                  icon="person"
                  placeholder="userExample"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <MyTextInput 
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry = {hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText type="submit">Login</ButtonText>
                </StyledButton>
                <Line/>
                
                <ExtraView>
                  <ExtraText>No tienes cuenta? </ExtraText>
                  <TextLink onPress={() => navigation.navigate("Register")}>
                    <TextLinkContent>Registrarse</TextLinkContent>
                  </TextLink>
                </ExtraView>

              </StyledFormArea>
            )}
            </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyBoardAvoidingWarapper>
  );
};

const  MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword,...props})=> {
  return(
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props}/>
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
        </RightIcon>
      )}
    </View>
  );
};

  export default  Login;
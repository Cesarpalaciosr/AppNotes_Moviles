import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View } from 'react-native';

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
                console.log(values);
                navigation.navigate("Welcome");
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
                  <ButtonText>Login</ButtonText>
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
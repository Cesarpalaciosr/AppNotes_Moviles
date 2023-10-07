import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View } from "react-native";
import KeyBoardAvoidingWarapper from "../components/KeyboardAvoidingWrapper";

import { Octicons, Ionicons } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
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
  TextLinkContent,
} from "../components/styles";

const { brand, darkLight } = Colors;
//Se puede cambiar name y lastname por fullname
const Register = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyBoardAvoidingWarapper>
        <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Notas Moviles</PageTitle>
        <SubTitle>Account Register</SubTitle>
        <Formik
          initialValues={{ name:"", lastname:"", email:"", username: "", password: "", confirmpassword: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Welcome");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="name"
                icon="person"
                placeholder="nameExample"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <MyTextInput
                label="Lastname"
                icon="person"
                placeholder="LastNameExample"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
              />
              <MyTextInput
                label="email"
                icon="mail"
                placeholder="email@Example.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Username"
                icon="person"
                placeholder="userExample"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                label="ConfirmPassword"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("confirmpassword")}
                onBlur={handleBlur("confirmpassword")}
                value={values.confirmpassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Registrar</ButtonText>
              </StyledButton>
              <Line />

              <ExtraView>
                <ExtraText>Ya tienes cuenta? </ExtraText>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Login</TextLinkContent>
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

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Register;

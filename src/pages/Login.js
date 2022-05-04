import React from "react";
import styled from "styled-components";
import bglogin from "../img/bglogin.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100wv;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${bglogin}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: whitesmoke;
  ${mobile({width: "90%"})}

`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  flood-color: white;
  font-weight: bolder;
  cursor: pointer;
  ${mobile({width: "100%"})}

`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot your password? Click here!</Link>
          <Link>Dont have an account? Create new account!</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

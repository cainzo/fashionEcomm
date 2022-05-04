import React from "react";
import styled from "styled-components";
import bgimg from "../img/regbg.jpg";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100wv;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bgimg}) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: whitesmoke;
  ${mobile({width: "75%"})}

`;
const Title = styled.h1`
    font-size: 42px;
    font-weight: 300;
`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
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
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm pasword" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

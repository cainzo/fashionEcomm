import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  ${mobile({flexDirection: "column"})}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`

`;
const Description = styled.p`
  margin: 20px 0px;
  width: 50%;
  text-align: center;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 10px;
  ${mobile({display: "none"})}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${mobile({ backgroundColor: "#c4b7b728"})}

`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;
const Payment = styled.img`
    width: 30%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>G/C</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          beatae nam culpa deserunt aperiam consequuntur fuga.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>About Us</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          Av. Siempreviva 123
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 555 444 222
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/> cainzog@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};
    

export default Footer;

import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userRequest } from "../requestMethod";
const KEY = "pk_test_51KwFgMIHdsf6ejiRFjPfDnnPqYpu5hX1aJsiLihPNazUMWT67NiXW7JSrasVpmdsiZYGgac83Tjcb6SJEarPWXGf00WQl77fBG";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  ${mobile({
    flexDirection: "column",
    border: "1px solid teal",
    margin: "5px 0px",
    borderRadius: "10px",
  })}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDitail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "10px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  ${mobile({
    display: (props) => (props.type === "none" ? "bolck" : "none "),
    backgroundColor: "teal",
  })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: max-content;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;


const Cart = () => {
    const cart = useSelector(state=>state.cart)

    const [stripeToken, setStripeToken] = useState();
    const navite = useNavigate()
    const onToken= (token)=>{
        setStripeToken(token)
    }

    useEffect(()=>{
      const makeRequest = async ()=>{
          try {
             const res = await userRequest.post("/checkout/payment",{
                 tokenId:stripeToken.id,
                 amount: cart.total * 100,
             });

             navite("/success", {state:res.data})
          } catch (error) {
              console.log(error)
          }
      }
      stripeToken && makeRequest();
  },[stripeToken, cart.total, navite])

  return (
    <Container>
      <div>
        <NavigationBar></NavigationBar>
        <Announcement></Announcement>
      </div>
      <Wrapper>
        <Title>Your cart.</Title>
        <Top>
          <TopButton type="">Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping bag(69)</TopText>
            <TopText>Whishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Check out</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=>(
            <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Producto:</b>{product.title}
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> {product.id}
                  </ProductId>
                  <ProductColor color={product.color}></ProductColor>
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <Hr type="none" />
              <PriceDitail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{product.price*product.quantity}</ProductPrice>
              </PriceDitail>
            </Product>
            ))
          }
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemText>{cart.total}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ 30</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>-$5.90</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemText>{cart.total}</SummaryItemText>
            </SummaryItem>
            {stripeToken ? (<span>Processing. Please wait...</span>):
      (<StripeCheckout
      name="Gonzalo Cainzo"
      image="https://avatars.githubusercontent.com/u/92909815?v=4"
      billingAddress
      shippingAddress
      description={"Your Total is $" + cart.total }
      amount= {cart.total * 100}
      token={onToken}
      stripeKey={KEY}
      >
        <Button>Pay now</Button>
      </StripeCheckout>)}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;

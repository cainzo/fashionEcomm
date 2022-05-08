import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter';
import { Add, Remove, RemoveCircleOutline } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { publicRequest } from '../requestMethod';


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
  ${mobile({flexDirection: "column", padding: "10px"})}

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;

    object-fit: cover;
  ${mobile({height: "40vh"})}

`;

const InfoContainer = styled.div`
   flex: 1;    
   padding: 0px 50px;
  ${mobile({padding: "10px"})}

`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
   ${mobile({width: "100%"})}

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
    -webkit-box-shadow: -1px -1px 2px 2px rgba(0,0,0,0.58); 
box-shadow: -1px -1px 2px 2px rgba(0,0,0,0.58);
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding-left: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
   ${mobile({width: "100%"})}

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;


`;



const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover{
        background-color: #00808055;
    }
`;


const Product = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct]=useState();
    const [quantity, setQuantity]=useState(1);
    const [color, setColor]=useState("");
    const [size, setSize]=useState("");

    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const res = await publicRequest.get('/products/find/'+id)
                setProduct(res.data)
                setIsLoading(true)
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()
        console.log(product)
    },[])

    const handleQuantity = (type)=>{
        if(type==="dec"){
           quantity > 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }
   const handleClick =()=>{
       //add to cart
   }
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Announcement></Announcement>
            <Wrapper>
                <ImgContainer>
                    <Image src={isLoading && product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{isLoading && product.title}</Title>
                    <Desc>{isLoading && product.desc}</Desc>
                    <Price>$ {isLoading && product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:  </FilterTitle>
                            {/*isLoading && product.color.map((c)=>(
                                <FilterColor color={c}/>
                            ))*/}
                            {
                                isLoading && <FilterColor  color={product.color} onClick={()=>setColor(product.color)}/>
                            }

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {isLoading && product.size.map((s)=>(
                                <FilterSizeOption key={s}>{s.toUpperCase()}</FilterSizeOption>
                            ))}
                                
                                
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                            <AmountContainer>
                                <Remove onClick={()=>handleQuantity('dec')}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={()=>handleQuantity('add')}/>
                            </AmountContainer>
                        <Button onClick={handleClick()}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    );
};

export default Product;
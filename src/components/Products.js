import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({cat,filter,sort}) => {
  const [products, setProducts]= useState([]);
  const [filteredProducts, setFilteredProducts]= useState([]);
  useEffect(()=>{
    const getProducts =async()=>{
      const res = await axios.get(cat ? `http://localhost:5000/api/products?cat=${cat}` : 'http://localhost:5000/api/products')
      console.log(res)
    }
    getProducts()
  },[cat])

  useEffect(()=>{
      cat && setFilteredProducts(
        products.filter(item => Object.entries(filter).every(([key , value]) =>
                   item[key].includes(value)
        ))  
      );
  },[products,cat,filter])

  return (
    <Container>
      {products.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </Container>
  );
};

export default Products;

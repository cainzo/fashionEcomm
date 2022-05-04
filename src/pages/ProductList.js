import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';



const Container = styled.div`
    padding: 0;
    margin: 0;
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin-right: 20px;
    padding: 10px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
padding: 5px;
margin-right:20px;
`;
const Option = styled.option`
    font-weight: bold;
`;
const ProductList = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Announcement></Announcement>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    );
};

export default ProductList;
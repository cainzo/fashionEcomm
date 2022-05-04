import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Si gastas mas de $2000 tenes envio gratis a todo el pais!!!
        </Container>
    );
};

export default Announcement;
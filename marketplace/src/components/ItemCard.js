import React from "react";
import styled from 'styled-components';

const ItemCard = (props) => {

    const Wrapper = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const DataWrapper = styled.div `
        border: 3px solid blue;
        border-radius: 10px;
        width: 50%;
        margin: 2rem;
        background: aliceblue;
    `;

    const Title = styled.h1 `
        color: white;
    `;

    const SubTitle = styled.h2 `
        color: blue;
    `;

    const Data = styled.p `
        color: grey;
    `;

    return (
        <Wrapper>
            <Title>Item List</Title>
            {props.item?.map((el, i) => {
                return(
                <DataWrapper key={ i }>
                    <SubTitle>Item: {el.name}</SubTitle>
                    <Data>Price: {el.price}</Data>
                    <Data>Description: {el.description}</Data> 
                    <Data>Location: {el.location}</Data>
                </DataWrapper>
            )})}
        </Wrapper>
    );
};

export default ItemCard; 
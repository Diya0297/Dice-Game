import styled from "styled-components";
import { useState } from "react";

function ChooseNum({chooseNum, setNum, error, setError}){


    const dices = [1,2,3,4,5,6]
    const Boxarr = dices.map((num, i) => (
        <Box key={i} onClick={() => handleChangeNum(num) } 
       isSelected = {chooseNum === num}
        > {num} </Box>
    ))

    function handleChangeNum(num){
        setNum(prevNum => num);
        setError("");
        
    }

    return (
        <MainContainer>
            <p className="para--error">{error}</p>
             <Container>
                {Boxarr}
            </Container>
            <p className="para--selectNum">Select Number</p>
        </MainContainer>      
       
    )
}

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
font-weight: bold;
background-color: ${(props) => props.isSelected ? "black" : "white"} ;
color: ${(props) => props.isSelected ? "white" : "black"} ;

&:hover{
    background-color: black;
    color: white;
}
`
const Container = styled.div`
    display: flex;
    
`
const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   .para--selectNum{
    align-self: flex-end;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
   }
   .para--error{
    color: red;
    align-self: flex-end;
   }

`;



export default ChooseNum;
import styled from "styled-components";
import { useState } from "react";

function Score({score}){
    return (
        <Box>
                <h1>{score}</h1>
                <p>Total Score</p>
        </Box>
    )
}

const Box = styled.div`
 
    width: 150px;
    text-align: center;
    line-height: 10px;
    
    h1{
        font-size: 62px;
    }
    p{
        font-weight: bold;
        font-size: 20px;
    }
`

export default Score;
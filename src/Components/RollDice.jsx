import styled from "styled-components";
import { useState } from "react";

function RollDice({handleDiceChange, Dice, resetScore}){
    const [showRules, setRules] = useState(false);
    function handleRules(){
        setRules(show => !show);
    }

    return (
       <Container>
        <div onClick={handleDiceChange}>
        <img src={`./images/dice_${Dice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>

        <ResetButton onClick={resetScore}>Reset Score</ResetButton>
        <RulesButton onClick={handleRules}>Show Rules</RulesButton>
        {showRules && <div className="rules">
        <h3>How to play the game</h3>
        <p>1. Select any number</p>
        <p>2. Click on Dice image</p>
        <p>3. after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>4. if you get wrong guess then  2 point will be dedcuted </p>
        </div>}
        
       
       </Container>
    )
}

const Container = styled.div`
width: 700px;
margin: 100px auto;
text-align: center;


p{
    line-height: 5px;
    font-weight: 200;
    padding: 5px;
}

.rules{
    background-color: pink;
    width: 750px;
    height: 200px;
    white-space: nowrap;
    padding: 10px;
    text-align: start;
    margin: 20px;
    border-radius: 10px;
}
`
const ResetButton = styled.button`
width: 220px;
height: 44px;
font-size: 16px;
border-radius: 8px;
border: 1px solid black;
background-color: white;
font-weight: bold;
margin-top: 20px;

&:hover{
    background-color: black;
    color: white;
}

`
const RulesButton = styled.button`
    width: 220px;
    height: 44px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid black;
    background-color: black;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    margin: 5px;

    &:hover{
    background-color: white;
    color: black;
}
`

export default RollDice;
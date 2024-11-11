import styled from "styled-components";
import Score from "./Score";
import ChooseNum from "./ChooseNum";
import RollDice from "./RollDice";
import { useState } from "react";


function PlayGame(){

    const [chooseNum, setNum] = useState();
    const [Dice, setDice] = useState(1);
    const [score, setScore] = useState(0);
    const[errorMessage, setErrorMessage] = useState("");

    function handleScore(){
        if (chooseNum === Dice){
            setScore(score => score+=Dice);
        }else{
            setScore(score => score-=2);
        }
    }

    const dices = [1,2,3,4,5,6];
    function handleDiceChange(){
        
        if(!chooseNum) {
            setErrorMessage("You have not selected any Number!")
            return}; 
        setErrorMessage("");
        let randomDice = dices[Math.floor(Math.random() * dices.length)];
        setDice(randomDice);
        handleScore();
        setNum(undefined);

    }

    function resetScore(){
        setScore(score => 0);
        console.log(score);
    }

    return (
        <>
         <Box> 
            <Score selectedNum ={chooseNum} diceNum={Dice} score={score}/>  
            <ChooseNum chooseNum={chooseNum} setNum={setNum} error={errorMessage} setError={setErrorMessage}/>
        </Box>
        <RollDice handleDiceChange={handleDiceChange} Dice={Dice} resetScore={resetScore}/>
        </>
       
    )
}

const Box = styled.div`
    max-width: 1280px;
    height: 151px;
    margin: 0 auto;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export default PlayGame;
import styled from "styled-components";

function StartGame({toggle}){

    return (
        <>
            <Div >
                <div>
                    <img src="/images/cubes.png" />
                </div>
             <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
             </div>
            </Div>
        </>
    )
}

export default StartGame;

const Div = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content{
        line-height: 15px;
        margin: 20px;
        padding: 10px;
        max-width: 500px;
        
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    background-color: #000000;
    color: white;
    padding: 10px 18px;
    border: 1px solid #000000;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    width: 450px;
    transition: 0.4s background-color ease-in;
    border: 1px solid black;

    &:hover{
        background-color: white;
        color: black;
        transition: 0.4s background-color ease-in;
        border: 1px solid black;
    }

`;



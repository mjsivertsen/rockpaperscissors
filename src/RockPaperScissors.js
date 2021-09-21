import React, { useEffect, useState } from "react";
import { Button, Card, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";

const RockPaperScissors = () => {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState ("");
  const [iWins, setIWins] = useState(0)
  const [youWins, setYouWin] = useState(0)
  const [youD, setYouD] = useState("")
  const [meD, setMeD] = useState("")


  const headerTaunt = [
    "Think you can beat me?",
    "Show me your moves!",
    "You wanna catch these hands?",
    "Prepare for decimation."
  ]

  const randomTaunt = headerTaunt[Math.floor(Math.random()*headerTaunt.length)];

  const getComputerChoice = () => {
  let computerChoices = ["rock", "paper", "scissors"];
  let randomComputerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  console.log(randomComputerChoice)
  setComputerChoice(randomComputerChoice)
  }

  const clickHandler = (click) => {
  setChoice(click)
  getComputerChoice()
  whoWon(choice, computerChoice)
  userDisplay(choice)
  computerDisplay(computerChoice)
  }

  const whoWon = (choice, computerChoice) => {
  if (choice === "rock" && computerChoice === "rock")
      alert("We'll settle it with an arm wrestle.")
  if (choice === "rock" && computerChoice === "paper")
      alert("Shhhh.  Go to sleep, LOSER!")
      setIWins( iWins + 1 )
  if (choice === "rock" && computerChoice === "scissors")
      alert("I will cut you!")
      setYouWin( youWins + 1 )
  if (choice === "paper" && computerChoice === "rock")
      alert("I'll throw that rock at your head.")
      setYouWin( youWins + 1 )
  if (choice === "paper" && computerChoice === "paper")
      alert("How dare you.")
  if (choice === "paper" && computerChoice === "scissors")
      alert("Snip snip!")
      setIWins( iWins + 1 )
  if (choice === "scissors" && computerChoice === "rock")
      alert("Hulk!  SMASH!")
      setIWins( iWins + 1 )
  if (choice === "scissors" && computerChoice === "paper")
      alert("You're a monster.")
      setYouWin( youWins + 1 )
  if (choice === "scissors" && computerChoice === "scissors")
      alert("En guarde!")
  }


  const userDisplay = (choice) => {
    if (choice === "rock")
      return (
        <Icon size="huge" name="hand rock" color="orange"/>
      )

    if (choice === "paper")
      return (
        <Icon size="huge" name="hand paper" color="purple"/>
      )

    if (choice === "scissors")
      return (
        <Icon size="huge" name="hand paper" color="teal"/>
      )
  }

  const computerDisplay = (computerChoice) => {
    if (choice === "rock")
      return (
        <Icon size="huge" name="hand rock" color="orange"/>
      )

    if (choice === "paper")
      return (
        <Icon size="huge" name="hand paper" color="purple"/>
      )

    if (choice === "scissors")
      return (
        <Icon size="huge" name="hand paper" color="teal"/>
      )
  }

return (
  <>
  <Container style={{marginTop:"66px"}}>
    
    <h1>{randomTaunt}</h1>

    <Button fluid basic color="orange"
    onClick={() => clickHandler("rock")}
    >
    <Icon size="huge" name="hand rock" />
    </Button>

    <Button fluid basic color="purple"
    onClick={() => clickHandler("paper") }
    >
    <Icon size="huge" name="hand paper"/>
    </Button>

    <Button fluid basic color="teal"
    onClick={() => clickHandler("scissors") }
    >
      <Icon size="huge" name="hand scissors"/>
    </Button>
  </Container>

  <Organize>
    <Card>
      <Card.Header> You </Card.Header>
      <Card.Content>
        {userDisplay} 
      </Card.Content>
    </Card>

    <Card>
    <Card.Header> Me </Card.Header>
    <Card.Content>
        {computerDisplay}
    </Card.Content>
    </Card>
    </Organize>

</>
)

}

const Organize = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

// const StyledCard = styled(card)`

// ` 


export default RockPaperScissors
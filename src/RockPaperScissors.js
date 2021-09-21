import React, { useEffect, useState } from "react";
import { Button, Card, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";

const RockPaperScissors = () => {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState ("");
  const [iWins, setIWins] = useState(0)
  const [youWins, setYouWin] = useState(0)
  const [youD, setYouD] = useState("")
  const [compD, setCompD] = useState("")

//working//
  const headerTaunt = [
    "Think you can beat me?",
    "Show me your moves!",
    "You wanna catch these hands?",
    "Prepare for decimation."
  ]

  const randomTaunt = headerTaunt[Math.floor(Math.random()*headerTaunt.length)];

    //WHAT I WANT TO HAPPEN//
  // set users choice on click //  WORKING
  // then get and set computer's choice// WORKING
  // console.log both //  WORKING
  // have both display icon in cards below //
  // maybe highlight active choice or something as well //
  // compare choices to declare winner // WORKING
  // record wins of each for score card//

  const clickHandler = (click) => {
    setChoice(click)
    setYouD(click)
    getComputerChoice()
  }

  const getComputerChoice = () => {
  let computerChoices = ["rock", "paper", "scissors"];
  let randomComputerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  setComputerChoice(randomComputerChoice)
  }  

  const whoWon = (choice, computerChoice) => {
    console.log("your choice:", choice)
    console.log("computer's choice:", computerChoice)
  if (choice === "rock" && computerChoice === "rock")
      alert("We'll settle it with an arm wrestle.  (Tie.)")

  if (choice === "rock" && computerChoice === "paper")
      alert("Shhhh.  Go to sleep, LOSER!  (Computer wins.)")
      setIWins( iWins + 1 )

  if (choice === "rock" && computerChoice === "scissors")
      alert("I will cut you! (You win.)")
      setYouWin( youWins + 1 )

  if (choice === "paper" && computerChoice === "rock")
      alert("I'll throw that rock at your head.  (You win.)")
      setYouWin( youWins + 1 )

  if (choice === "paper" && computerChoice === "paper")
      alert("How dare you.  (Tie.)")

  if (choice === "paper" && computerChoice === "scissors")
      alert("Snip snip!  (Computer wins.)")
      setIWins( iWins + 1 )

  if (choice === "scissors" && computerChoice === "rock")
      alert("Hulk!  SMASH! (Computer wins.")
      setIWins( iWins + 1 )

  if (choice === "scissors" && computerChoice === "paper")
      alert("You're a monster.  (You win.)")
      setYouWin( youWins + 1 )

  if (choice === "scissors" && computerChoice === "scissors")
      alert("En guarde! (Tie.)")
  }

  const makeItHappen = () => {
    setCompD(computerChoice)
    whoWon(choice, computerChoice)
  }

  const display = [
    "rock",
    "paper",
    "scissors"
  ]


  const userDisplay = (click) => {
    if (click === "rock")
    //  setYouD(display[0])
      return (
        <Icon size="huge" name="hand rock" color="orange"/>
      )

    if (click === "paper") 
    // setYouD(display[1])
      return (
        <Icon size="huge" name="hand paper" color="purple"/>
      )

    if (click === "scissors")
    // setYouD(display[2])
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

    <Button color="black"
    onClick={() => {makeItHappen()}} >

      Fight me bruh
      
    </Button>
  </Container>

  <Organize>
    <Card>
      <Card.Header> You </Card.Header>
      <Card.Content>
        <Icon size="huge" name={`hand ${youD}`} />
      </Card.Content>
    </Card>

    <Card>
    <Card.Header> Me </Card.Header>
    <Card.Content>
      <Icon size="huge" name={`hand ${compD}`} />
    </Card.Content>
    </Card>
    </Organize>

</>
)

}

const Organize = styled.div`
margin: 60px;
display: flex;
flex-direction: row;
justify-content: default;
`;

// const StyledCard = styled(card)`

// ` 


export default RockPaperScissors
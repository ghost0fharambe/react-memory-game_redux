import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WinFlash from "./components/WinFlash";
import LossFlash from "./components/LossFlash";
import images from "./pictures.json";
import './App.css';

let score;
let wins;
let losses;
let gameFlash;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      guessedArray: [],
      score: 0,
      losses: 0,
      wins: 0,
      gameLoss: false,
      gameWin: false
    };
  };

  //Function to shuffle images
  shuffleImages = () => {
    let array = [];
    let images = this.state.images;

    for (let i in images) {
      let randomIndex = Math.floor(Math.random() * images.length);
      while (array.includes(images[randomIndex])) {
        randomIndex = Math.floor(Math.random() * images.length);
      }
      array[i] = images[randomIndex];
      this.setState({ images: array });
    };
  };

  //Function to handle guessing logic
  makeGuess = id => {
    console.log(id);
    //If the game has been won/lost, start new round
    if (this.state.gameLoss || this.state.gameWin) {
      /* this.setState({
        guessedArray: []
      }); */
      this.newRound();
    };

    let guessed = this.state.guessedArray;
    let array = guessed;
    //let emptyArr = [];

    if (guessed.includes(id)) {
      this.setState({
        gameLoss: true,
        gameWin: false,
        guessedArray: []
      });
      this.incrementLosses();
    } else {
      array.push(id);
      this.setState({ guessedArray: array })
      this.incrementScore();
      this.shuffleImages();
    };
    console.log(this.state)
  };

  //Function to reset Round
  newRound = () => {
    this.setState({
      images: images,
      guessedArray: [],
      score: 0,
      gameLoss: false,
      gameWin: false
    });
  };

  //Function to increment Score
  incrementScore = () => {
    score = this.state.score;
    score++;
    this.setState({ score: score });
    this.checkWin();
  };

  //Function to increment Losses
  incrementLosses = () => {
    losses = this.state.losses;
    losses++;
    //this.newRound();
    this.setState({
      losses: losses,
      score: 0,
      guessedArray: []
    });
  };

  //Function to increment Wins
  incrementWins = () => {
    wins = this.state.wins;
    wins++;
    this.setState({
      wins: wins,
      score: 0
    });
  };

  //Function to check if game win
  checkWin = () => {
    if (this.state.score === 7) {
      this.incrementWins();
      this.setState({
        gameWin: true,
        gameLoss: false,
        guessedArray: []
      });
      //this.newRound();
    };
  };

  //Function to reset game
  resetGame = () => {
    this.setState({
      images,
      guessedArray: [],
      score: 0,
      losses: 0,
      wins: 0,
      gameLoss: false,
      gameWin: false
    });
  };

  render() {
    const divStyle = {
      display: "flex",
      padding: "20px",
      background: "grey"
    };
    const gameLoss = this.state.gameLoss;
    const gameWin = this.state.gameWin;
    if (gameLoss) {
      gameFlash = <LossFlash />
    } else if (gameWin) {
      gameFlash = <WinFlash />
    } else if (!gameWin && !gameLoss) {
      gameFlash = null;
    };

    return (
      <>
        <Navbar
          score={this.state.score}
          wins={this.state.wins}
          losses={this.state.losses}
          resetGame={this.resetGame}
        />
        <div>
          <Wrapper>
            <Title>
              Archer Memory Game!
              <h4>Try to click on all your favorite Archer characters without clicking on anyone twice!</h4>
            {gameFlash}
            </Title>
            <div style={divStyle}>
              {this.state.images.map(image => (
                <Image src={image.src} key={image.id} id={image.id} guess={this.makeGuess} />
              ))}
            </div>
          </Wrapper>
        </div>
      </>
    );
  };
};

export default App;
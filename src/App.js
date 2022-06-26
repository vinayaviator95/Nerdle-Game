import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import axios from "axios";
import Rules from "./components/Rules";

function App() {
  const wordAle = "2*3+5=11";
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [nerdleMessage, setNerdleMessage] = useState("");
  const [keyColor, setKeyColor] = useState([]);
  const [singleColor, setSingleColor] = useState([]);
  const [resultRows, setResultRows] = useState([
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ]);
  const [guessRows, setGuessRows] = useState([
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ]);

  //FUNCTION TO DELETE A LETTER WHEN CLICK ON DELETE BUTTON
  const deleteLetter = () => {
    if (currentTile > 0) {
      setCurrentTile((prevState) => prevState - 1);
      const updatedRows = [...guessRows];
      updatedRows[currentRow][currentTile] = "";
      console.log(updatedRows, "updatedrows");
      setGuessRows([...updatedRows]);
    }
  };

  //FUNCTION TO CHECK  THE CURRENT ROW RESULT

  const checkRow = async () => {
    const guess = guessRows[currentRow].join("");
    if (currentTile > 7) {
      flipTile();
      const answer = await axios.post(
        "https://api-nerdle.herokuapp.com/nerdle/checkAnswer",
        {
          guess,
        }
      );
      if (answer.data.correct) {
        setMessage("You Won.You're awesome:)");
        setIsGameOver(true);
        return;
      } else {
        if (currentRow >= 5) {
          setIsGameOver(false);
          setMessage("oops you lost:(");
          setNerdleMessage('the account is "2*3+5=11"');
          return;
        }
        if (currentRow < 5) {
          setCurrentRow((prevState) => prevState + 1);
          setCurrentTile(0);
        }
      }
    }
  };

  //FUNCTION TO ADD LETTER WHEN CLICK ON ANY NUMBER ON THE KEYBOARD PROVIDED IN THE GAME

  const addLetter = (letter) => {
    console.log("hello", letter);
    if (currentTile < 8 && currentRow < 9) {
      const updatedRows = [...guessRows];
      updatedRows[currentRow][currentTile] = letter;
      console.log(updatedRows, "updatedrows");
      setGuessRows([...updatedRows]);
      setCurrentTile((prevState) => prevState + 1);
    }
  };

  //FUNCTION TO CHANGE THE COLOR BASED ON THE CHECKING

  const flipTile = () => {
    console.log(guessRows[currentRow], "guessRows[currentRow]");
    let checkWordAle = wordAle;
    const guess = [];
    const rowTiles = guessRows[currentRow];
    setSingleColor([...guessRows[currentRow]]);
    for (let item of rowTiles) {
      guess.push({ letter: item, color: "black-overlay" });
    }
    for (let i = 0; i < guess.length; i++) {
      if (guess[i].letter === wordAle[i]) {
        guess[i].color = "green-overlay";
        checkWordAle = checkWordAle.replace(guess[i].letter, "");
      }
    }
    for (let i = 0; i < guess.length; i++) {
      if (checkWordAle.includes(guess[i].letter)) {
        guess[i].color = "yellow-overlay";
        checkWordAle = checkWordAle.replace(guess[i].letter, "");
      }
    }
    const finalResult = [...resultRows];
    finalResult[currentRow] = [...guess];
    setResultRows([...finalResult]);
    setKeyColor([...guess]);
  };

  return (
    <div className="game-container">
      <div className="title-container">
        <h1>Nerdle</h1>
      </div>

      <div id="board"></div>
      <div className="message-container">
        {message && <p>{message}</p>}
        {nerdleMessage && <p>{nerdleMessage}</p>}
      </div>
      <div className="tile-container">
        <Board guessRows={guessRows} resultRows={resultRows} />
      </div>
      <div className="key-container">
        <Keyboard
          keyColor={keyColor}
          deleteLetter={deleteLetter}
          checkRow={checkRow}
          addLetter={addLetter}
        />
      </div>
      <Rules />
    </div>
  );
}

export default App;

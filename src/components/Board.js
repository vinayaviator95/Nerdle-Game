import React from "react";

const Board = ({ guessRows, resultRows }) => {
  return guessRows.map((item, rowIndex) => {
    return (
      <div key={`guessRow-${rowIndex}`} id={`guessRow-${rowIndex}`}>
        {item.map((cell, guessIndex) => {
          return cell ? (
            <div
              data={cell}
              key={`guessRow-${rowIndex}-tile-${guessIndex}`}
              className={`tile ${cell ? "tile-with-data" : ""} ${
                resultRows[rowIndex][guessIndex].letter
                  ? `flip ${resultRows[rowIndex][guessIndex].color}`
                  : ""
              }`}
              id={`guessRow-${rowIndex}-tile-${guessIndex}`}
            >
              {cell}
            </div>
          ) : (
            <div
              key={`guessRow-${rowIndex}-tile-${guessIndex}`}
              className="tile"
              id={`guessRow-${rowIndex}-tile-${guessIndex}`}
            >
              {cell}
            </div>
          );
        })}
      </div>
    );
  });
};

export default Board;

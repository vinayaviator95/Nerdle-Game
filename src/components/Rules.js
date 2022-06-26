import React from "react";

const Rules = () => {
  return (
    <div>
      <div style={{ marginLeft: "21px" }}>Rules of the game</div>
      <ul>
        <li>
          Guess the NERDLE in 6 tries. After each guess, the color of the tiles
          will change to show how close your guess was to the solution.
        </li>
        <li>
          Each guess is a calculation. You can use 0 1 2 3 4 5 6 7 8 9 + - * /
          or =.
        </li>
        <li>It must contain one “=”.</li>
        <li>
          It must only have a number to the right of the “=”, not another
          calculation.
        </li>
        <li>
          Standard order of operations applies, so calculate * and / before +
          and - eg. 2*3+5=11 not 16!
        </li>
      </ul>
    </div>
  );
};

export default Rules;

import React, { useEffect } from "react";

const Keyboard = ({ deleteLetter, checkRow, addLetter, keyColor }) => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "ENTER",
    "DEL",
  ];

  const handleClick = (letter) => {
    if (letter === "DEL") {
      deleteLetter();
      return;
    }
    if (letter === "ENTER") {
      checkRow();
      return;
    }
    addLetter(letter);
  };
  const checkExistance = (letter) => {
    let exist = false;
    let ind = 0;
    for (let i = 0; i < keyColor?.length; i++) {
      if (keyColor[i].letter === letter) {
        exist = true;
        ind = i;
      }
    }
    return { exist, ind };
  };
  return keys.map((item, index) => {
    const { exist, ind } = checkExistance(item);
    return (
      <button
        className={`${exist ? keyColor?.[ind]?.color : ""}`}
        id={item}
        key={item}
        onClick={(e) => handleClick(item)}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.8)")}
      >
        {item}
      </button>
    );
  });
};

export default Keyboard;

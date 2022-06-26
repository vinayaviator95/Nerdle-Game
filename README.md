# NERDLE APP

This app is the clone of famous nurdle game where you need to guess calculation.

## Technology used

Frontend= ReactJs
Backend= NodeJs,ExpressJs

Frontend Deployed on [netlify](https://nerdle-game99.netlify.app)
Backend deployed on [Heroku](https://api-nerdle.herokuapp.com)

## How to use application

=> Clone this repo (https://github.com/vinayaviator95/Nerdle-Game.git)
=> Install dependency by running command `npm i`
=> To start the app `npm start`

## Game Rules

Guess the NERDLE in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the solution.

Rules
Each guess is a calculation.
You can use 0 1 2 3 4 5 6 7 8 9 + - _ / or =.
It must contain one “=”.
It must only have a number to the right of the “=”, not another calculation.
Standard order of operations applies, so calculate _ and / before + and - eg. 3+2\*5=13 not 25!

# FUTURE PLANNED IMPROVEMENTS

1. Light mode/ Dark mode
2. User authentications
3. Store User attempts
4. Show a user analysis bases on previous attempts
5. Integrate the timer or reducing the steps to make the game harder for smart people.

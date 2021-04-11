## Available Scripts

### Website [Kitten-Game](http://kitten-game.s3-website.ap-south-1.amazonaws.com)

### `npm install`

Install all the dependencies for the app.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run devServer`

Runs the nodemon server of the app in the development mode.<br>
Open [http://localhost:3131](http://localhost:3131) to view it in the browser.

### `npm start`

Runs the front-end of the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Rules

- If the card drawn from deck is a cat card then the card is removed from deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is defuse card then the card is removed from the deck. Also that card can be used to defuse one bomb that may come in subsequent cards drawn from deck.
- If the card is shuffle card then the game is restarted and the deck is filled with 5 cards again.

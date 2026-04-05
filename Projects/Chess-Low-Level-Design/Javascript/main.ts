import { Game } from "./Game";
import { Player } from "./Player";
import * as readline from "readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    r1.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
};

const startGame = async () => {
  try {
    const p1 = await ask("Please Enter First Player Name : ");
    const player1 = new Player(p1, true, false);

    const p2 = await ask("Please Enter Second Player Name : ");
    const player2 = new Player(p2, false, false);

    let currPlayer = player1;

    const game = Game.getInstance(player1, player2);

    console.log("Game Started....");
    console.log(`Now it's ${currPlayer.getName()}'s turn`);

    while (true) {
      const start = await ask("Please enter start spot : ");
      if (start == "q" || start == "Q") {
        console.log("================== GAME OVER ========================");
        throw Error("Game Over");
      }
      if (start == "u" || start == "U") {
        console.log(" UNDO ");
        game.undoMove();
        continue;
      }

      const end = await ask("Please enter end spot : ");
      if (start == "q" || start == "Q") {
        console.log("================== GAME OVER ========================");
        throw Error("Game Over");
      }
      if (start == "u" || start == "U") {
        console.log(" UNDO ");
        game.undoMove();
        continue;
      }

      if (game.processMove(currPlayer, start, end)) {
        if (currPlayer == player1) {
          currPlayer = player2;
          console.log(`Now it's ${player2.getName()}'s turn`);
        } else {
          currPlayer = player1;
          console.log(`Now it's ${player1.getName()}'s turn`);
        }
      }
    }
  } catch (error) {
    console.log("Error between game : ", error);
    r1.close();
  }
};

startGame();

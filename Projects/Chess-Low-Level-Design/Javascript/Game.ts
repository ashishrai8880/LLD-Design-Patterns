import { Board } from "./Board";
import { Move } from "./Move";
import { Piece } from "./Piece";
import { Player } from "./Player";
import { Spot } from "./Spot";

export class Game {
  private static instance: Game | null = null;
  private board: Board;
  public players: Player[] = [];
  public move: Move[] = [];

  private constructor(player1: Player, player2: Player) {
    console.log("Instance created");

    this.players[0] = player1;
    this.players[1] = player2;

    this.board = Board.getInstance();
    this.board.resetBoard();
    this.board.display();
  }

  public static getInstance(player1: Player, player2: Player) {
    if (Game.instance == null) {
      Game.instance = new Game(player1, player2);
    }
    return Game.instance;
  }

  public getSpotPosition(spot: String) {
    // used to find row and column index from string
    const [r, c] = spot.split(" ").map(Number);
    return [r, c];
  }

  public processMove(currPlayer: Player, start: String, end: String): Boolean {
    const startMove = this.getSpotPosition(start);
    const endMove = this.getSpotPosition(end);

    const startSpot: Spot = this.board.getSpot(startMove[0], startMove[1]);
    const endSpot: Spot = this.board.getSpot(endMove[0], endMove[1]);
    const piece: Piece = startSpot.getPiece();

    const move: Move = new Move(currPlayer, startSpot, endSpot, piece);

    if (piece.canMove(move)) {
      //   piece.move(this.board, startSpot, endSpot); // need to implement yet in every piece
      console.log({ startMove, endMove, startSpot, endSpot });
      endSpot.setPiece(piece);
      startSpot.setPiece(null);

      this.move.push(move);
    } else {
      console.log("Invalid Move");
    }

    this.board.display();

    return true;
  }

  public undoMove() {
    if (this.move.length == 0) {
      console.log("No move to undo ");
      return;
    }
    const lastMove = this.move.pop();

    const start = lastMove.getStartSpot();
    const end = lastMove.getEndSpot();

    start.setPiece(end.getPiece());
    end.setPiece(null);

    console.log("================== UNDO MOVE =======================");
    this.board.display();
  }
}

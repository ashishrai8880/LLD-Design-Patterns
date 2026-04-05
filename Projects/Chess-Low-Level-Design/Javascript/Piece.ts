import { Board } from "./Board";
import { Move } from "./Move";
import { Spot } from "./Spot";

export abstract class Piece {
  public isKilled = false;
  public isWhite = false;

  constructor(isWhite) {
    this.isWhite = isWhite;
  }

  public abstract canMove(move: Move): Boolean;
  public abstract move(board: Board, start: Spot, end: Spot): void;
  public abstract getSymbols(): string;
}

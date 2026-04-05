import { Move } from "./Move";
import { Piece } from "./Piece";

export class PieceBishop extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }

  public canMove(move: Move): Boolean {
    return true;
  }
  public move(): void {
    // moving
  }
  public getSymbols(): string {
    return `${this.isWhite ? "W" : "B"}_BISHOPS`;
  }
}

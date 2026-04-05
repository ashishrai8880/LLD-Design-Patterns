import { Piece } from "./Piece";

export class PieceKnight extends Piece {
  constructor(isWhite: boolean) {
    super(isWhite);
  }

  public canMove(): Boolean {
    return true;
  }
  public move(): void {
    // moving
  }
  public getSymbols(): string {
    return `${this.isWhite ? "W" : "B"}_KNIGHT`
  }
}

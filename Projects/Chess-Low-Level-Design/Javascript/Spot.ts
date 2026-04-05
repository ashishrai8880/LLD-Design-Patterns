import { Piece } from "./Piece";

export class Spot {
  private piece: Piece | null;
  private x: Number;
  private y: Number;

  constructor(x: number, y: number, piece: Piece) {
    this.piece = piece;
    this.x = x;
    this.y = y;
  }

  getPiece() {
    return this.piece;
  }

  setPiece(piece: Piece | null) {
    try {
      this.piece = piece;
    } catch (error) {
      console.log("Error in moving setting piece : ", error);
    }
  }
}

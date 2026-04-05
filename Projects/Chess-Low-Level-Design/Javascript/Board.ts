import { Piece } from "./Piece";
import { PieceBishop } from "./PieceBishop";
import { PieceKing } from "./PieceKing";
import { PieceKnight } from "./PieceKnight";
import { PiecePawns } from "./PiecePawns";
import { PieceQueen } from "./PieceQueen";
import { PieceRook } from "./PieceRook";
import { Spot } from "./Spot";

export class Board {
  private static instance: Board | null = null;
  private box: Spot[][];

  private constructor() {
    console.log("Initializing Instance");
    this.box = Array.from({ length: 8 }, () => {
      return Array.from({ length: 8 }, () => null);
    });
  }

  public static getInstance() {
    if (Board.instance == null) {
      Board.instance = new Board();
    }
    return Board.instance;
  }

  public resetBoard() {
    this.box[0][0] = new Spot(0, 0, new PieceRook(true));
    this.box[0][1] = new Spot(0, 1, new PieceKnight(true));
    this.box[0][2] = new Spot(0, 2, new PieceBishop(true));
    this.box[0][3] = new Spot(0, 3, new PieceQueen(true));
    this.box[0][4] = new Spot(0, 4, new PieceKing(true));
    this.box[0][5] = new Spot(0, 5, new PieceBishop(true));
    this.box[0][6] = new Spot(0, 6, new PieceKnight(true));
    this.box[0][7] = new Spot(0, 7, new PieceRook(true));

    for (let i = 0; i < 8; i++) {
      this.box[1][i] = new Spot(1, i, new PiecePawns(true));
    }

    this.box[7][0] = new Spot(7, 0, new PieceRook(false));
    this.box[7][1] = new Spot(7, 1, new PieceKnight(false));
    this.box[7][2] = new Spot(7, 2, new PieceBishop(false));
    this.box[7][3] = new Spot(7, 3, new PieceQueen(false));
    this.box[7][4] = new Spot(7, 4, new PieceKing(false));
    this.box[7][5] = new Spot(7, 5, new PieceBishop(false));
    this.box[7][6] = new Spot(7, 6, new PieceKnight(false));
    this.box[7][7] = new Spot(7, 7, new PieceRook(false));

    for (let i = 0; i < 8; i++) {
      this.box[6][i] = new Spot(6, i, new PiecePawns(false));
    }

    // set Spot with null piece at all remaining places
    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.box[i][j] = new Spot(i, j, null);
      }
    }
  }

  public getSpot(row, col) {
    if (row < 0 || row >= 8 || col < 0 || col >= 8) {
      console.log("Error index out of bounds");
      return null;
    }
    return this.box[row][col];
  }

  public display() {
    console.log(
      "========================= UPDATED BOARD ========================",
    );

    for (let i = 0; i < 8; i++) {
      let row = "";
      for (let j = 0; j < 8; j++) {
        const spot = this.box[i][j];
        if (spot.getPiece() !== null) {
          const piece: Piece = spot.getPiece();
          row = row + " " + piece.getSymbols().padEnd(10);
        } else {
          row = row + " " + "BLANK".padEnd(10);
        }
      }
      console.log(row);
    }
  }
}

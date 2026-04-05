import { Piece } from "./Piece";
import { Player } from "./Player";
import { Spot } from "./Spot";

export class Move {
  private player: Player;
  private start: Spot;
  private end: Spot;
  private pieceMoved: Piece;
  private pieceKilled: Piece;
  private isValidMove: Boolean;

  constructor(player: Player, start: Spot, end: Spot, piece: Piece) {
    this.player = player;
    this.start = start;
    this.end = end;
    this.pieceMoved = piece;
    this.pieceKilled = null;
  }

  getStartSpot() {
    return this.start;
  }

  getEndSpot() {
    return this.end;
  }

  getPiece() {
    return this.pieceMoved;
  }
}

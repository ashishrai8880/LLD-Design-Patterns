export class Player {
  private isWhite: boolean;
  private name: String;
  private isCurrPlayer: boolean;

  constructor(name: String, isWhite: boolean, isCurrPlayer: boolean) {
    this.name = name;
    this.isCurrPlayer = isCurrPlayer;
    this.isWhite = isWhite;
  }

  getName() : String{
    return this.name ;
  }
}

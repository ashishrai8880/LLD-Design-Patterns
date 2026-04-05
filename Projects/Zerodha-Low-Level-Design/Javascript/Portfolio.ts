export class Portfolio {
  public portfolio;

  constructor() {
    this.portfolio = {};
  }

  getMyPortfolio(userId: number): Array<any> {
    return this.portfolio[userId] || [];
  }
}

export class Watchlist {
  public watchlist;

  constructor() {
    this.watchlist = {};
  }

  getMyWatchlist(userId: number): Array<any> {
    return this.watchlist[userId] || [];
  }
}

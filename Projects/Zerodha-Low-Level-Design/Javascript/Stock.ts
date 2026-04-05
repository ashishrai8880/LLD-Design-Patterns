import { ExchangeType } from "./ExchangeType";

export class Stock {
  public id: string;
  public name: string;
  public price: number;
  public exchange: ExchangeType;

  constructor(id: string, name: string, price: number, exchange: ExchangeType) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.exchange = exchange;
  }

  getPrice(): Number {
    return this.price;
  }
}

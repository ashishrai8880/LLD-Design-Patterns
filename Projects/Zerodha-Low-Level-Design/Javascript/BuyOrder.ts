import { ExchangeType } from "./ExchangeType";
import { Order } from "./Order";
import { Stock } from "./Stock";

export class BuyOrder implements Order {
  public orderId: number;
  public userId: number;
  public stock: Stock;
  public quantity: number;
  public price: number;
  public buyPrice: number;
  public exchangeType: ExchangeType;

  constructor(
    orderId,
    userId,
    stock: Stock,
    quantity,
    price,
    buyPrice,
    exchangeType,
  ) {
    this.orderId = orderId;
    this.userId = userId;
    this.stock = stock;
    this.quantity = quantity;
    this.price = price;
    this.buyPrice = buyPrice;
    this.exchangeType = exchangeType;
  }
}

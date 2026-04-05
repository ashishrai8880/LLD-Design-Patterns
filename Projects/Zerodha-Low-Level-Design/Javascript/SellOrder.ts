import { Order } from "./Order";

export class SellOrder implements Order {
  public orderId: number;
  public userId: number;
  public stockId: number;
  public quantity: number;
  public price: number;
  public orderType: string; // 'buy' or 'sell'
  public status: string; // 'open', 'partially_filled', 'filled', 'cancelled'

  constructor(orderId, userId, stockId, quantity, price, orderType, status) {
    this.orderId = orderId;
    this.userId = userId;
    this.stockId = stockId;
    this.quantity = quantity;
    this.price = price;
    this.orderType = orderType;
    this.status = status;
  }
}

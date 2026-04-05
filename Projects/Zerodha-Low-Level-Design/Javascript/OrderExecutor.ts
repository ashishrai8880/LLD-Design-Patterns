import { ExchangeConnector } from "./ExchangeConnector";
import { Order } from "./Order";

export class OrderExecutor {
  constructor() {}

  public executeOrder(order: Order) {
    console.log("Executing order at Exchange ....");
    const exchangeConnetor = new ExchangeConnector();

    exchangeConnetor.sendOrderToExchange(order);
  }
}

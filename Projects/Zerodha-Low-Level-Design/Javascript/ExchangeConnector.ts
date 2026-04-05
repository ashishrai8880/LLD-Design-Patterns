import { Order } from "./Order";

export class ExchangeConnector {
  private static instance: ExchangeConnector;

  constructor() {
    if (ExchangeConnector.instance == null) {
      ExchangeConnector.instance = this;
    }
    return ExchangeConnector.instance;
  }

  public sendOrderToExchange(order: Order) {
    console.log(`Order sent to exchange: ${JSON.stringify(order)}`);
  }
}

import { Order } from "./Order";
import { OrderExecutor } from "./OrderExecutor";
import { OrderValidator } from "./OrderValidator";
import { User } from "./User";

export class OrderManager {
  private static instance: OrderManager;
  private orderValidator: OrderValidator;
  private orderExecutor: OrderExecutor;

  constructor() {
    if (OrderManager.instance == null) {
      OrderManager.instance = this;
      this.orderValidator = new OrderValidator();
      this.orderExecutor = new OrderExecutor();
    }
    return OrderManager.instance;
  }

  public placeOrder(user: User, order: Order) {
    if (this.orderValidator.validateOrder(user, order)) {
      console.log("Order validation successful . Placing order...");
      this.orderExecutor.executeOrder(order);
      console.log("Order placed successfully");
    } else {
      console.log("Order validation failed");
    }
  }
}

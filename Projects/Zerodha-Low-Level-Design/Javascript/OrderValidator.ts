import { Order } from "./Order";
import { User } from "./User";

export class OrderValidator {
  constructor() {}

  public validateOrder(user: User, order: Order): boolean {
    return true;
  }
}

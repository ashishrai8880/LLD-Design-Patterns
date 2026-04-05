import { BuyOrder } from "./BuyOrder";
import { Order } from "./Order";
import { OrderManager } from "./OrderManager";
import { Stock } from "./Stock";
import { User } from "./User";
import { ExchangeType } from "./ExchangeType";

const start = () => {
  const user = new User(1, "Ashish");

  const stock = new Stock("1", "TCS", 3000, ExchangeType.NSE);

  const order: Order = new BuyOrder(
    1,
    user.getId(),
    stock,
    10,
    stock.getPrice(),
    3002,
    "NSE",
  );

  const orderManager = new OrderManager();

  orderManager.placeOrder(user, order);
};

start();

const eventEmits = require("events");

const orderprocess = new eventEmits();

// events starts
orderprocess.on("process", (order) => {
  console.log(`order is being clicked ,product name : ${order.name}`);
  orderprocess.emit("shipping", order);
});

orderprocess.on("shipping", (order) => {
  console.log(
    `order is being shipped  ,product name : ${order.name} and order id :${order.id}`
  );
  // orderprocess.emit("shipping", order);
});

const order = { id: 31231, name: "laptop", price: 242342 };
const order1 = { id: 3234, name: "mobile", price: 123123 };

orderprocess.emit("process", order);
orderprocess.emit("process", order1);

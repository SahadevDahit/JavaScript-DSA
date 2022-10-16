//Customer service using queue FIFO implementation
function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = [];

}
Cashier.prototype.addOrder = function (order) {
    this.customers.push(order);
}
Cashier.prototype.deliveryOrder = function (order) {
    let deliver_customer = this.customers.pop();
    console.log(`${deliver_customer} has been delivered with an order no ${deliver_customer.order}`)

}
let obj = new Cashier();
let c1 = new Customer("Sahadev", "12");
let c2 = new Customer("Dahit", "23");
obj.addOrder(c1);
obj.addOrder(c2);
obj.deliveryOrder();
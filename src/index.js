import * as Item from "./services/item.js";
import * as Cart from "./services/cart.js";

console.log("😁 Welcome to your Shopee Cart!");

const cart = [];
const wishList = [];

const item1 = await Item.createItem("HotWheels", 15.99, 3);
const item2 = await Item.createItem("MaxSteel", 59.99, 1);
const item3 = await Item.createItem("Super Nintendo", 199.99, 1);

Cart.addItem(cart, item1);
Cart.addItem(cart, item2);
Cart.addItem(wishList, item3);

console.log("💵 Your total in cart is:");
await Cart.calculateTotal(cart);

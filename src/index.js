import * as Item from "./services/item.js";
import * as Cart from "./services/cart.js";

console.log("😁 Welcome to your Shopee Cart!");

const cart = [];
const wishList = [];

const item1 = await Item.createItem("HotWheels", 15.99, 3);
const item2 = await Item.createItem("MaxSteel", 59.99, 1);
const item3 = await Item.createItem("Super Nintendo", 199.99, 1);

await Cart.addItem(cart, item1);
await Cart.addItem(cart, item2);
await Cart.addItem(wishList, item3);

await Cart.removeItem(cart, item1);
// await Cart.deleteItem(cart, item1.name);

await Cart.displayCart(cart);

console.log("\n💵 Total:");
await Cart.calculateTotal(cart);

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) userCart.splice(index, 1);
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((e) => e.name === item.name);

  if (indexFound === -1) {
    console.log("🚨 Item not found!");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    console.log(`\n ✅ Item removed | ${item.name}. ${item.quantity}x`);
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
  console.log(`R$ ${result.toFixed(2)}`);
}

async function displayCart(userCart) {
  console.log("\n Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal: ${item.subTotal()}`
    );
  });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };

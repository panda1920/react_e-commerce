export function addItemToCart(cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToAdd.id
  );

  if (!existingCartItem)
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
  else
    return cartItems.map(
      item => item.id === cartItemToAdd.id
        ? {...item, quantity: item.quantity + 1}
        : item
    );
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
  const existingItemCount = cartItems.find(item => item.id === cartItemToRemove.id);

  if (existingItemCount.quantity === 1)
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  else
    return cartItems.map(
      item => item.id === cartItemToRemove.id ? {
        ...item, quantity: item.quantity - 1
      } : item
    );
}
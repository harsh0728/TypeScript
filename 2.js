var ProductCategory;
(function (ProductCategory) {
    ProductCategory["ELECTRONICS"] = "electronics";
    ProductCategory["CLOTHING"] = "clothing";
    ProductCategory["BOOKS"] = "books";
    ProductCategory["FOOD"] = "food";
})(ProductCategory || (ProductCategory = {}));
// Calculate subtotal for cart item
function calculateSubtotal(price, quantity) {
    return price * quantity;
}
// Calculate total items in cart
function calculateTotalItems(items) {
    return items.reduce(function (total, item) { return total + item.quantity; }, 0);
}
// Calculate total price
function calculateTotalPrice(items) {
    return items.reduce(function (total, item) { return total + item.subtotal; }, 0);
}
// Add item to cart
function addToCart(cart, product, quantity) {
    // Check if product is in stock
    if (!product.inStock || product.stock < quantity) {
        console.log("Sorry, ".concat(product.name, " is out of stock or insufficient quantity"));
        return cart;
    }
    var existingItemIndex = cart.items.findIndex(function (item) { return item.product.id === product.id; });
    if (existingItemIndex !== -1) {
        // Update existing item
        cart.items[existingItemIndex].quantity += quantity;
        cart.items[existingItemIndex].subtotal = calculateSubtotal(product.price, cart.items[existingItemIndex].quantity);
    }
    else {
        // Add new item
        cart.items.push({
            product: product,
            quantity: quantity,
            subtotal: calculateSubtotal(product.price, quantity)
        });
    }
    // Update cart totals
    cart.totalItems = calculateTotalItems(cart.items);
    cart.totalPrice = calculateTotalPrice(cart.items);
    cart.finalPrice = cart.totalPrice - cart.discount;
    return cart;
}
// Remove item from cart
function removeFromCart(cart, productId) {
    cart.items = cart.items.filter(function (item) { return item.product.id !== productId; });
    cart.totalItems = calculateTotalItems(cart.items);
    cart.totalPrice = calculateTotalPrice(cart.items);
    cart.finalPrice = cart.totalPrice - cart.discount;
    return cart;
}
// Update quantity
function updateQuantity(cart, productId, newQuantity) {
    var item = cart.items.find(function (item) { return item.product.id === productId; });
    if (item) {
        if (newQuantity <= 0) {
            return removeFromCart(cart, productId);
        }
        if (item.product.stock < newQuantity) {
            console.log("Only ".concat(item.product.stock, " items available"));
            return cart;
        }
        item.quantity = newQuantity;
        item.subtotal = calculateSubtotal(item.product.price, newQuantity);
        cart.totalItems = calculateTotalItems(cart.items);
        cart.totalPrice = calculateTotalPrice(cart.items);
        cart.finalPrice = cart.totalPrice - cart.discount;
    }
    return cart;
}
// Apply discount
function applyDiscount(cart, discountAmount) {
    cart.discount = discountAmount;
    cart.finalPrice = cart.totalPrice - cart.discount;
    return cart;
}
// Display cart
function displayCart(cart) {
    console.log("\n========== SHOPPING CART ==========");
    console.log("User ID: ".concat(cart.userId));
    console.log("Created: ".concat(cart.createdAt.toLocaleDateString(), "\n"));
    if (cart.items.length === 0) {
        console.log("Your cart is empty!");
        return;
    }
    console.log("Items:");
    cart.items.forEach(function (item, index) {
        console.log("".concat(index + 1, ". ").concat(item.product.name));
        console.log("   Price: $".concat(item.product.price.toFixed(2)));
        console.log("   Quantity: ".concat(item.quantity));
        console.log("   Subtotal: $".concat(item.subtotal.toFixed(2)));
    });
    console.log("\n-----------------------------------");
    console.log("Total Items: ".concat(cart.totalItems));
    console.log("Subtotal: $".concat(cart.totalPrice.toFixed(2)));
    console.log("Discount: -$".concat(cart.discount.toFixed(2)));
    console.log("FINAL PRICE: $".concat(cart.finalPrice.toFixed(2)));
    console.log("===================================\n");
}
// ========== TESTING ==========
// Create products
var products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999.99,
        category: ProductCategory.ELECTRONICS,
        inStock: true,
        stock: 10
    },
    {
        id: 2,
        name: "Nike Sneakers",
        price: 129.99,
        category: ProductCategory.CLOTHING,
        inStock: true,
        stock: 5
    },
    {
        id: 3,
        name: "JavaScript Book",
        price: 39.99,
        category: ProductCategory.BOOKS,
        inStock: true,
        stock: 20
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        price: 79.99,
        category: ProductCategory.ELECTRONICS,
        inStock: true,
        stock: 15
    }
];
// Create user
var user = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com"
};
// Create empty cart
var myCart = {
    userId: user.id,
    items: [],
    totalItems: 0,
    totalPrice: 0,
    discount: 0,
    finalPrice: 0,
    createdAt: new Date()
};
// Add items to cart
console.log("Adding items to cart...");
myCart = addToCart(myCart, products[0], 1); // iPhone
myCart = addToCart(myCart, products[1], 2); // Sneakers x2
myCart = addToCart(myCart, products[2], 1); // Book
myCart = addToCart(myCart, products[3], 3); // Earbuds x3
displayCart(myCart);
// Update quantity
console.log("Updating sneakers quantity to 1...");
myCart = updateQuantity(myCart, 2, 1);
displayCart(myCart);
// Apply discount
console.log("Applying $50 discount...");
myCart = applyDiscount(myCart, 50);
displayCart(myCart);
// Remove item
console.log("Removing JavaScript Book...");
myCart = removeFromCart(myCart, 3);
displayCart(myCart);

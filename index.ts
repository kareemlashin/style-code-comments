// Shopping cart application

// Item interface
/**
 * @interface Item
 */
interface Item {
    id: number;
    name: string;
    price: number;
}

// CartItem interface
interface CartItem extends Item {
    quantity: number;
}

// ShoppingCart class
class ShoppingCart {
    private items: CartItem[];

    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    /**
     * @param {Item} item
     * @param {number} quantity
     * @memberof ShoppingCart
     */
    addItem(item: Item, quantity: number): void {
        const cartItem: CartItem = { ...item, quantity };
        this.items.push(cartItem);
    }

    // Remove an item from the cart
    removeItem(itemId: number): void {
        const itemIndex = this.items.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    }

    // Calculate the total price of items in the cart
    calculateTotalPrice(): number {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    }

    // Get all items in the cart
    getItems(): CartItem[] {
        return this.items;
    }
}

// Sample usage

// Create a new shopping cart
const cart = new ShoppingCart();

// Add items to the cart
const item1: Item = { id: 1, name: 'Item 1', price: 10 };
const item2: Item = { id: 2, name: 'Item 2', price: 20 };
const item3: Item = { id: 3, name: 'Item 3', price: 30 };

cart.addItem(item1, 2);
cart.addItem(item2, 1);
cart.addItem(item3, 3);

// Calculate the total price
const totalPrice = cart.calculateTotalPrice();
console.log('Total Price:', totalPrice);

// Remove an item from the cart
cart.removeItem(2);

// Get all items in the cart
const cartItems = cart.getItems();
console.log('Cart Items:', cartItems);
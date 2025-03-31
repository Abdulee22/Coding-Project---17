// Task 1: Create a Customer Class //
class Customer {
constructor(name, email) {
    this.name = name; // Customer name
    this.email = email;// Customer email 
    this.purchaseHistory = [];} // Initialize array 
    
    addPurchase(amount) {
    this.purchaseHistory.push(amount);} // Purchase amount 
    getTotalSpent() {
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0);}}// Total amount calculation 
    
    const customer1 = new Customer("Goku", "Kakarot@Gmail.com");
    customer1.addPurchase(200); // 200$ Purchase 
    customer1.addPurchase(350); // 350$ Purchase
    console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`); // Customer situation 
    
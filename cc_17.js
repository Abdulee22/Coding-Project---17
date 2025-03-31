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

    // Task 2: Create a SalesRep Class //
class SalesRep {
constructor(name) {
    this.name = name; // Store rep 
    this.clients = [];} // Initialize array 
        
addClient(customer) {
this.clients.push(customer);} // Adding customer 
        
getClientTotal(name) {
const client = this.clients.find(client => client.name === name);
return client ? client.getTotalSpent() : 0;}} // finds client by name and returns total spent
    
const salesRep = new SalesRep("Krillin");
salesRep.addClient(customer1);
console.log(`SalesRep: ${salesRep.name}, Total Spent by ${customer1.name}: $${salesRep.getClientTotal("Goku")}`); // Customer situation 
    
    
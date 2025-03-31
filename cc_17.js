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

// Task 3: Create a VIPCustomer Class (Extends Customer) //
class VIPCustomer extends Customer {
constructor(name, email, vipLevel) {
    super(name, email);
    this.vipLevel = vipLevel;} // Store VIP level like gold and platinum 
        
getTotalSpent() {
return super.getTotalSpent() * 1.1;}} // 10% loyalty bonus
    
const vipCustomer1 = new VIPCustomer("Vegeta", "PrinceVegeta@gmail.com", "Platinum");
vipCustomer1.addPurchase(950); // 950$ Purchase
vipCustomer1.addPurchase(820); // 820$ Purchase 
console.log(`VIP Customer: ${vipCustomer1.name}, Total Spent (with bonus): $${vipCustomer1.getTotalSpent()}`); // Customer situation 
salesRep.addClient(vipCustomer1); // Added VIP Customer to list 

// Task 4: Build a Client Report System //
const customers = [customer1, vipCustomer1]; // All customers
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0); // Reduce to calculate otal revenue for all customers
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500); // Filter for 500+
const customerSummaries = customers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent() })); // Map to create a array of customer names and total spending

console.log(`Total Revenue: $${totalRevenue}`);
console.log("High-Spending Customers:", highSpenders);
console.log("Customer Summary:", customerSummaries); // Logs  
    
    
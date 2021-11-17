let addItem = prompt("Add an item to your shopping list:")
let priceOfItem = Number(prompt("How much does it cost?"))

//array for items
const items = [
    'Milk',
    'Cocoa',
    'Salad',
    'Carrots',
    'Tomatoes',
    'Ready meals']
//added the item of user input in the end of the array
    items.push(addItem)

//array for prices of items
const prices = [
    2.00,
    3.00,
    2.00,
    1.00,
    1.00,
    5.00 
            ]

//"itemName" costs "priceOfItem"
console.log(`${items[0]}  costs $${prices[0]}`)
console.log(`${items[1]}  costs $${prices[1]}`)
console.log(`${items[2]}  costs $${prices[2]}`)
console.log(`${items[3]}  costs $${prices[3]}`)
console.log(`${items[4]}  costs $${prices[4]}`)
console.log(`${items[5]}  costs $${prices[5]}`)
console.log(`${addItem}   costs $${priceOfItem}`)

//amount of all prices of items
let sumOfTotal = prices[0]+prices[1]+prices[2]+prices[3]+prices[4]+prices[5]+priceOfItem

//showing the total of all prices including the user input price of item .
for ( const price of prices)
{
    console.log(`The total price of items -> $${sumOfTotal}`)
}




// function createOrder(item:string, id:number):void{               
//     console.log(`The ${item} with ID ${id} was ordered`)
// }
// createOrder("book", 1)

// void means that this funciton doesn't return anything, only prints

type Presents = "book" | "flowers" | "chocolate";
type Id = 1 | 2 | 3;
function createOrder(item: Presents = "book", id: Id = 1, note?: string): number {
    // function createOrder(item: Presents = "book", id: Id = 1): number { // example of default values
    // function createOrder(item: string, id: number): number {
    let price: number = 0;
    if (item === "book") {
        price = 10;
    }
    else if (item === "flowers") {
        price = 20;
    }
    else if (item === "chocolate") {
        price = 15;
    }

    console.log(`The ${item} with ID ${id} was ordered`)
    console.log(`The not is "${note}"`)
    return price
}
const total1 = createOrder("book", 1, "gift wrap")
console.log(`Price is ${total1}$`)
const total2 = createOrder("flowers", 2)
console.log(`Price is ${total2}$`)
const total3 = createOrder("chocolate", 3)
console.log(`Price is ${total3}$`)
createOrder()
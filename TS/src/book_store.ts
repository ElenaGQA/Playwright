import { Book, OrderStatus, BookOrder } from "./types";

let book1: Book = {
    id: 1,
    title: "Harry Potter",
    author: "J.K Rowling",
    generes: ["fiction", "fantasy"],
    publishedYear: 2015,
    isAvailable: true
};

let book2: Book = {
    id: 2,
    title: "1984",
    author: "Orwell",
    generes: ["fiction", "dystopian"],
    publishedYear: 1964,
    isAvailable: false
};

const myOrder: BookOrder = {
    books: [book1, book2],
    status: "shipped",
    orderPrice: 20
};

console.log(`Books ordered: ${myOrder.books[0].title}, ${myOrder.books[1].title}`);
console.log(`Order status: ${myOrder.status}`);
console.log(`Order price: ${myOrder.orderPrice}`);

// console.log(`Book: ${book1.title}, ${book1.author}, ${book1.publishedYear}, is avaialable: ${book1.isAvailable}`);
// console.log(`Book: ${book2.title}, ${book2.author}, ${book2.publishedYear}, is avaialable: ${book2.isAvailable}`);



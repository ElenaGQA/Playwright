export type Book = {
    id: number;
    title: string;
    author: string;
    generes: string[];
    publishedYear: number;
    isAvailable: boolean;
}

export type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

export type BookOrder = {
    books: Book[];
    status: OrderStatus;
    orderPrice: number;
};


import { SortingPage, ProductGrid, CartPage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.sortingPage = new SortingPage(page);
        this.productGrid = new ProductGrid(page);
        this.cartPage = new CartPage(page);
    };
};
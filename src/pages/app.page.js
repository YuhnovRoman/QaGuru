import { SortingPage, ProductGrid, CartPage, BugPage, Authpage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.sortingPage = new SortingPage(page);
        this.productGrid = new ProductGrid(page);
        this.cartPage = new CartPage(page);
        this.bugPage = new BugPage(page);
        this.authPage = new Authpage(page);
    };
};
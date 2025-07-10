import { test } from "../../src/fixtures/fixture";

export class SortingPage {
    constructor(page) {
        this.page = page;
        this.viewTen = page.getByRole('link', { name: '10' });
        this.viewTwentyFive = page.getByRole('link', { name: '25' });
        this.viewFifty = page.getByRole('link', { name: '50' });
        this.viewInfo = page.getByText('Showing all 18 results');
        this.sortDropDown = page.locator('#sortfield');
    };

    async goToMainPage() {
        return test.step("Переход на главую страницу", async () => {
            await this.page.goto("");
        });
    };

    async showTenProducts() {
        return test.step("Выбор отображения 10 товаров", async () => {
            await this.viewTen.click();
        });
    };

    async showTwentyFiveProducts() {
        return test.step("Выбор отображения 25 товаров", async () => {
            await this.viewTwentyFive.click();
        });
    };

    async showFiftyProducts() {
        return test.step("Выбор отображения 50 товаров", async () => {
            await this.viewFifty.click();
        });
    };

    async sortHighPrise() {
        return test.step("Сортировка товаров по уменьшение цены", async () => {
            await this.sortDropDown.selectOption('2');
        });
    };

    async sortLowPrise() {
        return test.step("Сортировка товаров по увеличению цены", async () => {
            await this.sortDropDown.selectOption('1');
        });
    };
};
import { test } from "../../src/fixtures/fixture";

export class ProductGrid {
    constructor(page) {
        this.page = page;
        this.title = page.locator("h3[class='ec_product_title_type1']");
        this.firstPrice = page.locator("span[class='ec_price_type1']").first();
        this.secondPrice = page.locator("span[class='ec_price_type1']").nth(1);
        this.addToCartButton = page.locator("span[class='ec_product_addtocart']").nth(1);
        this.goToCartButton = page.getByRole('link', { name: 'CHECKOUT NOW' }).first();
    };

    async addToCart() {
        return test.step("Клик на кнопку 'ADD TO CART'", async () => {
            await this.addToCartButton.click();
        });
    };

    async goToCart() {
        return test.step("Клик на кнопку 'CHECKOUT NOW'", async () => {
            await this.goToCartButton.click();
        });
    };

    async getPrise(locator) {
        const text = await locator.innerText();
        return Number(text.slice(1).replace(/[^\d.]/g, ''));
    }
};
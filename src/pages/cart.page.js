import test from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.emptyState = page.locator("div[class='ec_cart_empty']");
        this.widget = page.locator("div[class='widget-area']");
        this.saleBlock = page.locator("div[class='ec_cart_right']");
        this.item = page.locator("tr[class='ec_cartitem_row']");
        this.itemPrice = page.locator("td[class='ec_cartitem_price']");
        this.deleteItemButton = page.locator("div[class='ec_cartitem_delete']");
        this.toStoreButton = page.locator("a[class='ec_cart_empty_button academy-bug']");
        this.currencyDropDown = page.locator('#ec_currency_conversion');
        this.currencyEur = page.locator('#ec_currency_conversion');
    };

    async removeItem() {
            return test.step("Удаление товара из корзины", async () => {
                await this.deleteItemButton.click();
            });
        };

    async returnToStore() {
            return test.step("Возврат на главную страницу из корзины", async () => {
                await this.toStoreButton.click();
            });
        };
};
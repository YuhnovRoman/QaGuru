import { test } from "../../src/fixtures/fixture";
import { expect } from "@playwright/test";

test.describe("Основное управление корзиной", async () => {
    test("Добавление товара в корзину", {
        tag: "@ui",
    }, async ({ app }) => {
        await app.sortingPage.goToMainPage();
        await app.productGrid.addToCart();
        await app.productGrid.goToCart();
        await test.step("Товар добавлен в корзину", async () => {
            await expect(app.cartPage.item).toBeVisible();
            await expect(app.cartPage.deleteItemButton).toBeVisible();
            await expect(app.cartPage.saleBlock).toBeVisible();
            await expect(app.cartPage.widget).toBeVisible();
        });
    });

    test("Удаление товара из корзины", {
        tag: "@ui",
    }, async ({ app }) => {
        await app.sortingPage.goToMainPage();
        await app.productGrid.addToCart();
        await app.productGrid.goToCart();
        await app.cartPage.removeItem();
        await test.step("Отображено пустое состояние корзины", async () => {
            await expect(app.cartPage.toStoreButton).toBeVisible();
        });
        await app.cartPage.returnToStore();
        await test.step("Отображен поп-ап с подтверждением найденного бага", async () => {
            await expect(app.bugPage.bugPopUp).toBeVisible();
        });
    });
});

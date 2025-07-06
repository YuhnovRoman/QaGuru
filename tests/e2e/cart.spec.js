import { test } from "../../src/fixtures/fixture";
import { expect } from "@playwright/test";

test("Добавление товара в корзину", {
    tag: "@e2e",
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
    tag: "@e2e",
}, async ({ app }) => {
    await app.sortingPage.goToMainPage();
    await app.productGrid.addToCart();
    await app.productGrid.goToCart();
    await app.cartPage.removeItem();
    await test.step("Отображено пустое состояние корзины", async () => {
        await expect(app.cartPage.toStoreButton).toBeVisible();
    });
    await app.cartPage.returnToStore();
    await test.step("Отображена главная страница с товарами", async () => {
        await expect(app.sortingPage.viewInfo).toBeVisible();
        await expect(app.productGrid.title).toHaveCount(18); // Показано максимальное доступное количество товаров
    });
});
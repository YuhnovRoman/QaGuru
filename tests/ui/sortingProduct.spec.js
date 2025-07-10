import { test } from "../../src/fixtures/fixture";
import { expect } from "@playwright/test";

test.describe("Сортировка товаров на главной странице", async () => {
    test("Отображение 10 товаров на главной странице", {
        tag: "@ui",
    }, async ({ app }) => {
        await app.sortingPage.goToMainPage();
        await test.step("По умолчанию выбрана сортировка на 25 продуктов", async () => {
            await expect(app.sortingPage.viewInfo).toBeVisible();
            await expect(app.productGrid.title).toHaveCount(18); // Показано максимальное доступное количество товаров
        });
        await app.sortingPage.showTenProducts();
        await test.step("На главной отображено 10 продуктов", async () => {
            await expect(app.page).toHaveURL(/perpage=10/);
            await expect(app.productGrid.title).toHaveCount(10);
        });
    });

    test("Отображение 50 товаров на главной странице", {
        tag: "@ui",
    }, async ({ app }) => {
        await app.sortingPage.goToMainPage();
        await test.step("По умолчанию выбрана сортировка на 25 продуктов", async () => {
            await expect(app.sortingPage.viewInfo).toBeVisible();
            await expect(app.productGrid.title).toHaveCount(18); // Показано максимальное доступное количество товаров
        });
        await app.sortingPage.showFiftyProducts();
        await test.step("Отображена поп-ап с подтверждением найденного бага", async () => {
            await expect(app.bugPage.bugPopUp).toBeVisible();
        });
    });
    test("Проверка сортировки по цене", {
        tag: "@ui",
    }, async ({ app }) => {
        await app.sortingPage.goToMainPage();
        await app.sortingPage.sortHighPrise();
        await test.step("Первым идет дорогой товар", async () => {
            await expect(async () => {
                const firstItemPrice = await app.productGrid.getPrise(app.productGrid.firstPrice);
                const secondItemPrice = await app.productGrid.getPrise(app.productGrid.secondPrice);
                expect(firstItemPrice).toBeGreaterThan(secondItemPrice);
            }).toPass();
        });
        await app.sortingPage.sortLowPrise();
        await test.step("Первым идет дешевый товар", async () => {
            await expect(async () => {
                const firstItemPrice = await app.productGrid.getPrise(app.productGrid.firstPrice);
                const secondItemPrice = await app.productGrid.getPrise(app.productGrid.secondPrice);
                expect(firstItemPrice).toBeLessThan(secondItemPrice);
            }).toPass();
        });
    });
});

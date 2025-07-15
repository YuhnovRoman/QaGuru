import { test } from "../../src/fixtures/fixture";
import { expect } from "@playwright/test";
import { UserBuilder } from "../../src/builder/index";

test.describe("Авторизация", async () => {
    test("Авторизация на странице корзины", {
        tag: "@ui",
    }, async ({ app }) => {
        const randomUser = new UserBuilder()
            .addEmail()
            .addPassword()
            .generate();

        await app.cartPage.goToCartPage();
        await app.authPage.authorization(randomUser);
        await test.step("Отображен поп-ап с подтверждением найденного бага", async () => {
            await expect(app.bugPage.bugPopUp).toBeVisible();
        });
    });
});
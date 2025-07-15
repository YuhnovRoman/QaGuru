import { test } from "../../src/fixtures/fixture";

export class Authpage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#ec_account_login_widget_email')
        this.passInput = page.locator('#ec_account_login_widget_password')
        this.signUpButton = page.locator("button[class='ec_login_widget_button ec-widget-login']");
    };

    async authorization(randomUser) {
        return test.step("Авторизация", async () => {
            const { email, password } = randomUser;
            await this.emailInput.fill(email);
            await this.passInput.fill(password);
            await this.signUpButton.click();
        });
    };
};
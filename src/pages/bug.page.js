export class BugPage {
    constructor(page) {
        this.page = page;
        this.bugPopUp = page.locator("[id='bug-popup']")
    };
};
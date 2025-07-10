import { test as base } from '@playwright/test';
import { App } from '../pages/index';
import { ApiPage } from '../controllers/index';

export const test = base.extend({
  app: async ({ page }, use) => {
    let app = new App(page);
    await use(app);
  },
  api: async ({ request }, use) => {
    await use(new ApiPage(request));
  },
});
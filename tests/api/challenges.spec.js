import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/fixture";
import { TodoBuilder } from "../../src/builder/challenge.builder";

let token;

test.describe("Создание заданий", () => {
    test.use({ baseURL: 'https://apichallenges.herokuapp.com/' });
    test.beforeAll(async ({ api }) => {
        token = await api.challengeStart.post();
    });

    test("Создание задания", {
        tag: "@api",
    }, async ({ api }) => {
        const TODO_DATA = new TodoBuilder()
            .generateTitle(10)
            .generateDescription(10)
            .generate();
        const RESPONSE = await api.challengeCreate.postCreate(token, TODO_DATA.title, TODO_DATA.description);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 201", async () => {
            await expect(RESPONSE.status()).toBe(201);
        });
        await test.step("Тело ответа содержит валидные значения", async () => {
            await expect(BODY.title).toEqual(TODO_DATA.title);
            await expect(BODY.description).toEqual(TODO_DATA.description);
        });
    });

    test("Создание задания c невалидным статусом", {
        tag: "@api",
    }, async ({ api }) => {
        const TODO_DATA = new TodoBuilder()
            .generateTitle()
            .generateDescription()
            .generate();
        const RESPONSE = await api.challengeCreate.postCreate(token, TODO_DATA.title, TODO_DATA.description, "fail");
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 400, текст ошибки корректный ", async () => {
            await expect(RESPONSE.status()).toBe(400);
            await expect(BODY.errorMessages).toEqual(['Failed Validation: doneStatus should be BOOLEAN but was STRING']);
        });
    });

    test("Создание задания c длинным заголовком", {
        tag: "@api",
    }, async ({ api }) => {
        const TODO_DATA = new TodoBuilder()
            .generateTitle(51)
            .generateDescription(10)
            .generate();
        const RESPONSE = await api.challengeCreate.postCreate(token, TODO_DATA.title, TODO_DATA.description);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 400, текст ошибки корректный ", async () => {
            await expect(RESPONSE.status()).toBe(400);
            await expect(BODY.errorMessages).toEqual(['Failed Validation: Maximum allowable length exceeded for title - maximum allowed is 50']);
        });
    });

    test("Создание задания c максимально допустимой длинной заголовка и описания", {
        tag: "@api",
    }, async ({ api }) => {
        const TODO_DATA = new TodoBuilder()
            .generateTitle(50)
            .generateDescription(200)
            .generate();
        const RESPONSE = await api.challengeCreate.postCreate(token, TODO_DATA.title, TODO_DATA.description);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 201", async () => {
            await expect(RESPONSE.status()).toBe(201);
        });
        await test.step("Длина заголовка и описания заданы верно", async () => {
            await expect(BODY.title).toHaveLength(50);
            await expect(BODY.description).toHaveLength(200);
        });
    });

    test("Создание задания c длинным описанием", {
        tag: "@api",
    }, async ({ api }) => {
        const TODO_DATA = new TodoBuilder()
            .generateTitle(10)
            .generateDescription(5000)
            .generate();
        const RESPONSE = await api.challengeCreate.postCreate(token, TODO_DATA.title, TODO_DATA.description);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 413, текст ошибки корректный ", async () => {
            await expect(RESPONSE.status()).toBe(413);
            await expect(BODY.errorMessages).toEqual(['Error: Request body too large, max allowed is 5000 bytes']);
        });
    });

    test("Создание задания c несуществующим полем", {
        tag: "@api",
    }, async ({ api }) => {
        const RESPONSE = await api.challengeCreate.postCreateUnrecognized(token);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 400, текст ошибки корректный ", async () => {
            await expect(RESPONSE.status()).toBe(400);
            await expect(BODY.errorMessages).toEqual(['Could not find field: UnrecognizedField']);
        });
    });

    test("Создание задания через метод PUT", {
        tag: "@api",
    }, async ({ api }) => {
        const RESPONSE = await api.challengeCreate.putCreate(token, 0);
        const BODY = await RESPONSE.json();

        await test.step("Статус-код 400, текст ошибки корректный ", async () => {
            await expect(RESPONSE.status()).toBe(400);
            await expect(BODY.errorMessages).toEqual(['Cannot create todo with PUT due to Auto fields id']);
        });
    });
});
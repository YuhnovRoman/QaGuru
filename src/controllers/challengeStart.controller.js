import { test } from "../../src/fixtures/fixture";

export class ChallengeStartPage {
    constructor(request) {
        this.request = request;
    };

    async post() {
        return test.step("Получение токена", async () => {
            const RESPONSE = await this.request.post("/challenger",);
            const HEADERS = RESPONSE.headers();
            const TOKEN = HEADERS["x-challenger"];
            return TOKEN;
        });
    };

    async get(token) {
        return test.step("Получение списка челленджей", async () => {
            const RESPONSE = await this.request.get("/challenges", {
                headers: {
                    "X-Challenger": token,
                }
            });
            return RESPONSE;
        });
    };
};
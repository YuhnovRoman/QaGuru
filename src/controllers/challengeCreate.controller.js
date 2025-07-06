import { test } from "../../src/fixtures/fixture";

export class ChallengeCreatePage {
    constructor(request) {
        this.request = request;
    };

    async postCreate(token, title, description, status) {
        return test.step("Создание задания", async () => {
            const RESPONSE = await this.request.post("/todos", {
                headers: {
                    "X-Challenger": token,
                },
                data: {
                    title: `${title}`,
                    doneStatus: status,
                    description: `${description}`,
                }
            });
            return RESPONSE;
        });
    };

    async postCreateUnrecognized(token) {
        return test.step("Создание задания c невалидным полем", async () => {
            const RESPONSE = await this.request.post("/todos", {
                headers: {
                    "X-Challenger": token,
                },
                data: {
                    title: "qwerty",
                    doneStatus: true,
                    description: "qwerty",
                    UnrecognizedField: "123"
                }
            });
            return RESPONSE;
        });
    };

    async putCreate(token, id) {
        return test.step("Создание задания через PUT", async () => {
            const RESPONSE = await this.request.put(`/todos/${id}`, {
                headers: {
                    "X-Challenger": token,
                },
                data: {
                    title: "qwerty",
                    doneStatus: true,
                    description: "qwerty",
                }
            });
            return RESPONSE;
        });
    };
};
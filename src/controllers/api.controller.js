import { ChallengeStartPage, ChallengeCreatePage } from "./index";

export class ApiPage {
    constructor(request) {
        this.request = request;
        this.challengeStart = new ChallengeStartPage(request);
        this.challengeCreate = new ChallengeCreatePage(request);
    };
};
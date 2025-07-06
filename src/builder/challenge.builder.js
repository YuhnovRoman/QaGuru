import { faker } from '@faker-js/faker'

export class TodoBuilder {
    generateTitle(length) {
        this.title = faker.string.fromCharacters("qwertyuiopasdfghj", length);
        return this;
    };

    generateDescription(length) {
        this.description = faker.string.fromCharacters("qwertyuiopasdfghj", length);
        return this;
    };
    generate() {
        return {
            title: this.title,
            description: this.description,
        }
    };
};
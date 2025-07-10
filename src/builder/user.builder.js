import { faker } from '@faker-js/faker'

export class UserBuilder {
    addEmail() {
        this.email = faker.internet.email()
        return this
    }
    addPassword() {
        this.password = faker.internet.password()
        return this
    }
    generate() {
        return {
            email: this.email,
            password: this.password,   
        }
    };
};
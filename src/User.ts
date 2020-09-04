import * as faker from "faker";

export class User {
    name: string;

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    location: { lat: number; lng: number; };
}




import * as faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    location: { lat: number; lng: number; };
    markerContent(): string {
        return `
            <div>
             <h1>Hello there, ${this.name}</h1>
            </div>
        `;
    };
}




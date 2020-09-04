import * as faker from "faker";
import { Mappable } from './CustomMap';

export class Comapny implements Mappable {
    comapnyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.comapnyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
             <h1>Welcome to, ${this.comapnyName}</h1>
             <h2>${this.catchPhrase}</h2>
            </div>
        `;
    };


}



import { Gender } from '../enums';
// import {v4 as uuidv4} from 'uuid';

function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class User {
  constructor(
    readonly birthdate?: Date,
    readonly countryCode?: string,
    readonly creationDateTime?: Date,
    readonly firstName?: string,
    readonly gender?: Gender,
    readonly geoPoint?: [number, number],
    readonly lastName?: string,
    readonly userId: string = generateUuid(),
    readonly username?: string
  ) {}

  public toObject(): object {
    return {
      birthdate: this.birthdate ?? null,
      countryCode: this.countryCode ?? null,
      creationDateTime: this.creationDateTime ?? null,
      firstName: this.firstName ?? null,
      gender: this.gender ?? null,
      geoPoint: this.geoPoint ?? null,
      lastName: this.lastName ?? null,
      userId: this.userId ?? null,
      username: this.username ?? null,
    };
  }
}

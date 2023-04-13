import {Gender} from '../enums';
// import {v4 as uuidv4} from 'uuid';

function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export class User {
  public readonly birthdate?: Date;
  public readonly countyCode?: string;
  public readonly creationDateTime?: Date;
  public readonly firstName?: string;
  public readonly gender?: Gender;
  public readonly geoPoint?: [number, number];
  public readonly lastName?: string;
  public readonly userId?: string;
  public readonly username?: string;

  public constructor(
    birthdate?: Date,
    countryCode?: string,
    creationDateTime?: Date,
    firstName?: string,
    gender?: Gender,
    geoPoint?: [number, number],
    lastName?: string,
    userId?: string,
    username?: string
  ) {
    this.birthdate = birthdate;
    this.countyCode = countryCode;
    this.creationDateTime = creationDateTime;
    this.firstName = firstName;
    this.gender = gender;
    this.geoPoint = geoPoint;
    this.lastName = lastName;
    this.userId = userId || generateUuid();
    this.username = username;
  }

  public toObject(): object {
    return {
      birthdate: this.birthdate ?? null,
      countyCode: this.countyCode ?? null,
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

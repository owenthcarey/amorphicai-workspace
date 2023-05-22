import { Gender } from '../enums';
import { generateUuid } from '@amorphicai-workspace/xplat/utils';

export class User {
  constructor(
    readonly birthDate?: Date,
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
      birthDate: this.birthDate ?? null,
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

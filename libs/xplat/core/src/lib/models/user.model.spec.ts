import { User } from './user.model';
import { Gender } from '../enums';

describe('User', () => {
  const uuidPattern =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
    expect(user.userId).toMatch(uuidPattern); // Checks if userId is generated correctly.
  });

  it('should correctly assign properties', () => {
    const userData = {
      birthDate: new Date(),
      countryCode: 'US',
      creationDateTime: new Date(),
      firstName: 'John',
      gender: Gender.Male,
      geoPoint: [0, 0] as [number, number],
      lastName: 'Doe',
      userId: '12345678-1234-5678-1234-567812345678',
      username: 'john.doe',
    };

    const user = new User(
      userData.birthDate,
      userData.countryCode,
      userData.creationDateTime,
      userData.firstName,
      userData.gender,
      userData.geoPoint,
      userData.lastName,
      userData.userId,
      userData.username
    );

    expect(user.birthDate).toEqual(userData.birthDate);
    expect(user.countryCode).toBe(userData.countryCode);
    expect(user.creationDateTime).toEqual(userData.creationDateTime);
    expect(user.firstName).toBe(userData.firstName);
    expect(user.gender).toBe(userData.gender);
    expect(user.geoPoint).toEqual(userData.geoPoint);
    expect(user.lastName).toBe(userData.lastName);
    expect(user.userId).toBe(userData.userId);
    expect(user.username).toBe(userData.username);
  });

  it('should correctly transform to object', () => {
    const userData = {
      birthDate: new Date(),
      countryCode: 'US',
      creationDateTime: new Date(),
      firstName: 'John',
      gender: Gender.Male,
      geoPoint: [0, 0] as [number, number],
      lastName: 'Doe',
      userId: '12345678-1234-5678-1234-567812345678',
      username: 'john.doe',
    };

    const user = new User(
      userData.birthDate,
      userData.countryCode,
      userData.creationDateTime,
      userData.firstName,
      userData.gender,
      userData.geoPoint,
      userData.lastName,
      userData.userId,
      userData.username
    );

    const userObject = user.toObject();

    expect(userObject).toEqual({
      birthDate: userData.birthDate,
      countryCode: userData.countryCode,
      creationDateTime: userData.creationDateTime,
      firstName: userData.firstName,
      gender: userData.gender,
      geoPoint: userData.geoPoint,
      lastName: userData.lastName,
      userId: userData.userId,
      username: userData.username,
    });
  });
});

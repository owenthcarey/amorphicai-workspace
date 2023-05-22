import { Gender } from '../enums';

export class Profile {
  constructor(
    readonly userId: string,
    readonly bio?: string,
    readonly preferences?: {
      ageRange: [number, number];
      gender: Gender[];
    },
    readonly photos?: string[],
    readonly occupation?: string,
    readonly interests?: string[]
  ) {}
}

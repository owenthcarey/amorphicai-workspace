export abstract class AuthBaseService {
  abstract getCurrentUserId(): Promise<string | null>;
}

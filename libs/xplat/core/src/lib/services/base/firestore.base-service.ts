import { Observable } from 'rxjs';
import { Match, Message, Profile, Swipe, User } from '../../models';

export abstract class FirestoreBaseService {
  readonly matchesCollectionPath = 'matches';
  readonly messagesCollectionPath = 'messages';
  readonly profilesCollectionPath = 'profiles';
  readonly swipesCollectionPath = 'swipes';
  readonly usersCollectionPath = 'users';
  readonly usersConfidentialCollectionPath = 'usersConfidential';

  // abstract getDocument(path: string): Observable<any>;
  // abstract getRelatedDocuments(id: string, category: string): Observable<any[]>;
  abstract addNewUser(user: User): Promise<void>;
  abstract checkIfUserExists(userId: string): Promise<boolean>;
  abstract checkIfUsernameExists(username: string): Promise<boolean>;
  // abstract getUser(userId: string): Observable<User>;
  // abstract updateUser(userId: string, profile: User): Promise<void>;

  // Profile related methods
  // abstract addNewProfile(profile: Profile): Promise<void>;
  // abstract getProfile(userId: string): Observable<Profile>;
  // abstract updateProfile(userId: string, profile: Profile): Promise<void>;

  // Match related methods
  abstract addNewMatch(match: Match): Promise<void>;
  abstract getUserMatches(userId: string): Observable<Match[]>;

  // Message related methods
  abstract addNewMessage(message: Message): Promise<void>;
  abstract getMessages(matchId: string): Observable<Message[]>;

  // Swipe related methods
  abstract addNewSwipe(swipe: Swipe): Promise<void>;
  abstract getUserSwipes(userId: string): Observable<Swipe[]>;
}

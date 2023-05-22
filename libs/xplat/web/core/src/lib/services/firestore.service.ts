import { Injectable } from '@angular/core';
import {
  FirestoreBaseService,
  Match,
  Message,
  Swipe,
  User,
} from '@amorphicai-workspace/xplat/core';
import { Observable } from 'rxjs';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService extends FirestoreBaseService {
  constructor(private readonly firestore: Firestore) {
    super();
  }

  // getDocument(path: string): Observable<any> {
  //   // Implement the logic to get the document from Firestore for the web platform
  // }
  //
  // getRelatedDocuments(id: string, category: string): Observable<any[]> {
  //   // Implement the logic to get related documents from Firestore for the web platform
  // }

  // /**
  //  * Get the top games based on their scores.
  //  * @returns An Observable of an array of Game objects.
  //  */
  // getTopGames(): Observable<Game[]> {
  //   const gamesCollection = collection(this.firestore, 'games');
  //   const gamesQuery = query(gamesCollection, orderBy('score'), limit(5));
  //   return collectionData(gamesQuery) as Observable<Game[]>;
  // }
  //
  // /**
  //  * Add a new game to Firestore.
  //  * @param game The Game object to be added.
  //  * @returns A Promise that resolves with the new document reference.
  //  */
  // async addNewGame(game: Game): Promise<void> {
  //   const gamesCollection = collection(this.firestore, 'games');
  //   const gameDocument = doc(gamesCollection, game.gameId ?? '');
  //   await setDoc(gameDocument, game.toObject());
  // }

  // ----------------------------------------
  // endregion
  // region Match
  // ----------------------------------------

  async addNewMatch(match: Match): Promise<void> {
    const matchesCollection = collection(
      this.firestore,
      this.matchesCollectionPath
    );
    const matchDocument = doc(matchesCollection);
    await setDoc(matchDocument, match);
  }

  getUserMatches(userId: string): Observable<Match[]> {
    const matchesCollection = collection(
      this.firestore,
      this.matchesCollectionPath
    );
    const matchesQuery = query(
      matchesCollection,
      where('userId1', '==', userId),
      where('userId2', '==', userId)
    );
    return collectionData(matchesQuery) as Observable<Match[]>;
  }

  // ----------------------------------------
  // endregion
  // region Message
  // ----------------------------------------

  async addNewMessage(message: Message): Promise<void> {
    const messagesCollection = collection(
      this.firestore,
      this.messagesCollectionPath
    );
    const messageDocument = doc(messagesCollection);
    await setDoc(messageDocument, message);
  }

  getMessages(matchId: string): Observable<Message[]> {
    const messagesCollection = collection(
      this.firestore,
      this.messagesCollectionPath
    );
    const messagesQuery = query(
      messagesCollection,
      where('matchId', '==', matchId)
    );
    return collectionData(messagesQuery) as Observable<Message[]>;
  }

  // ----------------------------------------
  // endregion
  // region Profile
  // ----------------------------------------

  // ----------------------------------------
  // endregion
  // region Swipe
  // ----------------------------------------

  async addNewSwipe(swipe: Swipe): Promise<void> {
    const swipesCollection = collection(
      this.firestore,
      this.swipesCollectionPath
    );
    const swipeDocument = doc(swipesCollection);
    await setDoc(swipeDocument, swipe);
  }

  getUserSwipes(userId: string): Observable<Swipe[]> {
    const swipesCollection = collection(
      this.firestore,
      this.swipesCollectionPath
    );
    const swipesQuery = query(
      swipesCollection,
      where('swiperId', '==', userId)
    );
    return collectionData(swipesQuery) as Observable<Swipe[]>;
  }

  // ----------------------------------------
  // endregion
  // region User
  // ----------------------------------------

  /**
   * Add a new game to Firestore.
   * @param user The User object to be added.
   * @returns A Promise that resolves with the new document reference.
   */
  async addNewUser(user: User): Promise<void> {
    const usersCollection = collection(
      this.firestore,
      this.usersCollectionPath
    );
    const userDocument = doc(usersCollection, user.userId ?? '');
    await setDoc(userDocument, user.toObject());
  }

  async checkIfUserExists(userId: string): Promise<boolean> {
    const userDocument = doc(this.firestore, this.usersCollectionPath, userId);
    const userSnapshot = await getDoc(userDocument);
    return userSnapshot.exists();
  }

  async checkIfUsernameExists(username: string): Promise<boolean> {
    const usersCollection = collection(
      this.firestore,
      this.usersCollectionPath
    );
    const usersQuery = query(
      usersCollection,
      where('username', '==', username)
    );
    const usersSnapshot = await getDocs(usersQuery);
    return !usersSnapshot.empty;
  }
}

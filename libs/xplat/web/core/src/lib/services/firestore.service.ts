import { Injectable } from '@angular/core';
import { FirestoreBaseService, User } from '@amorphicai-workspace/xplat/core';
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

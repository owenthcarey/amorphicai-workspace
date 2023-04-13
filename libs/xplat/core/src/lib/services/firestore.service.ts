import {
    collection,
    collectionData, doc,
    Firestore,
    limit,
    orderBy,
    query,
    setDoc
} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from "../models";

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  // private readonly firestore: Firestore;
  //
  // constructor(firestore: Firestore) {
  //   this.firestore = firestore;
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

  // /**
  //  * Add a new game to Firestore.
  //  * @param game The Game object to be added.
  //  * @returns A Promise that resolves with the new document reference.
  //  */
  // async addNewGame(game: Game): Promise<void> {
  //   const gamesCollection = collection(this.firestore, 'games');
  //   const gameDocument = doc(gamesCollection, game.gameId ?? "");
  //   await setDoc(gameDocument, game.toObject());
  // }

  /**
   * Add a new game to Firestore.
   * @param user The User object to be added.
   * @returns A Promise that resolves with the new document reference.
   */
  // async addNewUser(user: User): Promise<void> {
  //   const usersCollection = collection(this.firestore, 'users');
  //   const userDocument = doc(usersCollection, user.userId ?? "");
  //   await setDoc(userDocument, user.toObject());
  // }
}

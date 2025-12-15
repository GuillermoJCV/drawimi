import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { UserManagerImpl, UserType, UserId } from "./userImpl";
import { userConverter } from "./userConverter";

class UsersStore implements UserManagerImpl {
  constructor(protected db: Firestore) {
    this._db = db;
    this._usersRef = collection(db, this._collectionId).withConverter(
      userConverter,
    );
  }

  async createUser(user: UserType) {
    const db = this._db;
    const colId = this._collectionId;
    await setDoc(doc(db, colId), user);
  }

  async findUserById(id: UserId) {
    //TODO: Agregar caché
    const users_ref = this._usersRef;
    const userQuery = query(users_ref, where("userId", "==", id)).withConverter(
      userConverter,
    );

    const usersSnapshot = await getDocs(userQuery);

    if (usersSnapshot.empty) return null;
    return usersSnapshot.docs[0].data();
  }

  _collectionId = "users";
  _db: Firestore;
  _usersRef: CollectionReference<DocumentData, DocumentData>;
}

export default UsersStore;

import {
  CollectionReference,
  DocumentData,
  Firestore,
} from "firebase/firestore";

//I write this like that because the id might change over the time
type UserId = string;

interface UserManagerImpl {
  _collectionId: string;
  _db: Firestore;
  _usersRef: CollectionReference<DocumentData, DocumentData>;
  createUser: (user: UserType) => Promise<void>;
  findUserById: (id: UserId) => Promise<UserType | null>;
}

interface UserType {
  userId: UserId;
  email: string;
  isPremium: boolean;
  sharedUserEmails: string[];
  jwtTokenCloudflare: string;
}

export type { UserManagerImpl, UserId, UserType };

import {
  CollectionReference,
  DocumentData,
  Firestore,
} from "firebase/firestore";

//I write this like that because the id might change over the time
type UserId = string;
type DrawId = string;

interface UserManagerImpl {
  _collectionId: string;
  _db: Firestore;
  _usersRef: CollectionReference<DocumentData, DocumentData>;
  createUser: (user: UserType) => Promise<void>;
  findUserById: (id: UserId) => Promise<UserType | null>;
  findUserByEmail: (email: string) => Promise<UserType | null>;
}

type SharedUser = {
  sharedUserId: string;
  email: string;
  drawIds: DrawId;
};

interface UserType {
  userId: UserId;
  email: string;
  isPremium: boolean;
  sharedUsers: SharedUser[];
  jwtTokenCloudflare: string;
}

export type { UserManagerImpl, UserId, SharedUser, UserType };

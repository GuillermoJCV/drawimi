import { DocumentData, FirestoreDataConverter } from "firebase/firestore";
import { UserType } from "./userImpl";

class User implements UserType {
  constructor(
    userId: string,
    email: string,
    isPremium: boolean,
    sharedUserEmails: string[],
    jwtTokenCloudflare: string,
  ) {
    this.userId = userId;
    this.email = email;
    this.isPremium = isPremium;
    this.sharedUserEmails = sharedUserEmails;
    this.jwtTokenCloudflare = jwtTokenCloudflare;
  }

  userId: string;
  email: string;
  isPremium: boolean;
  sharedUserEmails: string[];
  jwtTokenCloudflare: string;
}

const userConverter: FirestoreDataConverter<User, DocumentData> = {
  toFirestore: (user) => {
    return {
      userId: user.userId,
      email: user.email,
      isPremium: user.isPremium,
      sharedUsersEmails: user.sharedUserEmails,
      jwtTokenCloudflare: user.jwtTokenCloudflare,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options) as User;
    return new User(
      data.userId,
      data.email,
      data.isPremium,
      data.sharedUserEmails,
      data.jwtTokenCloudflare,
    );
  },
};

export { User, userConverter };

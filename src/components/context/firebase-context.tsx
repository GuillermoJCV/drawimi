import { PropsWithChildren, createContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB42qRE98FUjcDVYczfANRhRwIEnuSawE",
  authDomain: "drawimi.firebaseapp.com",
  projectId: "drawimi",
  messagingSenderId: "366986843739",
  appId: "1:366986843739:web:08089223549fd4dd6d517e",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
if (process.env.VITEST) connectAuthEmulator(auth, "http://127.0.0.1:9099");

type FirebaseContextValues = {
  app: FirebaseApp;
  auth: Auth;
};

const defaultValues: FirebaseContextValues = {
  app,
  auth,
};

const FirebaseContext = createContext<FirebaseContextValues>(defaultValues);

function FirebaseProvider({ children }: PropsWithChildren) {
  return <FirebaseContext value={defaultValues}>{children}</FirebaseContext>;
}

export default FirebaseProvider;
export { FirebaseContext };

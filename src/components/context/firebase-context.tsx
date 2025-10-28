import { PropsWithChildren, createContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCB42qRE98FUjcDVYczfANRhRwIEnuSawE",
  authDomain: "drawimi.firebaseapp.com",
  projectId: "drawimi",
  storageBucket: "drawimi.firebasestorage.app",
  messagingSenderId: "366986843739",
  appId: "1:366986843739:web:08089223549fd4dd6d517e",
};
const app = initializeApp(firebaseConfig);

const FirebaseContext = createContext<FirebaseApp | null>(null);

function FirebaseProvider({ children }: PropsWithChildren) {
  return <FirebaseContext value={app}>{children}</FirebaseContext>;
}

export default FirebaseProvider;

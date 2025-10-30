import { useContext, useCallback } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseContext } from "@/components/context/firebase-context";
import userUserStore from "@/stores/user-store";

const handleAuthError = (err: any) => {
  //TODO: Handle the error properly
  console.log(err);
};

function useCreateUserPass() {
  const setUser = userUserStore((state) => state.setUser);
  const firebaseApp = useContext(FirebaseContext);

  const useAuth = useCallback(
    (username: string, password: string) => {
      if (!firebaseApp) return;
      const auth = getAuth(firebaseApp);

      createUserWithEmailAndPassword(auth, username, password)
        .then((credentials) => {
          setUser(credentials.user);
        })
        .catch(handleAuthError);
    },
    [firebaseApp],
  );

  return useAuth;
}

function useSignInEmailPass() {
  const setUser = userUserStore((state) => state.setUser);
  const firebaseApp = useContext(FirebaseContext);

  const useAuth = useCallback(
    (username: string, password: string) => {
      if (!firebaseApp) return;
      const auth = getAuth(firebaseApp);

      signInWithEmailAndPassword(auth, username, password)
        .then((credentials) => {
          setUser(credentials.user);
        })
        .catch(handleAuthError);
    },
    [firebaseApp],
  );

  return useAuth;
}

export { useCreateUserPass, useSignInEmailPass };

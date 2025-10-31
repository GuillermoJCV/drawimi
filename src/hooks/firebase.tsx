import { useContext, useCallback } from "react";
import {
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
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback((username: string, password: string) => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);
  }, []);

  return useAuth;
}

function useSignInEmailPass() {
  const setUser = userUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback((username: string, password: string) => {
    signInWithEmailAndPassword(auth, username, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);
  }, []);

  return useAuth;
}

export { useCreateUserPass, useSignInEmailPass };

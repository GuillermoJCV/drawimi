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

function useCreateEmailPass() {
  const setUser = userUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback((email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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

  const useAuth = useCallback((email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);
  }, []);

  return useAuth;
}

export { useCreateEmailPass, useSignInEmailPass };

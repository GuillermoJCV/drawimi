import { useContext, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseContext } from "@/components/context/firebase-context";
import userUserStore from "@/stores/user-store";
import { toaster } from "@/components/chakra-ui/toaster";

const handleAuthError = (err: any) => console.log(err);

function useCreateEmailPass() {
  const setUser = userUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback(async (email: string, password: string) => {
    const promise = createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, {
      success: {
        title: "Successfully signed!",
        description: "Welcome to Drawimi",
      },
      error: {
        title: "Failed siging in",
        description: "Try again later",
      },
      loading: { title: "Signing...", description: "Please wait" },
    });
  }, []);

  return useAuth;
}

function useSignInEmailPass() {
  const setUser = userUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback(async (email: string, password: string) => {
    const promise = signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, {
      success: {
        title: "Successfully signed!",
        description: "Welcome to Drawimi",
      },
      error: {
        title: "Failed siging in",
        description: "Try again later",
      },
      loading: { title: "Signing...", description: "Please wait" },
    });
  }, []);

  return useAuth;
}

export { useCreateEmailPass, useSignInEmailPass };

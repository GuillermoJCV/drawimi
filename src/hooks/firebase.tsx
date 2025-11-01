import { useContext, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseContext } from "@/components/context/firebase-context";
import useUserStore from "@/stores/user-store";
import { toaster } from "@/components/chakra-ui/toaster";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth/web-extension";

function useFacebookProvider() {
  const setUser = useUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);
  const provider = new FacebookAuthProvider();

  const useAuth = useCallback(async () => {
    const promise = signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, toasterConfig);
  }, []);

  return useAuth;
}

function useTwitterProvider() {
  const setUser = useUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);
  const provider = new TwitterAuthProvider();

  const useAuth = useCallback(async () => {
    const promise = signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, toasterConfig);
  }, []);

  return useAuth;
}

function useGoogleProvider() {
  const setUser = useUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const useAuth = useCallback(async () => {
    const promise = signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, toasterConfig);
  }, []);

  return useAuth;
}

function useCreateEmailPass() {
  const setUser = useUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback(async (email: string, password: string) => {
    const promise = createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, toasterConfig);
  }, []);

  return useAuth;
}

function useSignInEmailPass() {
  const setUser = useUserStore((state) => state.setUser);
  const { auth } = useContext(FirebaseContext);

  const useAuth = useCallback(async (email: string, password: string) => {
    const promise = signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch(handleAuthError);

    toaster.promise(promise, toasterConfig);
  }, []);

  return useAuth;
}

export {
  useCreateEmailPass,
  useSignInEmailPass,
  useGoogleProvider,
  useFacebookProvider,
  useTwitterProvider,
};

const handleAuthError = (err: any) => console.log(err);

const toasterConfig = {
  success: {
    title: "Successfully signed!",
    description: "Welcome to Drawimi",
  },
  error: {
    title: "Failed siging in",
    description: "Try again later",
  },
  loading: { title: "Signing...", description: "Please wait" },
};

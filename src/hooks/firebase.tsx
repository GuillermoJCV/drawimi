import { useContext, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { FirebaseContext } from "@/components/context/firebase-context";
import useUserStore from "@/stores/user-store";
import { Provider } from "@/constants/utils/auth-providers";
import { useToasterUpdate } from "./toaster";
import { ToasterStatus } from "@/constants/toaster/status";

function useProvider(providerType: Provider) {
  const toasterUpdate = useToasterUpdate("login-error-toast");
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const { auth } = useContext(FirebaseContext);
  let provider;
  if (providerType === "google") {
    provider = new GoogleAuthProvider();
  } else if (providerType === "facebook") {
    provider = new FacebookAuthProvider();
  } /*twitter*/ else {
    provider = new TwitterAuthProvider();
  }

  return useCallback(async () => {
    toasterUpdate({
      title: "Signing in...",
      description: "Please wait",
      type: ToasterStatus.LOADING,
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .then(() => {
        if (user)
          toasterUpdate({
            title: "Welcome to Drawimi!!!",
            description: "Enjoy the app",
            type: ToasterStatus.SUCCESS,
            duration: 3000,
          });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        toasterUpdate({
          title: "Something went wrong",
          description: "Please try again",
          type: ToasterStatus.ERROR,
          duration: 3000,
        });
      });
  }, []);
}

function useCreateEmailPass() {
  const toasterUpdate = useToasterUpdate("signup-error-toast-email-password");
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const { auth } = useContext(FirebaseContext);

  const createUser = useCallback(async (email: string, password: string) => {
    toasterUpdate({
      title: "Signing in...",
      description: "Please wait",
      type: ToasterStatus.LOADING,
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .then(() => {
        if (user)
          toasterUpdate({
            title: "Welcome to Drawimi!!!",
            description: "Enjoy the app",
            type: ToasterStatus.SUCCESS,
            duration: 3000,
          });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        toasterUpdate({
          title: "Something went wrong",
          description: "Please try again",
          type: ToasterStatus.ERROR,
          duration: 3000,
        });
      });
  }, []);

  return createUser;
}

function useSignInEmailPass() {
  const toasterUpdate = useToasterUpdate("signin-error-toast-email-password");
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const { auth } = useContext(FirebaseContext);

  return useCallback(async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .then(() => {
        if (user)
          toasterUpdate({
            title: "Welcome to Drawimi!!!",
            description: "Enjoy the app",
            type: ToasterStatus.SUCCESS,
            duration: 3000,
          });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        toasterUpdate({
          title: "Something went wrong",
          description: "Please try again",
          type: ToasterStatus.ERROR,
          duration: 3000,
        });
      });
  }, []);
}

export { useCreateEmailPass, useSignInEmailPass, useProvider };

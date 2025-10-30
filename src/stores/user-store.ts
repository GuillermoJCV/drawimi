import { create } from "zustand";
import { type User } from "firebase/auth";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

const userUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user,
    })),
}));

export default userUserStore;

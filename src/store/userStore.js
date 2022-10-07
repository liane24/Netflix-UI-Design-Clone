import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { auth } from "../firebase/FirebaseConfig";

const store = (set, get) => ({
  user: null,
  emailAddress: null,
  setCurrentEmailAddress: (emailAddress) => {
    set({ emailAddress: emailAddress });
  },
  login: async (username, password) => {
    const data = await signInWithEmailAndPassword(auth, username, password);
    set({ user: data.user });
    set({ emailAddress: get().user.emailAddress });
  },
  logOut: async () => {
    await signOut(auth);
    set({ user: null });
  },
  signup: async (username, password) => {
    const data = await createUserWithEmailAndPassword(auth, username, password);
    // console.log(data.length);
    console.log(data.user);
    set({ user: data.user });
    set({ emailAddress: get().user.emailAddress });
    // console.log(get().user.email); // this will print
  },
});

const userStore = create(devtools(persist(store)));

export default userStore;
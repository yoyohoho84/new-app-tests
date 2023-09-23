import { Dispatch, SetStateAction, createContext } from "react";
import { Firestore } from "firebase/firestore";



const FirebaseContext = createContext({
  db: {},
  isAdmin: false,
  setIsAdmin: () => {},
});

export { FirebaseContext };

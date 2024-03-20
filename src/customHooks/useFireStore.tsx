import { useContext, createContext, ReactNode } from "react";
import { getFirestore, Firestore } from "firebase/firestore/lite";
import app from "../../firebase.config";

type FirestoreContextType = {
  db: Firestore;
};

const FirestoreContext = createContext<FirestoreContextType | undefined>(
  undefined,
);

export const useFirestore = (): Firestore => {
  const context = useContext(FirestoreContext);
  if (!context) {
    throw new Error(
      "useFirestore muss innerhalb eines FirestoreProvider verwendet werden",
    );
  }
  return context.db;
};

type FirestoreProviderProps = {
  children: ReactNode;
};

export const FirestoreProvider = ({ children }: FirestoreProviderProps) => {
  const db = getFirestore(app);

  return (
    <FirestoreContext.Provider value={{ db }}>
      {children}
    </FirestoreContext.Provider>
  );
};

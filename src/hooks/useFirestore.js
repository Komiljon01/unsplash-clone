// Firebase
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Toast
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (collectionName, id, data) => {
    setDoc(doc(db, collectionName, id), data)
      .then(() => {
        toast.success("Image added successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const deleteDocument = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("Image has been removed");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return { addDocument, deleteDocument };
};

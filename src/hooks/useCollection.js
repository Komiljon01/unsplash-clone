// Firebase
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// React
import { useEffect, useState } from "react";

export const useCollection = (collectionName, whereData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (whereData[2]) {
      const q = query(collection(db, collectionName), where(...whereData));
      onSnapshot(q, (querySnapshot) => {
        const queryData = [];
        querySnapshot.forEach((doc) => {
          queryData.push({ _id: doc.id, ...doc.data() });
        });
        setData(queryData);
      });
    }
  }, [whereData[2]]);

  return { data };
};

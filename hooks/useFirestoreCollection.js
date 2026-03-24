"use client";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../app/utils/firebase";

export function useFirestoreCollection(collectionName, userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setData([]);
      setLoading(false);
      return;
    }
    const usersRef = collection(db, "Users");
    const userQuery = query(usersRef, where("userId", "==", userId));
    const unsubscribeUser = onSnapshot(
      userQuery,
      (userSnapshot) => {
        if (userSnapshot.empty) {
          setData([]);
          setLoading(false);
          return;
        }
        const userDoc = userSnapshot.docs[0];
        // Step 2: Reference the items subcollection
        const itemsRef = collection(db, "Users", userDoc.id, "items");

        const unsubscribeItems = onSnapshot(
          itemsRef,
          (onSnapshot) => {
            const items = onSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setData(items);
            setLoading(false);
            setError(null);
          },
          (error) => {
            console.log("Error fetching data:", error);
            setError(error);
            setLoading(false);
          },
        );

        return () => unsubscribeItems();
      },
      (error) => {
        console.log("Error fetching user document:", error);
        setError(error);
        setLoading(false);
      },
    );
    return () => unsubscribeUser();
  }, [userId]);

  return { data, loading, error };
}

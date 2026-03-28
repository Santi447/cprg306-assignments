"use client";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../app/utils/firebase";

export function useFirestoreCollection(collectionName = "items", userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setData([]);
      setLoading(false);
      return;
    }
    const itemsRef = collection(db, "Users", userId, collectionName);

    const unsubscribe = onSnapshot(
      itemsRef,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
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
      }
    );

    return () => unsubscribe();
  }, [userId, collectionName]);

  return { data, loading, error };
}

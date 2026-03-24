
import { use } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query,where } from "firebase/firestore";


async function getUserRefDoc(userId){
    try{
        const userCollection = collection(db, "Users");
        console.log("Querying for userId:", userId);
        const queryCollection = query(userCollection, where("userId", "==", userId)); 
        const userIdquerySnapshot = await getDocs(queryCollection);
        console.log("Query result empty?", userIdquerySnapshot.empty);
        console.log("Docs:", userIdquerySnapshot.docs.map(doc => doc.data()));
        console.log(typeof userId);
        return userIdquerySnapshot;
    }
    catch(error){
        console.log("Error in getUserRefDoc:", error.message);
        return null;
    }
}
export async function getItems(userId){
    try{
      const userIdquerySnapshot = await getUserRefDoc(userId);
        if (!userIdquerySnapshot || userIdquerySnapshot.empty) {
          console.log("No user found with userId:",userId);
          return [];
        }
      const userDoc = userIdquerySnapshot.docs[0];
      const itemsRef = collection(db,"Users",userDoc.id, "items");
      const itemsSnapshot = await getDocs(itemsRef);
      const items = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return items;
    }
    catch(error){
        console.log("getItems error message: "+error.message);
        return [];
    }
}
export async function addItem(userId, Item){
    try{
        const userIdquerySnapshot = await getUserRefDoc(userId);
        const userDoc = userIdquerySnapshot.docs[0];
        const itemsRef = collection(db,"Users",userDoc.id, "items");
        const item = await addDoc(itemsRef, Item);
        return item.id;
    }
    catch(error){
        console.log("Error in addItem:", error.message);
        return null;
    }
}

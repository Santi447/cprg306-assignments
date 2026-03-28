import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query,where, doc, deleteDoc,setDoc } from "firebase/firestore";


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
        return item.id
    }
    catch(error){
        console.log("Error in addItem:", error.message);
        return null;
    }
}
export  async function deleteItem(userId, item) {
  try {
    const userSnapshot = await getUserRefDoc(userId);

    if (!userSnapshot || userSnapshot.empty) {
      console.log("No user found with userId:", userId);
      return false;
    }

    const userDoc = userSnapshot.docs[0];
    const itemRef = doc(db, "Users", userDoc.id, "items", item.id.trim());

    await deleteDoc(itemRef);
    return true;
  } catch (error) {
    console.log("error in the delete function", error.message);
    return false;
  }
}


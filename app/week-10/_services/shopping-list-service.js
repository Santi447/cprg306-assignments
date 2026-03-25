import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query,where, doc, deleteDoc,setDoc } from "firebase/firestore";


        const queryCollection = query(userCollection, where("userId", "==", userId)); 
async function getUserRefDoc(userId) {
  try {
    const userCollection = collection(db, "Users");
    console.log("Querying for userId:", userId);
    const queryCollection = query(
      userCollection,
      where("userId", "==", userId),
    );
    const userIdquerySnapshot = await getDocs(queryCollection);

    if (userIdquerySnapshot.empty) {
      // Create a new user document with userId
      const newUserDocRef = doc(userCollection); // auto-generate doc id
      await setDoc(newUserDocRef, { userId });
      // Return a new snapshot with the created doc
      return await getDocs(
        query(userCollection, where("userId", "==", userId)),
      );
    }
    return userIdquerySnapshot;
  } catch (error) {
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


import { useState } from "react";
import { deleteItem } from "../week-10/_services/shopping-list-service";
export default function DeleteButton({userId, item}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
        const [success, setsuccess] = useState(false);    
    async function handleDelete(){
        try{
            setLoading(true);
            await deleteItem(userId, item);
            setError(null);
            setsuccess(true);
            
        }
        catch(error){
            console.log("Error deleting item from deleteButton component:", error.message);
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }
    return(
    <div>
    {error && <div className="text-white"> {error.message}</div>}
    {success && loading && <div className="text-white"> Item deleted successfully</div>}
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
    >
      {loading ? "Deleting..." : "Delete"}

    </button>
    </div>
    )
} 
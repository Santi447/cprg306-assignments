import { useState } from "react";
import { useUserAuth } from "../context/AuthContext";
import { useRouter} from "next/navigation";
export default function LogoutButton(url) {
  const router = useRouter();
  const { user, firebaseSignOut } = useUserAuth();
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleLogout() {
    setLoading(true);
    try {
      await firebaseSignOut();
      setsuccess(false);
      setLoading(false);
      router.push(url ? url : "");
    } catch (error) {
      setError(error);
      setsuccess(false);
      setLoading(false);
    }
  }
  return (
    <div>
    {error && <div className="text-white"> {error.message}</div>}
    {success && <div className="text-white"> Signed in successfully</div>}
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
    >
      {loading ? "Logging out..." : "Logout"}

    </button>
    </div>
  );
}

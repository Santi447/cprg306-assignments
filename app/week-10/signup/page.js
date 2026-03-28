import SignUpForm from "@/app/components/SignUpForm";
import { useUserAuth } from "../../context/AuthContext";
export default function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <SignUpForm url="/week-10/signup" loginUrl="/week-10/login" />
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <h1 className="text-3xl text-white">You are already logged in.</h1>
        <p>please log out to access this page.</p>
        <Link className="text-white" href="/week-10/shopping-list">
          Go back to shopping list to log out
        </Link>
      </div>
    );
  }
}

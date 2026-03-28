"use client";
import LoginForm from "../../components/LoginForm";
import { useUserAuth } from "../../context/AuthContext";
import Link from "next/link";
export default function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <LoginForm url="/week-10/shopping-list" signupUrl="/week-10/signup" />
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <p className="text-white">You are already logged in.</p>
        <p className="text-white">please log out to access this page.</p>
        <Link className="text-blue-800" href="/week-10/shopping-list">
          Go back to shopping list to log out
        </Link>
      </div>
    );
  }
}

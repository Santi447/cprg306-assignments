"use client";
import  Link  from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import LogoutButton from "../components/LogoutButton";
import {useRouter} from "next/navigation";
export default function Page(){
const { user} = useUserAuth();
const router = useRouter();


// Sign out of Firebase
if (!user){
router.push("/week-9/login");
}
else{
return (
  <main>
    <header>
      <h1 className="text-white">Welcome to Week 9</h1>
    </header>
    <section>
    <p className="text-white">
      Welcome, {user.displayName} ({user.email})
    </p>
    <LogoutButton />
    <Link href="/week-9/shopping-list" className="text-blue-600 hover:text-blue-300">
      Go to Shopping List
    </Link>
    </section>
  </main>
);
}
}
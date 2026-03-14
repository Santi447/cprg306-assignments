"use client";
import  Link  from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";
import {useRouter} from "next/navigation";
import LoginForm from "../components/LoginForm";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
// await gitHubSignIn();
 
// Sign out of Firebase
// await firebaseSignOut();
 
// Display some of the user's information
export default function Page(){
const router = useRouter();
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
const [success, setsuccess] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
async function handleLogin() {
  setLoading(true);
  setsuccess(false);
  try{
       await gitHubSignIn();
       setsuccess(true);
      //  router.push("/week-9/shopping-list");

  }
  catch(error){
      setError(error);
      setsuccess(false);
      
  }
  finally{
    setLoading(false);
  }
}
 
// Sign out of Firebase
async function handleLogout() {
  setLoading(true);
  try{
  await firebaseSignOut();
  setsuccess(false);
  setLoading(false );

  }
  catch(error){
  setError(error);
  setsuccess(false);
  setLoading(false);
  }
}
if (!user){
  return(
    <div>
    <p className="text-white">
      not logged in yet
    </p>
    {error && <div className="text-white"> {error.message}</div>}
    {success && <div className="text-white"> Signed in successfully</div>}
    <button disabled={loading} onClick={handleLogin} className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
      {loading ? "Signing in..." : "Github"}
    </button>
    <section>
      <LoginForm />
    </section>
    </div>
  )
}
return (
  <main>
    <header>
      <h1 className="text-white">Welcome to Week 9</h1>
    </header>
    <section>
    <p className="text-white">
      Welcome, {user.displayName} ({user.email})
    </p>
    <button onClick={handleLogout} className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md">
      Logout
    </button>
    <Link href="/week-9/shopping-list" className="text-blue-600 hover:text-blue-300">
      Go to Shopping List
    </Link>
    </section>
  </main>
);

}
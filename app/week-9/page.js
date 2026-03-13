"use client";
import  Link  from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "../context/AuthContext";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
// await gitHubSignIn();
 
// Sign out of Firebase
// await firebaseSignOut();
 
// Display some of the user's information
export default function Page(){
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
async function handleLogin() {
  try{
       const response = await gitHubSignIn();

  }
  catch(error){

  }
}
 
// Sign out of Firebase
async function handleLogout() {
  try{
  const response = await firebaseSignOut();
  }
  catch(error){

  }
}
if (!user){
  return(
    <div>
    <p className="text-white">
      not logged in yet
    </p>
    <button onClick={handleLogin} className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
      Login with GitHub
    </button>
    </div>
  )
}
return (
  <main>
    <header>
      <h1 className="text-white">Welcome to Week 9</h1>
    </header>
    <section>
    <p>
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
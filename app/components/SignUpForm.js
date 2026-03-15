"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignUpForm(){
  const router = useRouter();
  const { user, signUpWithEmailAndPassword} = useUserAuth();
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleSignUp(event){
    try{
    setLoading(true);
    setsuccess(false);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signUpWithEmailAndPassword(email, password);
    setsuccess(true);
    }
    catch(error){
        console.log(error.message);
        setError(error);
        setsuccess(false);

    }
    finally{
        setLoading(false);
    }
  }
    return(
   <Card className="w-full max-w-sm text-white">
      <CardHeader>
        <CardTitle>Sign up for an account</CardTitle>
        <CardDescription>
          Enter a email and a password to create your account
        </CardDescription>
        <CardAction>
          <button className="text-white" type="button" onClick={() =>router.push("../week-9/login")}>Login</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form id="signup-form" onSubmit={handleSignUp}>
          <div className="flex flex-col gap-6">
          <div className="grid gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input 
          name="email" 
          type="email" 
          id="email"
          placeholder="Enter Email"
          className="text-white"
          required
           />
          </div>
          <div className="grid gap-2">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input 
          name="password" 
          type="password" 
          id="password"
          placeholder="Enter Password"
          className="text-white"
          required
           />
          </div>        
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <button form="signup-form" type="submit" className="bg-white text-black w-full border rounded-md hover:bg-gray-500">{loading ? "signing up..." : "Sign up"}</button>
        {error && <div className="text-white"> {error.message}</div>}
        {success && <div className="text-white"> Signed up successfully</div>}
      </CardFooter>
    </Card>
    )
}
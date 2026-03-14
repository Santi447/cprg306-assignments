"use client";
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {useRouter} from "next/navigation";

export default function LoginForm(){
  const router = useRouter();
  const { user, gitHubSignIn,} = useUserAuth();
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleLogin() {
  setLoading(true);
  setsuccess(false);
  try{
       await gitHubSignIn();
       setsuccess(true);
       router.push("/week-9/shopping-list");

  }
  catch(error){
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
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <button className="text-white" type="button" onClick={() =>router.push("../week-9/signup")}>Sign up</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
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
        <button className="bg-white text-black w-full border rounded-md">Login</button>
        {error && <div className="text-white"> {error.message}</div>}
        {success && <div className="text-white"> Signed in successfully</div>}
        <button disabled={loading} onClick={handleLogin} className="text-white w-full border rounded-md">{loading? "Logging in..." : "Login with Github"} </button>
      </CardFooter>
    </Card>
  );
}
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
  return(
    <Card className="w-full max-w-sm text-white">
      <CardHeader>
        <CardTitle>Login</CardTitle>
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
        <button className="text-white w-full border rounded-md">Login with Github</button>
      </CardFooter>
    </Card>
    // <form>
    //   <label htmlFor="username">
    //     Username
    //   </label>
    //   <input type="text"></input>
    // </form>
  );
}
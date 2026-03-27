import LoginForm from "../../components/LoginForm";
export default function Page(){
    return(

    <div className="flex items-center justify-center min-h-screen bg-slate-950">
    <LoginForm url="/week-10/shopping-list" signupUrl="/week-10/signup"/>
    </div>
    );

}
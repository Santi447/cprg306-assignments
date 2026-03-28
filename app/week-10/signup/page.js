"use client";
import SignUpForm from "@/app/components/SignUpForm";

export default function Page() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <SignUpForm url="/week-10/signup" loginUrl="/week-10/login" />
      </div>
    );
}

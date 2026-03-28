"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../app/context/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/week-10/login");
    }
  }, [router, user]);
  return null;
}

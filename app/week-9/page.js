import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/week-9/login");
  }, [router]);
  return null;
}

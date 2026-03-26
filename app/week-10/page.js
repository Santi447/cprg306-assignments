import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/week-10/login");
  }, [router]);
  return null;
}

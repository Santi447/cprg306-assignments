import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
  <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <ul className="my-2 mx-6">
      <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
        <p>
        <Link href="week-2"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear">
        Go to Week 2
        </Link>
        </p>
      </li>
    </ul>
  </main>
  );
}
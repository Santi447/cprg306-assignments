import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-white">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="my-2 mx-6">
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-2"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 2
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-3"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 3
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-4"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 4
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-5"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 5
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-6"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 6
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-7"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 7
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="week-8"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 8
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="/week-9/login"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 9
            </Link>
          </p>
        </li>
        <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
          <p>
            <Link
              href="/week-10"
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              Go to Week 10
            </Link>
          </p>
        </li>
      </ul>
    </main>
  );
}

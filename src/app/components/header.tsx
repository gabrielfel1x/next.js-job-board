import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between p-4 px-6 mx-auto">
        <Link href={"/"} className="font-bold text-xl">
          Hire Hub
        </Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
          <Link className="bg-gray-200" href={"/login"}>
            login
          </Link>
          <Link className="bg-green-400 text-white" href={"/new-listing"}>
            post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

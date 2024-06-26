import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between mx-auto">
        <Link href={"/"} className="font-bold text-2xl">
          HireHub
        </Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md *:font-semibold">
          <Link className="bg-gray-200" href={"/login"}>
            SignIn
          </Link>
          <Link className="bg-green-400 text-white" href={"/new-listing"}>
            Post Job
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between py-4 mx-auto border-b">
        <Link href={"/"} className="font-bold text-2xl">
          HireHub
        </Link>
        <nav className="flex gap-2 *:rounded-md *:font-semibold items-center">
          <Link href={"http://github.com/gabrielfel1x"}>
            <Image src="github-mark.svg" alt="" width={34} height={34} />
          </Link>
          <Link className="bg-gray-200 py-2 px-4" href={"/login"}>
            SignIn
          </Link>
          <Link
            className="bg-green-400 text-white py-2 px-4"
            href={"/new-listing"}
          >
            Post Job
          </Link>
        </nav>
      </div>
    </header>
  );
}

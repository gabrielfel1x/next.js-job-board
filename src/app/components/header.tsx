import Link from "next/link";
import Image from "next/image";
import { getSignInUrl, signOut, getUser } from "@workos-inc/authkit-nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header>
      <div className="container flex flex-row items-center justify-between py-4 mx-auto border-b">
        <Link href={"/"} className="font-bold text-2xl">
          HireHub
        </Link>
        <Link
          href={"http://github.com/gabrielfel1x"}
          className="absolute top-6 left-2/4"
        >
          <Image src="github-mark.svg" alt="" width={34} height={34} />
        </Link>
        <nav className="flex gap-2 *:rounded-md *:font-semibold items-center">
          {!user && (
            <Link className="bg-gray-200 py-2 px-4" href={signInUrl}>
              Sign In
            </Link>
          )}
          {user && (
            <>
              <Link
                className="bg-green-400 text-white py-2 px-4"
                href={"/new-listing"}
              >
                Post Job
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="flex flex-row bg-transparent py-2 px-4 rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="size-6 text-gray-700"
                  />
                </button>
              </form>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

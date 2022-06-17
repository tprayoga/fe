import Head from "next/head";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khayangan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-between p-2 border-b-2">
          <div className="flex justify-center items-center">
            <Link href="/dashboard">
              <a>
                <img src="./logo.png" alt="logo" />
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <p className="mr-3 text-gray-600 cursor-pointer hover:text-black ">
              Contact
            </p>
            <p className=" text-gray-600 border-2 p-2 cursor-pointer rounded-md hover:text-black hover:border-black">
              Sign Up
            </p>
          </div>
        </div>

        <div className="flex h-[80vh] justify-center items-center">
          <div className=" text-center">
            <h1 className=" text-3xl font-bold">Log in to Khayangan</h1>
            <div className=" border-b-2 py-6">
              <h1 className="text-md font-medium mt-7 cursor-pointer bg-gray-800 p-3 rounded-md text-white hover:bg-gray-600">
                {" "}
                <BsGithub className=" inline-flex mr-2 mb-1 text-lg" />
                Continue with GitHub
              </h1>
            </div>
            <h1 className="text-md mt-5 text-sky-500 cursor-pointer hover:underline">
              Continue with Email →
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center border-t-2 p-12">
          <h1 className="text-md text-sky-500 cursor-pointer hover:underline">
            Don't have an account? Sign Up →
          </h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

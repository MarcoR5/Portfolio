import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="h-15 w-full flex space-x-5 justify-between pr-15 pl-15 pt-5 items-center">
          <h1 className="text-5xl font-bold">Marco Roodt</h1>
          <ul className="flex space-x-5 ">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>

        {/* hero image with text */}

        <div className="w-full h-full p-5 flex mt-25 mb-10  justify-center">
          <Image
            className="mr-15"
            src="./Graphic1.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-col justify-center space-y-3">
            <h2 className="text-4xl font-bold">Hi, I'm Marco.</h2>
            <br />
            <p className="font-bold">
              I'm front-end developer and graphic designer, based in South
              Africa. <br /> I am experienced in various front-end languages
              such as Javascript, <br />
              Typescript and front-end libraries like Nextjs.
            </p>
            <Image
              className="mt-5"
              src="./Graphic3.svg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* Footer */}
        <hr />
        <div className="pl-15 text-3xl font-bold h-50 w-full flex items-center justify-between pr-15">
          <h2>Let's Work Together</h2>
          <div className="flex flex-row space-x-2">
            <Image
              src="./linkedinGray.svg"
              width={48}
              height={48}
              alt="Picture of the author"
            />
            <Image
              src="./githubGray.svg"
              width={48}
              height={48}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}

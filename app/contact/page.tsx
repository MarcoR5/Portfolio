import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
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
      {/*Main hero image + text  */}
      {/* wrapper */}
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[60%] h-120 bg-black rounded-lg flex">
          {/* left */}
          <div className="w-[50%] h-full bg-main rounded-l-lg flex justify-center items-center">
            <Image
              src="./graphic4.svg"
              width={400}
              height={48}
              alt="Picture of the author"
            />
          </div>
          {/* right */}
          <div className="w-[50%] h-full text-white p-10 flex flex-col items-center font-bold ">
            <h1 className="text-3xl ">CONTACT ME</h1>
            <br />
            <p className="mt-20">E-Mail: marcoroodt76@gmail.com</p>
            <p className="mt-5">OR</p>
            {/* links group*/}
            <div className="flex mt-10">
              <Image
                src="./linkedin.svg"
                width={48}
                height={48}
                alt="Picture of the author"
              />
              <Image
                src="./github.svg"
                width={48}
                height={48}
                alt="Picture of the author"
              />
            </div>
          </div>
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
  );
}

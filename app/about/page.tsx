import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Header />

      {/* main hero image + text */}
      <div className="w-full flex flex-col   lg:flex-row justify-center items-center flex-grow">
        {/* left */}
        <div>
          <Image
            className="w-[250px] lg:w-[400px] h-auto mb-5 lg:mb-0"
            src="./graphic5.svg"
            width={400}
            height={48}
            alt="Picture of the author"
          />
        </div>
        {/* right */}
        <div className="flex  flex-col  pl-5 pr-5 lg:pl-0 lg:pr-0 items-center  lg:w-[35%] h-[60%]">
          <h2 className="font-bold text-3xl mb-10 ">ABOUT ME </h2>
          <br />
          <p className="text-center mb-5 lg:mb-0">
            Front-end developer and graphic designer specializing in JavaScript,
            TypeScript, and Next.js. I combine clean code with strong visual
            design using tools like Figma and Canva to create engaging,
            user-focused experiences.
          </p>

          {/* 4x sections */}
          <div className="flex flex-col items-center lg:flex-row mb-5 lg:mb-0 p-0 lg:p-10 space-y-5 lg:space-y-0 lg:space-x-10">
            <div className="w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5">
              <Image
                src="./checkmark.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="text-white">Fun and Engaging</p>
            </div>

            <div className="w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5">
              <Image
                src="./checkmark.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="text-white">Tasteful Designs</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row mb-5 lg:mb-0 p-0 lg:p-10 space-y-5 lg:space-y-0 lg:space-x-10">
            <div className="w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5">
              <Image
                src="./checkmark.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="text-white">Interactive</p>
            </div>
            <div className="w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5">
              <Image
                src="./checkmark.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="text-white">Fresh and New</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

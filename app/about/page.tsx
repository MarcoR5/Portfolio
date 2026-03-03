import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function About() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Header />

      {/* main hero image + text */}
      <div className="w-full h-full flex justify-center items-center">
        {/* left */}
        <div>
          <Image
            src="./graphic5.svg"
            width={400}
            height={48}
            alt="Picture of the author"
          />
        </div>
        {/* right */}
        <div className="flex flex-col items-center w-[35%]">
          <h2 className="font-bold text-3xl mb-10 ">ABOUT ME </h2>
          <br />
          <p className="text-center">
            Front-end developer and graphic designer specializing in JavaScript,
            TypeScript, and Next.js. I combine clean code with strong visual
            design using tools like Figma and Canva to create engaging,
            user-focused experiences.
          </p>

          {/* 4x sections */}
          <div className="flex p-10 space-x-10">
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
          <div className="flex p-10  space-x-10">
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

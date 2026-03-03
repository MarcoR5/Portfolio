import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        {/* Navbar */}
        <Header />

        {/* hero image with text */}

        <div className="w-full h-full p-5 flex mt-25 mb-10  justify-center items-center text-center flex-col md:flex-row  md:text-left">
          <Image
            className="md:mr-15"
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

        <Footer />
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function Contact() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      {/*Main hero image + text  */}
      {/* wrapper */}
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[60%] h-[85%] bg-black rounded-lg flex">
          {/* left */}
          <div className="w-[50%] h-full bg-main rounded-l-lg flex justify-center items-center">
            <Image
              className="h-full w-full"
              src="./graphic4.svg"
              width={0}
              height={0}
              alt="Picture of the author"
            />
          </div>
          {/* right */}
          <div className="w-[50%] h-full text-white p-10 flex flex-col items-center font-bold ">
            <h3 className="text-3xl ">CONTACT ME</h3>
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
      <Footer />
    </div>
  );
}

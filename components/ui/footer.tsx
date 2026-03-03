import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <hr />
      <div className="pl-15 text-3xl font-bold h-50 w-full flex items-center justify-between pr-15">
        <h2>Let's Work Together</h2>
        <div className="flex flex-row space-x-2">
          <Link href={"https://www.linkedin.com/in/marco-roodt-950963294/"}>
            <Image
              src="./linkedinGray.svg"
              width={48}
              height={48}
              alt="Picture of the author"
            />
          </Link>

          <Link href={"https://github.com/MarcoR5"}>
            <Image
              src="./githubGray.svg"
              width={48}
              height={48}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <div>
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

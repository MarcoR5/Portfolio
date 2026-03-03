import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* Navbar */}
      <div className="h-15 w-full flex space-x-5 justify-between pr-15 pl-15 pt-5 items-center flex-col md:flex-row ">
        <h1 className="text-5xl font-bold text-center ">Marco Roodt</h1>
        <ul className="flex space-x-5 ">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}

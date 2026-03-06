import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function Projects() {
  return (
    <div className=" ">
      {/* Navbar */}
      <Header />

      <h1 className="text-center p-15 text-3xl font-bold">MY PROJECTS</h1>
      {/* big wrapper for all the panels */}
      <div className="w-full h-full flex flex-col items-center">
        {/* first panel wrapper*/}
        <div className="flex ">
          {/* left */}
          <Image
            className="ml-15 mr-15"
            src="./coffeeWeb1.png"
            width={744}
            height={336}
            alt="Picture of the author"
          />
          {/* right */}
          <div className="mr-15 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">coffeeroasters</h3>
            <p className="w-150">
              I built the Coffeeroasters passion project by designing and coding
              a fully responsive, multi-page coffee subscription website. I
              focused on translating the brand’s premium identity into a
              seamless digital experience, ensuring that the site works smoothly
              across devices while engaging coffee enthusiasts with intuitive
              navigation and interactive features.
            </p>
            <p className="w-150">
              I structured the layout with clean, semantic HTML and styled it
              using modern CSS that emphasizes simplicity, elegance, and
              readability. By paying attention to typography, spacing, and
              color, I created a user-friendly experience that reflects the
              sophistication of the brand while making it easy for visitors to
              explore subscription options and learn about different coffee
              blends.
            </p>
            <Button className="bg-main w-30 font-bold" asChild>
              <Link href="https://marcor5.github.io/coffee-website/">
                Visit
              </Link>
            </Button>
          </div>
        </div>

        {/* second panel wrapper*/}
        <div className="flex mt-30 mb-30">
          {/* left */}
          <div className="ml-15 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">MindMELT</h3>
            <p className="w-150">
              I built the Country Quiz project by designing and coding an
              interactive quiz website that challenges users on their knowledge
              of world countries and flags. The project allowed me to combine
              design and development skills to create an engaging and
              educational experience, encouraging users to learn while having
              fun testing their geography knowledge.{" "}
            </p>
            <p className="w-150">
              I carefully structured the layout with semantic HTML, implemented
              dynamic quiz logic using JavaScript, and styled the site with
              clean, modern CSS. I focused on responsiveness and user
              engagement, ensuring that the interface is intuitive, visually
              appealing, and accessible across devices. The result is a smooth,
              interactive experience that keeps users motivated to explore and
              improve their knowledge of countries around the world.
            </p>
            <Button className="bg-main w-30 font-bold" asChild>
              <Link href="https://marcor5.github.io/quiz-web-page/">Visit</Link>
            </Button>
          </div>

          {/* right */}
          <Image
            className="ml-15 mr-15"
            src="./countryQuiz.png"
            width={744}
            height={336}
            alt="Picture of the author"
          />
        </div>

        {/* third panel wrapper*/}
        <div className="flex mb-30">
          {/* left */}
          <Image
            className="ml-15 mr-15"
            src="./vinylWEB.png"
            width={744}
            height={336}
            alt="Picture of the author"
          />
          {/* right */}
          <div className="mr-15 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">Qrates</h3>
            <p className="w-150">
              I built the Qrates project by designing and coding a fully
              responsive vinyl music platform website aimed at connecting
              artists and fans. The project allowed me to create a digital space
              that supports music discovery, artist promotion, and community
              engagement while reflecting a modern, professional brand identity.
            </p>
            <p className="w-150">
              I structured key sections including crowdfunding, press & sell,
              services, retail network, and community features, carefully
              crafting a clear layout, strong typography, and intuitive
              navigation. I focused on creating a cohesive and visually
              appealing design that ensures a smooth, engaging user experience
              across devices, allowing both artists and fans to interact
              seamlessly with the platform.
            </p>
            <Button className="bg-main w-30 font-bold" asChild>
              <Link href="https://marcor5.github.io/Vinyl-Web-Page/">
                Visit
              </Link>
            </Button>
          </div>
        </div>

        {/* fourth panel wrapper*/}
        <div className="flex  mb-30">
          {/* left */}
          <div className="ml-15 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">HTML Quiz</h3>
            <p className="w-150">
              I built the HTML Quiz project by designing and coding an
              interactive quiz website that tests users on essential HTML
              concepts, including tags, structure, and best practices. The
              project allowed me to combine educational content with interactive
              design, creating an engaging way for users to learn and reinforce
              their HTML knowledge.{" "}
            </p>
            <p className="w-150">
              I implemented dynamic question logic, scoring, and instant
              feedback using JavaScript, while crafting a clean, responsive
              interface with CSS and semantic HTML. By focusing on usability,
              clarity, and visual appeal, I created a user-friendly and
              educational experience that works seamlessly across devices and
              encourages repeated engagement.
            </p>
            <Button className="bg-main w-30 font-bold" asChild>
              <Link href="https://marcor5.github.io/Programming-Quiz-Website/">
                Visit
              </Link>
            </Button>
          </div>

          {/* right */}
          <Image
            className="ml-15 mr-15"
            src="/HTMLquiz.png"
            width={744}
            height={336}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

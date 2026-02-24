import Image from 'next/image'
import Link from 'next/link'
export default function About(){
    return(
           <div className='h-screen w-screen flex flex-col overflow-hidden'>
            {/* Navbar */}
             <div className="h-15 w-full flex space-x-5 justify-between pr-15 pl-15 pt-5 items-center">
                <h1 className="text-5xl font-bold">Marco Roodt</h1>
                    <ul className="flex space-x-5 ">
                        <Link href="/blog">Projects</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
      
                    </ul>
            </div>

            {/* main hero image + text */}
            <div className='w-full h-full flex justify-center items-center'>
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
                <div className='flex flex-col items-center w-[35%]'>
                    <h2 className='font-bold text-3xl mb-10 '>ABOUT ME </h2><br />
                    <p className='text-center'>Front-end developer and graphic designer specializing in JavaScript, TypeScript, and Next.js. 
                    I combine clean code with strong visual design using tools like Figma and Canva to create engaging, user-focused experiences.</p>

                    {/* 4x sections */}
                    <div className='flex p-10 space-x-10'>
                        <div className='w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5'>
                            <Image 
                        src="./checkmark.svg"
                        width={24}
                        height={24} 
                        alt="Picture of the author"
                           /> 
                           <p className='text-white'>Fun and Engaging</p>
                        </div>
                        
                        <div className='w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5'>
                            <Image 
                        src="./checkmark.svg"
                        width={24}
                        height={24} 
                        alt="Picture of the author"
                           /> 
                           <p className='text-white'>Tasteful Designs</p>
                        </div>
                        
                    </div>
                    <div className='flex p-10  space-x-10'>
                        <div className='w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5'>
                            <Image 
                        src="./checkmark.svg"
                        width={24}
                        height={24} 
                        alt="Picture of the author"
                           /> 
                           <p className='text-white'>Interactive</p>
                        </div>
                        <div className='w-55 h-15 rounded-full bg-black flex items-center justify-center space-x-5'>
                            <Image 
                        src="./checkmark.svg"
                        width={24}
                        height={24} 
                        alt="Picture of the author"
                           /> 
                           <p className='text-white'>Fresh and New</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Footer */}
                    <hr />
                    <div className='pl-15 text-3xl font-bold h-50 w-full flex items-center justify-between pr-15'>
                    <h2>Let's Work Together</h2>
                    <div className='flex flex-row space-x-2'>
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

    )
}
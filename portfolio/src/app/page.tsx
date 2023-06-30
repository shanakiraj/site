import Image from 'next/image'
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import shan from "./images/shan.png"

export default function Home() {
  

  return (

    <main className="bg-white px-10">
      <section className=" bg-white h-screen">
        
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbyShan</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-4 py-2 rounded-md "href='#'>Resume</a></li>
          </ul>
        </nav>

        <div className="flex justify-center">
          <Image className="text-lg w-60" src={shan} alt="profile picture" />
        </div>
        <div className="text-center pb-10">
          <h2 className="text-5xl py-2 text-stone-700 font-medium">Shan Akiraj</h2>
          <h3 className="text-2xl py-2">Software Engineer | Masters Student @UVA</h3>
          <p className="text-md py-5 leading-8">
            I am passionate about software development as well as involving myself in unique and meaningful projects.
          </p>
        </div>
        <div className="flex justify-center gap-12 text-gray-600">
          <Image className="w-10" src={github} alt="github" />
          <Image className="w-10" src={linkedin} alt="linkedin" />
          
        </div>
        
      </section>



      <section>
        <div className="flex">
          <h3 className="text-3xl py-1">Work Experience</h3>
        </div>
      </section>
    </main>
  );
}

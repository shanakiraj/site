import Image from 'next/image'
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import shan from "./images/shan.png"
import hoozlist from "./images/hoozlist.png"
import meme from "./images/meme.png"
import tcp from "./images/tcp.png"
import twitter from "./images/twitter.png"

export default function Home() {
  

  return (

    <main className="bg-gray-100 px-10">
      <section id="About" className=" bg-gray-100 h-screen">
        
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbyShan</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-4 py-2 rounded-md "href='#'>Resume</a></li>
          </ul>
        </nav>

        <div className="flex justify-center sm">
          <Image className="w-1/5" src={shan} alt="profile picture" />
        </div>
        <div className="text-center pb-10">
          <h2 className="text-5xl  py-2 text-stone-700 font-medium">Shan Akiraj</h2>
          <h3 className="text-2xl py-2">Software Engineer | Masters Student @UVA</h3>
          <p className="text-md py-5 leading-8">
            I am passionate about software development as well as involving myself in unique and meaningful projects.
          </p>
        </div>
        <div className="flex justify-center gap-12 text-gray-600">
          <Image className="w-12" src={github} alt="github" />
          <Image className="w-12" src={linkedin} alt="linkedin" />
          
        </div>
        
      </section>



      <section id="Experience" className="min-h-screen px-20 pt-10">
        <div>
          <h3 className="text-5xl py-10 flex justify-center">Work Experience</h3>
        </div>

        <div className="flex justify-between flex-wrap gap-8 py-10">

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Materia Technologies</h3>
            <p className="text-gray-400 pb-1">Software Engineer, July 2023 - Present </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="">
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Biocomplexity Institute</h3>
            <p className="text-gray-400 pb-1">Machine Learning Intern, May 2023 - Present </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="">
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">University of Virginia</h3>
            <p className="text-gray-400 pb-1">Research Intern, Jan 2023 - Present </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="">
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Global Teaching Project</h3>
            <p className="text-gray-400 pb-1">Computer Science Tutor, Sep 2022 - Present </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="">
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
              <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
              <li>Integratable with open-source and/or custom material properties datasets</li>
            </ul>
          </div>


        </div>
      </section>
      <section id="Projects" className="min-h-screen px-20 pt-10">
        <div>
          <h3 className="text-5xl py-10">Projects</h3>
        </div>

        <div className="flex justify-between flex-wrap gap-8 ">
          
          <div className="h-min max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
            <Image className="w-full max-h-80 rounded-xl" src={twitter} alt="linkedin" />
            <div className=" p-6 ">
              <h3 className="text-xl font-semibold mb-2">Twitter Data ML Classifier</h3>
              <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
              <p className="text-sm pb-5"> </p>
              <ul className="">
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
              </ul>
            </div>
          </div>
          

          <div className="h-min max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
            <Image className="w-full max-h-80 rounded-xl" src={tcp} alt="linkedin" />
            <div className=" p-6 ">
              <h3 className="text-xl font-semibold mb-2">TCP Packet Simulator</h3>
              <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
              <p className="text-sm pb-5"> </p>
              <ul className="">
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
              </ul>
            </div>
          </div>

          <div className="h-min max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
            <Image className="w-full max-h-80 rounded-xl" src={hoozlist} alt="linkedin" />
            <div className=" p-6 ">
              <h3 className="text-xl font-semibold mb-2">HoozList</h3>
              <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
              <p className="text-sm pb-5"> </p>
              <ul className="">
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
              </ul>
            </div>
          </div>

          <div className="h-min max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
            <Image className="w-full max-h-80 rounded-xl" src={meme} alt="linkedin" />
            <div className=" p-6 ">
              <h3 className="text-xl font-semibold mb-2">Twitter Data ML Classifier</h3>
              <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
              <p className="text-sm pb-5"> </p>
              <ul className="">
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
              </ul>
            </div>
          </div>


        </div>
      </section>


    </main>
  );
}

import Image from 'next/image'
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import shan from "./images/shan.png"
import hoozlist from "./images/hoozlist.png"
import meme from "./images/meme.png"
import tcp from "./images/tcp.png"
import twitter from "./images/twitter.png"
import materia from "./images/materialogo.jpg"
import bio from "./images/bio.jpg"
import uva from "./images/uva.jpg"
import gtp from "./images/gtp.jpg"
import portfolio from "./images/portfolio.png"

import { useState } from 'react';
export default function Home() {
  
  return (

    <main className="bg-gray-100 px-10">
      
        
      <nav className="py-10 mb-12 flex sticky top-0 bg-gray-100 w-full z-10">
        
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <a className="text-Black px-4 py-2 rounded-md " href='#'>About</a>
          </li>
          <li>
            <a className="text-black px-4 py-2 rounded-md " href='#Experience'>Experience</a>
          </li>
          <li>
            <a className="text-black px-4 py-2 rounded-md " href='#Projects'>Projects</a>
          </li>
        </ul>
      </nav>

      <section id="About" className=" bg-gray-100 mb-60">
        <div className="">
          <div className="flex flex-col sm:flex-row justify-center items-center pb-10 mx-auto">
            <div className="mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-9xl py-2 text-stone-700 font-extrabold transform transition duration-500 ease-in-out hover:scale-110">Shan</h1>
                <h1 className="text-5xl md:text-7xl lg:text-9xl py-2 text-stone-700 font-extrabold transform transition duration-500 ease-in-out hover:scale-110">Akiraj</h1>
            </div>   
            <Image className="w-full sm:w-1/3 lg:w-1/4  mx-auto" src={shan} alt="profile picture" />
          </div>



          <div className="text-center pb-10">
            
            <h3 className="text-4xl text-gray-400 font-serif py-2">Software Engineer | Masters Student @UVA</h3>
            <p className="text-md py-5 leading-8">
              I am passionate about software development as well as involving myself in unique and meaningful projects.
            </p>
          </div>

          <div className="flex justify-center gap-12 text-gray-600 pb-10 items-center">
            <a href="https://github.com/shanakiraj" target="_blank"><Image className="w-12" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/shan-akiraj/" target="_blank"><Image className="w-12" src={linkedin} alt="linkedin" /></a>
            <a className="bg-cyan-400 text-white px-4 py-2 rounded-md " target="_blank" href='https://drive.google.com/file/d/1GoOUu2YszD2c3fQTPd35sTDzOaSYDDnv/view?usp=sharing'>Resume</a>
          </div>

        </div>
        
      </section>



      <section id="Experience" className="">
        <div className="w-fit mx-auto ">
          <h3 className="text-4xl flex justify-center mb-5 sm:pb-10">Work Experience</h3>
        
          <div className="flex justify-between flex-wrap gap-8 py-10 m-auto ">

            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">Materia Technologies <Image className="w-1/6" src={materia} alt="linkedin" /></h3>
              <p className="text-gray-400 pb-1">Software Engineer, July 2023 - Present </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc">
                <li>Designing a codeless AI platform “MatDash” to enable machine learning model building for materials R&D</li>
                <li>Integratable with open-source and/or custom material properties datasets</li>
                
              </ul>
            </div>

            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">Biocomplexity Institute <Image className="w-1/6" src={bio} alt="linkedin" /></h3>
              <p className="text-gray-400 pb-1">Machine Learning Intern, May 2023 - Present </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc">
                <li>Using health record (antibiogram) data to find patterns of transmission in hospital infections.</li>
                <li>Using clustering algorithms for patient grouping and data analysis using Pandas and NetworkX</li>
              </ul>
            </div>

            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">University of Virginia <Image className="w-1/6" src={uva} alt="UVA" /></h3>
              <p className="text-gray-400 pb-1">Research Intern, Jan 2023 - Present </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc">
                <li>Created a script to automate grain size analysis for the Materials Science department improving productivity and saving hundreds of hours of manual calculations</li>
                <li>Constructed models for corrosion prediction using Matplotlib, Pandas, and TensorFlow</li>
                
              </ul>
            </div>

            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">Global Teaching Project <Image className="w-1/6" src={gtp} alt="GTP"/></h3>
              <p className="text-gray-400 pb-1">Computer Science Tutor, Sep 2022 - Present </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc">
                <li>Taught multiple classes and over 100 total students. Lead classroom discussion and create lesson plans on core concepts such as algorithms, networks, data, and abstraction</li>
                <li>Provide academic services for schools without strong AP programs or funding for AP teachers</li>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      <section id="Projects" className="mt-60">
        <div className="w-fit mx-auto">
          <h3 className="text-4xl flex justify-center mb-5 sm:pb-10">Projects</h3>
        

          <div className="flex justify-between flex-wrap gap-8 py-10 m-auto">

            <div className="max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
              <Image className="w-full max-h-80 rounded-xl" src={twitter} alt="linkedin" />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">Twitter Data ML Classifier</h3>
                <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
                  <li>Created machine learning classifiers to detect bias from a dataset of thousands of tweets from politicians</li>
                  <li>Trained a variety of models including SVM, Logistic Regression and Naive Bayes</li>
                </ul>
              </div>
            </div>
            

            <div className="h-min max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
              <Image className="w-full max-h-80 rounded-xl" src={tcp} alt="linkedin" />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">TCP Packet Simulator</h3>
                <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
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
                <ul className="list-disc">
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
                <h3 className="text-xl font-semibold mb-2">Meme Generator</h3>
                <p className="text-gray-400 pb-1">Charlottesville, VA | April 2023 - April 2023</p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
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
        </div>

      </section>


    </main>
  );
}

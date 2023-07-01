import Image from "next/image";
import materia from "../images/materialogo.jpg";
import bio from "../images/bio.jpg";
import uva from "../images/uva.jpg";
import gtp from "../images/gtp.jpg";
import portfolio from "../images/portfolio.png";

export default function Experience() {
  return (
    <section id="Experience" className="pt-20 ">
      <div className="w-fit mx-auto pt-20 pb-20">
        <h3 className="text-4xl text-stone-700 font-bold flex justify-center mb-5 sm:pb-10">
          Work Experience
        </h3>

        <div className="flex justify-between flex-wrap gap-8 py-10 m-auto px-5">
          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Materia Technologies{" "}
              <Image className="w-1/6" src={materia} alt="linkedin" />
            </h3>
            <p className="text-gray-400 pb-1">
              Software Engineer, July 2023 - Present{" "}
            </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="list-disc">
              <li>
                Designing a codeless AI platform “MatDash” to enable machine
                learning model building for materials R&D
              </li>
              <li>
                Integratable with open-source and/or custom material properties
                datasets
              </li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Biocomplexity Institute{" "}
              <Image className="w-1/6" src={bio} alt="linkedin" />
            </h3>
            <p className="text-gray-400 pb-1">
              Machine Learning Intern, May 2023 - Present{" "}
            </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="list-disc">
              <li>
                Using health record (antibiogram) data to find patterns of
                transmission in hospital infections.
              </li>
              <li>
                Using clustering algorithms for patient grouping and data
                analysis using Pandas and NetworkX
              </li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              University of Virginia{" "}
              <Image className="w-1/6" src={uva} alt="UVA" />
            </h3>
            <p className="text-gray-400 pb-1">
              Research Intern, Jan 2023 - Present{" "}
            </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="list-disc">
              <li>
                Created a script to automate grain size analysis for the
                Materials Science department improving productivity and saving
                hundreds of hours of manual calculations
              </li>
              <li>
                Constructed models for corrosion prediction using Matplotlib,
                Pandas, and TensorFlow
              </li>
            </ul>
          </div>

          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Global Teaching Project{" "}
              <Image className="w-1/6" src={gtp} alt="GTP" />
            </h3>
            <p className="text-gray-400 pb-1">
              Computer Science Tutor, Sep 2022 - Present{" "}
            </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="list-disc">
              <li>
                Taught multiple classes and over 100 total students. Lead
                classroom discussion and create lesson plans on core concepts
                such as algorithms, networks, data, and abstraction
              </li>
              <li>
                Provide academic services for schools without strong AP programs
                or funding for AP teachers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import materia from "../images/materialogo.jpg";
import bio from "../images/bio.jpg";
import uva from "../images/uva.jpg";
import gtp from "../images/gtp.jpg";
import icon from "../images/icon2.png";

export default function Experience() {
  return (
    <section id="Experience" className="pt-20  ">
      <div className="w-fit mx-auto pt-20 pb-20 mt-20">
        <h3 className="text-4xl text-stone-700 font-bold flex justify-center mb-5 sm:pb-10">
          Work Experience
        </h3>

        <div className="flex flex-wrap gap-8 py-10 mx-auto px-5 justify-center items-stretch">
          <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105 flex flex-col auto">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              Materia Technologies{" "}
              <img className="w-1/6" src={materia} alt="materialogo" />
            </h3>
            <p className="text-gray-400 pb-1">
              Software Engineer, July 2023 - Present{" "}
            </p>
            <p className="text-sm pb-5"> Charlottesville, VA</p>
            <ul className="list-disc px-5 space-y-4">
              <li>
                Implemented a scalable and optimized data model using Django ORM, resulting in improved query performance and reduced database load
              </li>
              <li className="">
                Configured and deployed AWS API gateway to enable secure and reliable communication between the application and external systems, facilitating seamless data exchange and integration with third-party services
              </li>
            </ul>
            <p className="text-sm mt-auto ml-auto">(site under development)</p>
          </div>

          <a href="https://biocomplexity.virginia.edu/" target="_blank">
            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                Biocomplexity Institute{" "}
                <img className="w-1/6" src={bio} alt="linkedin" />
              </h3>
              <p className="text-gray-400 pb-1">
                Machine Learning Intern, May 2023 - Present{" "}
              </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc px-5 space-y-4">
                <li>
                  Found patterns of transmission in hospital infections by performing data analysis on health record (antibiogram) data
                </li>
                <li>
                  Used PCA for dimensionality reduction and ran clustering algorithms for patient grouping using Python, Sklearn and Pandas
                </li>
                <li>
                  Created and analyzed temporal contact networks using NetworkX 
                </li>
              </ul>
              <img
                className="w-5 mt-auto flex ml-auto hover:scale-110"
                src={icon}
                alt="icon"
              />
            </div>
          </a>

          <a href="https://www.virginia.edu/" target="_blank">
            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                University of Virginia{" "}
                <img className="w-1/6" src={uva} alt="UVA" />
              </h3>
              <p className="text-gray-400 pb-1">
                Research Intern, Jan 2023 - Present{" "}
              </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc px-5 space-y-4">
                <li>
                  Developed a data extraction pipeline using the OpenAI api to
                  convert pdf research papers into structured csv datasets for
                  the Materials Science Department
                </li>
                <li>
                  Created a script to automate grain size analysis for the
                  Materials Science department improving productivity and saving
                  hundreds of hours of manual calculations
                </li>
                <li>
                  Constructed models for corrosion prediction using Matplotlib,
                  Pandas, and TensorFlow
                </li>

                <img
                  className="w-5 mt-5 flex ml-auto hover:scale-110"
                  src={icon}
                  alt="icon"
                />
              </ul>
            </div>
          </a>

          <a href="https://biocomplexity.virginia.edu/" target="_blank">
            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 transition duration-500 hover:scale-105 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                Global Teaching Project{" "}
                <img className="w-1/6" src={gtp} alt="linkedin" />
              </h3>
              <p className="text-gray-400 pb-1">
                Computer Science Tutor, Sep 2022 - Present{" "}
              </p>
              <p className="text-sm pb-5"> Charlottesville, VA</p>
              <ul className="list-disc px-5 space-y-4">
                <li>
                  Taught multiple classes and over 100 total students. Lead
                  classroom discussion and create lesson plans on core concepts
                  such as algorithms, networks, data, and abstraction
                </li>
                <li>
                  Provide academic services for schools without strong AP
                  programs or funding for AP teachers
                </li>
              </ul>
              <img
                className="w-5 mt-auto flex ml-auto hover:scale-110"
                src={icon}
                alt="icon"
              />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

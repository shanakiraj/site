import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import shan from "../images/shan.png";
//import icon from "../images/icon.png";

export default function About() {
  return (
    <section id="About" className=" bg-gray-100">
      <div className="pb-30">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center pb-10 mx-auto">
          <div className="mx-auto flex flex-row lg:flex-col justify-center gap-5">
            <h1 className="text-5xl md:text-7xl lg:text-9xl py-2 text-stone-700 font-extrabold transform transition duration-500 ease-in-out hover:scale-110">
              Shan
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-9xl py-2 text-stone-700 font-extrabold transform transition duration-500 ease-in-out hover:scale-110">
              Akiraj
            </h1>
          </div>
          <img
            className="w-60 sm:w-1/3 lg:w-1/4  mx-auto"
            src={shan}
            alt="profile picture"
          />
        </div>

        <div className="text-center pb-10">
          <h3 className="text-4xl text-gray-400 font-serif py-2">
            Software Engineer | Computer Science @UVA
          </h3>
          <p className="text-md py-5 leading-8">
            I am passionate about software development as well as involving
            myself in unique and meaningful projects.
          </p>
        </div>

        <div className="flex justify-center gap-12 text-gray-600 items-center pb-10">
          <a href="https://github.com/shanakiraj" target="_blank">
            <img className="w-12" src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/shan-akiraj/" target="_blank">
            <img className="w-12" src={linkedin} alt="linkedin" />
          </a>
          {/* <a
            className="bg-cyan-400 text-white px-2 py-2 rounded-md flex items-center justify-between"
            target="_blank"
            href="https://drive.google.com/file/d/1AiTpwxAm4bVdKNLIVUzADaxuGdRqDB0z/view?usp=sharing"
          >
            Resume
            <img className="w-6 ml-2" src={icon} alt="icon" />
          </a> */}
        </div>
      </div>
    </section>
  );
}

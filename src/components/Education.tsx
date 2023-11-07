export default function Education() {
  return (
    <section id="Education" className=" mx-auto mt-20 pt-20">
      <div className="bg-stone-700 flex justify-center gap-20 flex-wrap mb-10 mt-10">
        <div className="max-w-md p-10">
          <div className="text-white p-5">
            <h1 className="text-5xl font-semibold pb-10">Education</h1>
            <h2 className="text-2xl font-semibold">University of Virginia</h2>
            <h3 className=" ">Master of Computer Science, Dec 2024</h3>
            <h3 className=" ">BA Computer Science, May 2024</h3>
            <p>GPA - 3.6 | Dean's List</p>
          </div>
          <div className="text-white p-5">
            <h3>Coursework:</h3>
            <p>
              Algorithms, Computer Architecture, Networks, Advanced Software
              Development, Machine Learning, Natural Language Processing
              (Graduate), Image Analysis (Graduate), Theory of Computation,
              Probability, Linear Algebra, Statistics, Financial Accounting
            </p>
          </div>
          <div className="text-white p-5">
            <h3>Activities:</h3>
            <p>Data Science and Analytics Club: 2020-2023 </p>
            <p>Computer and Network Security Club: 2022-2023</p>
          </div>
        </div>
        <div className="max-w-md p-10 ">
          <div className="text-white pt-5">
            <h1 className="text-5xl font-semibold pb-10 pl-5">Skills</h1>
          </div>
          <div className="text-white pt-0 p-5">
            <h3>Languages:</h3>
            <p> Python, C++, C, Java, JavaScript, PHP, R, SQL, Typescript</p>
          </div>
          <div className="text-white p-5 ">
            <h3>Frameworks/Libraries:</h3>
            <p>
              ReactJS, Bootstrap, Tailwind, Node.js, Next.js, Django, Sklearn,
              NumPy, Pandas
            </p>
          </div>
          <div className="text-white p-5">
            <h3>Web & Database:</h3>
            <p>MySQL, PostgreSQL, Firebase, HTML, CSS</p>
          </div>
          <div className="text-white p-5">
            <h3>Tech:</h3>
            <p>
              Git, Unix, Heroku, LaTeX, Visual Studio, VSCode, Eclipse, Jupyter
              Notebook, Docker, Kubernetes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

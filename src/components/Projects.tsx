
import hoozlist from "../images/hoozlist.png";
import meme from "../images/meme.png";
import tcp from "../images/tcp.png";
import twitter from "../images/twitter.png";

export default function Projects() {
  return (
    <section id="Projects" className="mt-20 pt-20">
      <div className="w-fit mx-auto">
        <h3 className="text-4xl text-stone-700 font-bold flex justify-center mb-5 sm:pb-10">
          Projects
        </h3>

        <div className="flex justify-center flex-wrap gap-8 py-10 mx-auto items-stretch">
          <a href="https://github.com/shanakiraj/Twitter-Data-Classifier" target="_blank">
            <div className="max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105 h-full">
              <img
                className="w-full max-h-80 rounded-xl"
                src={twitter}
                alt="linkedin"
              />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">
                  Twitter Data ML Classifier
                </h3>
                <p className="text-gray-400 pb-1">
                  Charlottesville, VA | April 2023 - April 2023
                </p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
                  <li>
                    Created machine learning classifiers to detect bias from a
                    dataset of thousands of tweets from politicians
                  </li>
                  <li>
                    Trained a variety of models including SVM, Logistic
                    Regression and Naive Bayes
                  </li>
                </ul>
              </div>
            </div>
          </a>

          <a href="https://github.com/shanakiraj/TCP-Simulation" target="_blank">
            <div className=" max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105 h-full">
              <img
                className="w-full max-h-80 rounded-xl"
                src={tcp}
                alt="linkedin"
              />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">
                  TCP Packet Simulator
                </h3>
                <p className="text-gray-400 pb-1">
                  Charlottesville, VA | April 2023 - April 2023
                </p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
                  <li>
                    Implemented a RDT protocol using Go-Back-N in C to send
                    packets over an unreliable data channel.
                  </li>
                  <li>
                    Built to handle both packet loss and packet corruption in a
                    simulated environment.
                  </li>
                </ul>
              </div>
            </div>
          </a>

          <a href="https://uva-cs3240-f22-a14.herokuapp.com/" target="_blank">
            <div className=" max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
              <img
                className="w-full max-h-80 rounded-xl"
                src={hoozlist}
                alt="linkedin"
              />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">HoozList</h3>
                <p className="text-gray-400 pb-1">
                  Charlottesville, VA | April 2023 - April 2023
                </p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
                  <li>
                    Led a 5 person team, implemented extensive course data
                    management using a REST API{" "}
                  </li>
                  <li>
                    Developed user centric features with Django and Python
                  </li>
                  <li>
                    Features include CRUD operations for user accounts, google
                    authentication, friends list, and comment feature
                  </li>
                  <li>
                    Leveraged CSS, JS, HTML and Bootstrap for a clean user
                    interface; PostgreSQL for the database; deployed via Heroku
                  </li>
                </ul>
              </div>
            </div>
          </a>

          <a href="https://meme-generator-105b5.web.app/" target="_blank">
            <div className=" max-w-sm bg-white rounded-xl shadow-lg transition duration-500 hover:scale-105">
              <img
                className="w-full max-h-80 rounded-xl"
                src={meme}
                alt="linkedin"
              />
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold mb-2">Meme Generator</h3>
                <p className="text-gray-400 pb-1">
                  Charlottesville, VA | April 2023 - April 2023
                </p>
                <p className="text-sm pb-5"> </p>
                <ul className="list-disc">
                  <li>
                    Developed a user-friendly web application enabling users to
                    generate over 2,000 random meme images
                  </li>
                  <li>
                    Engineered key functionalities using ReactJS and Hooks,
                    capable of handling thousands of asynchronous API meme
                    requests
                  </li>
                  <li>
                    Engineered key functionalities using ReactJS and Hooks,
                    capable of handling thousands of asynchronous API meme
                    requests
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

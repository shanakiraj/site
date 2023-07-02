import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

export default function Home() {
  
  return (

    <main className="bg-gray-100">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}

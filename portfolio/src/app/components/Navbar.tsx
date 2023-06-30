import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-white font-bold text-xl focus:outline-none"
            >
              Logo
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ScrollLink
                to="home"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

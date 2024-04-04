import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const navs = [
    { label: "Home", link: "/coding-challenges" },
    { label: "CountryCapital", link: "/coding-challenges/country-capital" },
    { label: "DetectScroll", link: "/coding-challenges/detect-scroll" },
    { label: "Quiz", link: "/coding-challenges/quiz" },
    { label: "TrafficLights", link: "/coding-challenges/traffic-lights" },
    { label: "Explorer", link: "/coding-challenges/explorer" },
    { label: "Accordion", link: "/coding-challenges/accordion" },
  ];
  return (
    <nav className="flex justify-center p-3 mb-10 bg-gray-600 sm:px-6 lg:px-8">
      <div className="flex space-x-4">
        {navs.map(({ label, link }) => (
          <Link
            key={link}
            to={link}
            className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:text-white ${
              pathname === link ? "bg-gray-900" : "hover:bg-gray-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

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
    { label: "MovingBlock", link: "/coding-challenges/moving-block" },
    { label: "Timer", link: "/coding-challenges/timer" },
    { label: "Search", link: "/coding-challenges/search" },
    { label: "Search Fruits", link: "/coding-challenges/search-fruits" },
    { label: "LocationSwap", link: "/coding-challenges/location-swap" },
    { label: "Debouncing", link: "/coding-challenges/debouncing" },
    { label: "NumberFormat", link: "/coding-challenges/number-format" },
    { label: "Dropdown", link: "/coding-challenges/dropdown" },
    { label: "Pagination", link: "/coding-challenges/pagination" },
  ];
  return (
    <nav className="flex justify-center p-3 mb-10 bg-gray-600 sm:px-6 lg:px-8">
      <div className="flex flex-wrap space-x-4">
        {navs.map(({ label, link }) => (
          <Link
            key={link}
            to={link}
            className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:text-white mb-2 ${
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

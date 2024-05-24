import { Link } from "react-router-dom";

const buttonInfo = [
  { name: "회원가입", link: "/signup" },
  { name: "Popular", link: "/popular" },
  { name: "Now Playing", link: "/now" },
  { name: "Top Rated", link: "/top" },
  { name: "Upcoming", link: "/upcoming" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-black h-20 text-white flex justify-between items-center">
      <div className="ml-3 text-4xl font-bold">네비바</div>
      <div>
        {buttonInfo.map((contenst, index) => {
          return (
            <Link
              key={index}
              to={contenst.link}
              className="mx-1 hover:text-blue-500"
            >
              {contenst.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

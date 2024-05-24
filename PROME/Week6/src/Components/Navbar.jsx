import { Link, NavLink } from "react-router-dom";

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
      <Link to="/" className="ml-3 text-4xl font-bold">
        <div className="ml-3 text-4xl font-bold">네비바</div>
      </Link>
      <div>
        {buttonInfo.map((contenst, index) => {
          return (
            <NavLink
              key={index}
              to={contenst.link}
              className={({ isActive }) => {
                const styles = "mx-3 ";
                return isActive
                  ? styles + "text-yellow-400"
                  : styles + "text-white";
              }}
            >
              {contenst.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

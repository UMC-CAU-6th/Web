import { Link } from "react-router-dom";
import { Navbar, Navigation, NavLink } from "./style";

const pageList = [
  { name: "Popular", link: "/popular" },
  { name: "Now-Playing", link: "/now-playing" },
  { name: "Top-Rated", link: "/top-rated" },
  { name: "Upcoming", link: "/upcoming" },
  { name: "Sign-In", link: "/sign-in" },
  { name: "Sign-Up", link: "/sign-up" },
];

export default function NavbarPage() {
  return (
    <Navbar>
      <NavLink to={"/main"}>MOVIE</NavLink>
      <Navigation>
        {pageList.map((el, index) => {
          return (
            <NavLink key={index} to={el.link}>
              {el.name}
            </NavLink>
          );
        })}
      </Navigation>
    </Navbar>
  );
}

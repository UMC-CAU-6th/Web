import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import icon from "./icon.png";
import close from "./close.png";

const NavContainer = styled.div`
  width: 100%;
  background-color: #1e174e;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
`;

const LogoLink = styled(Link)`
  background-color: #1e174e;
  color: white;
  flex-shrink: 0;
  display: inline;
  cursor: pointer;
  text-decoration: none;
`;

const NavBlock = styled.div`
  .pcMode {
    background-color: #1e174e;
    color: white;
    display: flex;
    padding: 1rem;
    margin: 0;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .mobileMode {
      display: none;
    }
  }
  @keyframes slidein {
    0% {
      width: 0;
    }
    30% {
      width: 60px;
    }
    70% {
      width: 140px;
    }
    100% {
      width: 200px;
    }
  }
  @keyframes slideout {
    0% {
      width: 200px;
    }
    30% {
      width: 140px;
    }
    70% {
      width: 60px;
    }
    100% {
      width: 0px;
    }
  }
  @media (max-width: 767px) {
    .pcMode {
      display: none;
    }
    .mobileMode {
      .open {
        width: 200px;
        height: 100vh;
        animation: slidein 0.15s;
      }

      margin-right: 10px;
      button.menu {
        margin-left: 120px;
      }

      .menu {
        line-height: 300%;
        margin-left: 12px;
      }
      position: fixed;
      right: 0;
      z-index: 1000;
      img {
        width: 20px;
      }
      button {
        color: white;
        border: none;
        cursor: pointer;
      }
      .close {
        animation:slideout 0.15s;
        .menu {
          display: none;
        }
        width: 4vw;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  padding-bottom: 0.25rem;

  &:visited,
  &:link,
  &:active,
  &:hover {
    color: white;
    text-decoration: none;
  }

  &:hover {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const categories = [
  {
    name: "join",
    text: "회원가입",
    path: "/signup",
  },
  {
    name: "login",
    text: "로그인",
    path: "/login",
  },
  {
    name: "logout",
    text: "로그아웃",
    path: "/logout",
  },
  {
    name: "popular",
    text: "Popular",
    path: "/popular",
  },
  {
    name: "nowPlaying",
    text: "Now playing",
    path: "/now-playing",
  },
  {
    name: "topRated",
    text: "Top Rated",
    path: "/top-rated",
  },
  {
    name: "upcoming",
    text: "UpComing",
    path: "/upcoming",
  },
];

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const initializeUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const userResponse = await axios.get(
          "http://localhost:8080/auth/me",
          config
        );
        if (userResponse.status === 200) {
          const { name } = userResponse.data;
          setUser(name);
        }
        console.log(user + "!!");
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
      }
    }
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  const toggleOpen = () => {
    setOpen(true);
  };

  const toggleClose = () => {
    setOpen(false);
  };

  return (
    <NavContainer>
      <LogoLink className="Logo" to="/">
        UMC MOVIE
      </LogoLink>

      <NavBlock>
        <div className="pcMode">
          {categories
            .filter((c) => {
              if (!user) {
                return c.name !== "logout";
              } else {
                return c.name !== "join" && c.name !== "login";
              }
            })
            .map((c) => (
              <StyledLink
                to={c.path}
                key={c.name}
                onClick={c.name === "logout" ? handleLogout : null}
              >
                {c.text}
              </StyledLink>
            ))}
        </div>
        <div className="mobileMode">
          <div className={isOpen ? "open" : "close"}>
            <button onClick={toggleOpen}>
              <img src={icon} alt="Menu" />
            </button>
            <button className="menu" onClick={toggleClose}>
              <img src={close} alt="Close" />
            </button>
            <div className="menu">
              {categories
                .filter((c) => {
                  if (!user) {
                    return c.name !== "logout";
                  } else {
                    return c.name !== "join" && c.name !== "login";
                  }
                })
                .map((c) => (
                  <StyledLink
                    to={c.path}
                    key={c.name}
                    onClick={() => {
                      if (c.name === "logout") {
                        handleLogout();
                      }
                      toggleClose();
                    }}
                  >
                    <br />
                    {c.text}
                  </StyledLink>
                ))}
            </div>
          </div>
        </div>
      </NavBlock>
    </NavContainer>
  );
};

export default Navbar;

//노란색으로 바꾸는거는 NavLink?

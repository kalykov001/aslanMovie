"use client";
import { useRouter } from "next/navigation";
import scss from "./header.module.scss";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const router = useRouter();
  return (
    <header className={`${scss.container} `}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div
            onClick={() => router.push("/")}
            className={scss.startHeader}
          >
            <img
              src="https://movie.elcho.dev/assets/eco-movie-logo-a8_bjuTM.svg"
              alt=""
            />
            <h2>AslanMovie</h2>
          </div>
          <nav className={scss.nav}>
            <p onClick={() => router.push("/movies")}>Movies</p>
            <p>TV Shows</p>
            <span>
              <CiSearch />
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

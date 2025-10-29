import { Typewriter } from "react-simple-typewriter";
import scss from "./banner.module.scss";
export default function Banner() {
  const text = [
    "Welcome to AslanMovie - Enjoy the Show!",
    "Discover Movie Magic at AslanMovie",
    "Get Ready for Cinematic Bliss",
  ];

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.app}>
            <h1>
              <Typewriter
                words={text}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className={scss.searchBar}>
            <input type="text" placeholder="Search for a movie or tv show..." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

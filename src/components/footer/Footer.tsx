import scss from "./footer.module.scss";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.linked}>
            <p>Terms Of Use</p>
            <p>Privacy-Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
          </div>
          <p className={scss.textFooter}>
            AslanMovie - a unique website providing fascinating information
            about movies and TV shows. Here you can discover all the necessary
            details about your favorite films, actors, directors, ratings, and
            much more. AslanMovie boasts a stylish and intuitive interface that
            makes your search for cinematic masterpieces as convenient and
            enjoyable as possible.
          </p>
          <div className={scss.icons}>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaVk />
            </span>
            <span>
              <CiLinkedin />
            </span>
            <span>
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

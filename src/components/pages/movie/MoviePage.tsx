"use client"
import { genres, sortMovies } from "@/constants/coman";
import scss from "./moviePage.module.scss";
import { useAllMovies } from "@/hooks/getMovies/getAllMovies";
import MoviesCart from "@/ui/moviesCart/MoviesCart";

export default function MoviePage() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.movieTop}>
            <h3>Explore Movies</h3>
            <div className={scss.selected}>
              <select>
                <option value="" hidden selected>
                  Select Genres
                </option>
                {genres.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select>
                <option value="" hidden selected>
                  Sort by
                </option>
                {sortMovies.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <MoviesCart />
        </div>
      </div>
    </div>
  );
}

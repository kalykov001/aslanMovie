"use client";
import { useAllMovies } from "@/hooks/getMovies/getAllMovies";
import scss from "./moviesCart.module.scss";

export default function MoviesCart() {
  const { data: allMovie } = useAllMovies();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.list}>
            {
              allMovie?.map((item) => (
   <div className={scss.card}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
              />
              <h3>{item.original_title.length > 19 ?item.original_title.slice(0,19)  + "..." : item.original_title}</h3>
              <h4>{item.release_date}</h4>
              <div className={scss.score}>{item.vote_average.toString().slice(0,3)}</div>
              <div className={scss.genre}>
                <span>Action</span>
                <span>Comedy</span>
              </div>
            </div>
              ))
            }
         
          </div>
        </div>
      </div>
    </div>
  );
}

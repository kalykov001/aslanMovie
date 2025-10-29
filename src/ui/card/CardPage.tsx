"use client";
import { useState } from "react";
import scss from "./cardPage.module.scss";
import { useGettrending } from "@/hooks/getMovie/useGetMovie";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

interface Idata {
  name: string;
  backdrop_path: string;
  vote_average: number;
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
}

export default function CardPage() {
  const [activeTab, setActiveTab] = useState(0); // Day / Week
  const [currentIndex, setCurrentIndex] = useState(0); // текущий блок
  const itemsPerPage = 5;

  const { data: dataMovie } = useGettrending();

  const handleNext = () => {
    if (!dataMovie) return;
    const maxIndex = Math.floor((dataMovie.length - 1) / itemsPerPage);
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? maxIndex : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const displayedMovies = dataMovie?.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <button
            className={scss.arrowLeft}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaRegArrowAltCircleRight size={30} />
          </button>

          <div className={scss.contentWrapper}>
            <div className={scss.cardTop}>
              <h3>Trending</h3>
              <div className={scss.switchingTabs}>
                {["Day", "Week"].map((tab, idx) => (
                  <span
                    key={idx}
                    className={
                      activeTab === idx ? scss.tabItemActive : scss.tabItem
                    }
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            <div className={scss.blockCard}>
              {displayedMovies?.map((item: Idata) => (
                <div key={item.id} className={scss.carded}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.original_title}
                  />
                  <h3>
                    {item.original_title.length > 19
                      ? item.original_title.slice(0, 19) + "..."
                      : item.original_title}
                  </h3>
                  <h4>{item.release_date}</h4>
                  <div className={scss.ball}>
                    {item.vote_average.toFixed(1)}
                  </div>
                  <div className={scss.genres}>
                    <span>Adventure</span>
                    <span>Action</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={scss.arrowRight}
            onClick={handleNext}
            disabled={
              dataMovie
                ? currentIndex * itemsPerPage + itemsPerPage >= dataMovie.length
                : true
            }
          >
            <FaRegArrowAltCircleLeft size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";
import "./Row.css";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState([]);

  // fetchUrl  필요한 정보 가져오기
  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //비동기 요청
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl); // App.js에 각 Row별 다른 URL
    console.log("request", request);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: { slidesPerView: "6", slidesPerGroup: "5" },
          998: { slidesPerView: "5", slidesPerGroup: "4" },
          625: { slidesPerView: "4", slidesPerGroup: "3" },
          0: { slidesPerView: "3", slidesPerGroup: "3" },
        }}
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

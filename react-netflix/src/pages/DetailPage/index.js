import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const [movie, setMovie] = useState([]); // 하나의 무비 정보니까 객체를 이니셜 스테이트로
  // 주소 params 가져오기
  const { movieId } = useParams();
  console.log(movieId);

  // 데이터 비동기 가져오기
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log("request", request);
      setMovie(request.data);
    }

    fetchData();
  }, [movieId]);

  //UI 쪽
  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}

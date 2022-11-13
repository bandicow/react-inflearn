import React, { useState, useEffect } from "react";
import requests from "./../api/requests";
import axios from "./../api/axios";
import "./Banner.css";
import styled from "styled-components";

/** 배너 정보 가져오는 API */
export default function Banner() {
  // 여러 무비 넣기위해 빈배열로
  const [movie, setMovie] = useState([]);
  //**play 클릭 비디오 모달 생성*/
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    //콜할꺼
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기 (여러영화)
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러영화 중 영화 하나의 id 가져오기
    const movieid =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화 상세 정보 가져오기 (비디오 정보 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieid}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  //**100글자 이상 자르는 함수 */
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  // isClicked이 false 인 게 맞다면 원래 return 부분
  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https:///images.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1>{movie.title || movie.name || movie.original_name}</h1>

          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className="banner__button info">More Information</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  back
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.95;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

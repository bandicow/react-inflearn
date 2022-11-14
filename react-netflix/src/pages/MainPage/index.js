import React from "react";
import requests from "../../api/requests";
import Row from "../../components/Row";
import Banner from "../../components/Banner";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO" // Netflix ORIGINAL
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow // 여기만 썸네일 크기 다름
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

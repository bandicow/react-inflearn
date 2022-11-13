import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NEFLIX ORIGINALS"
        id="NO" // NEFLIX ORIGINAL
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow // 여기만 썸네일 크기 다름
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" id="CM" fetchUrl={requests.fetchComedyMovies} />
      <Footer />
    </div>
  );
}

export default App;

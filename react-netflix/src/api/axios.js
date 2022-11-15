import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

// 인스턴스 다른곳에서 사용할꺼니까 이 파일 밖에서 쓸수있게 export
export default instance;

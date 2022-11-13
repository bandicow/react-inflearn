import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0bae12d561241b34c741695c281f8ed3",
    language: "ko-KR",
  },
});

// 인스턴스 다른곳에서 사용할꺼니까 이 파일 밖에서 쓸수있게 export
export default instance;

import axios from "axios";

const instanse = axios.create({
  baseURL: "https://api.neople.co.kr/df/",
});

export default instanse;

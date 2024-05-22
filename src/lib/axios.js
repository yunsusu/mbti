import axios from "axios";

const instanse = axios.create({
  baseURL: "https://learn.codeit.kr",
});

export default instanse;

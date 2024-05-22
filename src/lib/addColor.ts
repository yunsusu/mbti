import axios from "./axios";

interface dataProps {
  mbti: string;
  colorCode: string;
  password: string;
}

export const postData = async (data: dataProps) => {
  try {
    const res = await axios.post("/api/color-surveys", data);
    console.log(res);
  } catch {}
};

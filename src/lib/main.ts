import axios from "./axios";

export const getData = async (next: string) => {
  try {
    if (next === "") {
      const res = await axios.get("/api/color-surveys");
      return res.data;
    } else {
      const res = await axios.get(next);
      return res.data;
    }
  } catch {}
};

export const getSearchData = async (num: number) => {
  try {
    const res = await axios.get(`/api/color-surveys/${num}`);
    return res.data;
  } catch {}
};

export const deleteData = async (num: number, pwd: number) => {
  const pwdBox = {
    password: pwd.toString(),
  };
  try {
    const res = await axios.delete(`/api/color-surveys/${num}`, {
      data: pwdBox,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch {}
};

export const putData = async (id, item) => {
  try {
    const res = await axios.put(`/api/color-surveys/${id}`, item, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

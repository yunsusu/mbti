import React from "react";
import "./style.scss";
import axios from "../../lib/axios";

function Main() {
  const key = process.env.REACT_APP_KEY;
  const getData = async () => {
    try {
      const res = await axios.get(`/servers?apikey=${key}`);
      // const res = await instanse.get(`bakal/characters?characterName=윤마도&apikey=${key}`);
      console.log(res);
    } catch {}
  };

  return (
    <>
      <div className="btn" onClick={getData}>
        get data
      </div>
    </>
  );
}

export default Main;

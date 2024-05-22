import React from "react";
import "./Search.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { getSearchData } from "../../lib/main.ts";

interface IFormNum {
  number: number;
}

function Search({ setColor }) {
  const { register, handleSubmit } = useForm<IFormNum>();
  const onSubmit: SubmitHandler<IFormNum> = async (data) => {
    const box = await getSearchData(data.number);
    setColor([box]);
  };
  return (
    <div className="searchWrap">
      search :
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("number")} />

        <button className="searchBtn" type="submit">
          🔍
        </button>
      </form>
    </div>
  );
}

export default Search;

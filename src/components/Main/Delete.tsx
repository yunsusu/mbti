import React, { useEffect, useState } from "react";
import "./Delete.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { deleteData } from "../../lib/main.ts";

interface IFormNum {
  number: number;
  pwd: number;
}

function Delete() {
  const [deletee, setDeletee] = useState(null);
  const { register, handleSubmit } = useForm<IFormNum>();
  const onSubmit: SubmitHandler<IFormNum> = async (data) => {
    const res = await deleteData(data.number, data.pwd);
    setDeletee(res);
  };

  useEffect(() => {
    if (deletee) {
      window.location.reload();
    }
  }, [deletee]);

  return (
    <div className="searchWrap">
      delete id :
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("number")} /> pwd :
        <input type="text" {...register("pwd")} />
        <button className="searchBtn" type="submit">
          🔥
        </button>
      </form>
    </div>
  );
}

export default Delete;

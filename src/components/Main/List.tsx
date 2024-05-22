import React, { useState } from "react";
import "./List.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { putData } from "../../lib/main.ts";

interface IFormInput {
  mbti: string;
  colorCode: string;
}

function List({ item }) {
  const [put, setPut] = useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const box = {
      mbti: data.mbti,
      colorCode: data.colorCode,
      password: "1234",
    };
    try {
      const res = await putData(item.id, box);
      console.log(res);
      setPut(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handlePut = () => {
    setPut((prev) => !prev);
  };

  return !put ? (
    <div className="mainListItem">
      <div className="mainListNum">{item.id}</div>
      <div className="mainListTag">{item.mbti}</div>
      <span>- - - -{">"}</span>
      <div className="mainListColor">
        <div className="mainListColorBox" style={{ backgroundColor: item.colorCode }}></div> {item.colorCode}
      </div>
      {/* <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={handlePut}>
        수정
      </div> */}
    </div>
  ) : (
    <form className="mainListItem" onSubmit={handleSubmit(onSubmit)}>
      <div className="mainListNum">{item.id}</div>
      <input className="mainListTag" defaultValue={item.mbti} {...register("mbti")} />
      <span>- - - -{">"}</span>
      <div className="mainListColor">
        <input
          type="color"
          className="mainListColorBox"
          style={{ backgroundColor: item.colorCode }}
          {...register("colorCode")}
        />
        <input type="text" value={item.colorCode} />
      </div>
      <button type="submit" style={{ fontSize: "20px", cursor: "pointer" }}>
        수정
      </button>
    </form>
  );
}

export default List;

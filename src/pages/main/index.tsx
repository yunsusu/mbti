import React, { useEffect, useState } from "react";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../lib/main.ts";
import Paging from "../../components/Main/paging.tsx";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Main/Search.tsx";
import Delete from "../../components/Main/Delete.tsx";
import List from "../../components/Main/List.tsx";

function Main() {
  const [color, setColor] = useState([]);
  const [next, setNext] = useState<string>("");
  const navi = useNavigate();

  const { data: lists, isSuccess } = useQuery({ queryKey: ["lists", next], queryFn: () => getData(next) });

  const addColor = () => {
    navi("/addColor");
  };

  useEffect(() => {
    if (isSuccess && lists?.results) {
      setColor(lists.results);
    }
  }, [isSuccess, lists]);

  return (
    <>
      <div className="mainWrap">
        <div>
          <div className="mainTitle">
            MBTI별
            <br />
            <span>좋아하는 컬러</span>
          </div>
          <Search setColor={setColor} />
          <Delete />
        </div>

        <div className="mainList">
          <div className="mainListMore" onClick={addColor}>
            + 새 컬러 등록하기
          </div>

          {color?.map((item: any, index) => {
            return (
              <div key={index}>
                <List item={item} />
              </div>
            );
          })}
          <Paging setNext={setNext} lists={lists} />
        </div>
      </div>
    </>
  );
}

export default Main;

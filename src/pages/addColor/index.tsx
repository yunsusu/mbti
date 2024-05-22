import React, { useEffect, useState } from "react";
import "./style.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { postData } from "../../lib/addColor.ts";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  mbtiE: string;
  mbtiS: string;
  mbtiT: string;
  mbtiJ: string;
  color: string;
}
function AddColor() {
  const [colorText, setColorText] = useState("#000000");
  const [box, setBox] = useState(null);
  const navi = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.mbtiE && data.mbtiJ && data.mbtiS && data.mbtiT) {
      const newBox = {
        mbti: data.mbtiE + data.mbtiS + data.mbtiT + data.mbtiJ,
        colorCode: colorText,
        password: "1234",
      };
      console.log(newBox);
      setBox(newBox);
      postData(newBox);
    } else {
      alert("선택 안한 값이 있거나 color 코드가 올바르지 못합니다. 다시 확인해 주세요");
    }
  };
  const handleReset = () => {
    setColorText("#000000");
  };

  useEffect(() => {
    if (box) {
      navi("/");
    }
  }, [box, navi]);

  const handleChangeColor = (e) => {
    let color = e.target.value.slice(0, 7);
    setColorText(color);
  };
  const handleFocusColor = (e) => {
    let color = e.target.value.slice(0, 7).padEnd(7, "0");
    setColorText(color);
  };

  return (
    <div className="addWrap">
      <div className="addTitleWrap">
        <div className="addTitle">새 컬러 등록하기</div>
        <div className="addBack" onClick={() => navi("/")}>
          X
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mbti-group">
          <div className="mbti-container">
            <label>
              <input type="radio" value="E" {...register("mbtiE")} />
              <span>E 외향형</span>
            </label>
            <label>
              <input type="radio" {...register("mbtiE")} value="I" />
              <span>I 내향형</span>
            </label>
          </div>
          <div className="mbti-container">
            <label>
              <input type="radio" {...register("mbtiS")} value="S" />
              <span>S 감각형</span>
            </label>
            <label>
              <input type="radio" {...register("mbtiS")} value="N" />
              <span>N 직관형</span>
            </label>
          </div>
          <div className="mbti-container">
            <label>
              <input type="radio" {...register("mbtiT")} value="T" />
              <span>T 사고형</span>
            </label>
            <label>
              <input type="radio" {...register("mbtiT")} value="F" />
              <span>F 감정형</span>
            </label>
          </div>
          <div className="mbti-container">
            <label>
              <input type="radio" {...register("mbtiJ")} value="J" />
              <span>J 판단형</span>
            </label>
            <label>
              <input type="radio" {...register("mbtiJ")} value="P" />
              <span>P 인식형</span>
            </label>
          </div>
        </div>
        <div className="color-picker">
          <div>
            <label htmlFor="color">컬러</label>
            <div className="reset" onClick={handleReset}>
              reset
            </div>
          </div>

          <div>
            <input
              type="text"
              maxLength={7}
              {...register("color")}
              value={colorText}
              onBlur={handleFocusColor}
              onChange={handleChangeColor}
            />
            <input
              type="color"
              id="color"
              value={colorText}
              style={{ backgroundColor: colorText }}
              onChange={(e) => {
                setColorText(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit">컬러 등록</button>
      </form>
    </div>
  );
}

export default AddColor;

import React, { useState } from "react";
import shortid from "shortid";
import "../styles/index.scss";

const Star = (props) => {
  const { fill } = props;
  return (
    <svg
      id="star2"
      className="formBook__star"
      fill={fill}
      stroke="black"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );
};

export default function StarSvg(props) {
  const { num, adjustable } = props;
  const [stars, setStars] = useState(0);
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    if (num > i) {
      starArr.push(1);
    } else {
      starArr.push(0);
    }
  }

  let element;
  if (starArr.length === 5) {
    element = starArr.map((el, i) => {
      return (
        <Star
          key={shortid.generate()}
          fill={el === 1 || stars > i ? "yellow" : "rgb(233, 233, 233)"}
          onMouseEnter={() => {
            if (adjustable) {
              setStars(i + 1);
            }
          }}
          onMouseLeave={() => {
            if (adjustable) {
              setStars(0);
            }
          }}
          onClick={(e) => {
            if (adjustable) {
              props.updateRatingHandler(e, i + 1);
            }
          }}
        />
      );
    });
  }
  return <>{element}</>;
}

import React from "react";

import "../styles/index.scss";
import blankCover from "../assets/images/blank.jpg";
import imagesArray from "../utils/imagesArray";
import StarSvg from "./StarSvg";

export default function Input(props) {
  const {
    el: {
      id,
      valid,
      touched,
      validation: { required, pattern },
      attributes,
      placeholder,
      value,
      label,
      error,
    },
    inputType,
    updateRatingHandler,
  } = props;

  let validationClass; //formBook--validation
  let errMsg;
  if (!valid && required && touched) {
    validationClass = "formBook--validation";
    errMsg = error;
  }

  let field;
  switch (id) {
    case "title":
    case "author":
    case "published":
    case "numPages":
      field = (
        <>
          <label
            htmlFor={id}
            className={`formBook__label formBook__${id}--label`}
          >
            {label}
          </label>
          <input
            id={id}
            placeholder={errMsg ? errMsg : placeholder}
            {...attributes}
            className={`formBook__input formBook__${id}--input ${validationClass}`}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      );
      break;
    case "file":
      field = (
        <>
          <div className="formImg">
            <img
              src={
                props.value
                  ? imagesArray.find(
                      (img) =>
                        props.value ===
                        `./src/assets/images${img.replace(/\..*\./, ".")}`
                    )
                  : blankCover
              }
              alt="Add or edit Image"
              className={`formImg__img ${validationClass}`}
            />
            <label htmlFor={id} className="btn btn--setting-two formImg__btn">
              {props.formType === "edit" ? "Edit Image" : "Add Image"}
            </label>
            <input
              id={id}
              {...attributes}
              style={{ display: "none" }}
              onChange={props.onChange}
            />
          </div>
        </>
      );
      break;
    case "synopsis":
      field = (
        <>
          <label
            htmlFor={id}
            className={`formBook__label formBook__${id}--label`}
          >
            {label}
          </label>
          <textarea
            id={id}
            className={`formBook__input formBook__${id}--textarea ${validationClass}`}
            name={id}
            {...attributes}
            placeholder={errMsg ? errMsg : placeholder}
            value={props.value}
            onChange={props.onChange}
          />
        </>
      );
      break;
    case "rating":
      field = (
        <>
          <label htmlFor={id} className="formBook__label">
            {label}
          </label>
          <div id={id} className={`formBook__${id} ${validationClass}`}>
            <StarSvg
              num={value}
              adjustable={true}
              updateRatingHandler={updateRatingHandler}
            />
          </div>
        </>
      );
      break;
    default:
      field = <h1>wrong input</h1>;
  }

  return <>{field}</>;
}

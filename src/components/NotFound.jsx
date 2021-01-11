import React from "react";
import { useHistory } from "react-router-dom";

import notFoundImage from "../assets/images/404.jpg";

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="not-found-container">
      <h1 className="not-found-container__details">
        404: Page not found.{" "}
        <b
          className="not-found-container__home"
          onClick={() => {
            history.push("/");
          }}
        >
          Go Home
        </b>
      </h1>
      <img
        className="not-found-container__image"
        src={notFoundImage}
        alt="boy with book"
      />
    </div>
  );
}

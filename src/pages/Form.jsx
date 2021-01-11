import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

import "../styles/index.scss";
import Input from "../components/Input";

export default function Form(props) {
  const history = useHistory();
  const { id } = useParams();
  const { formType } = props; //formType --> edit or add
  const [formIsValid, setFormIsValid] = useState(false);
  const [form, setForm] = useState([
    {
      id: "title", // Title
      valid: false,
      touched: false,
      validation: { required: true, pattern: ".{2}" },
      attributes: { type: "text" },
      placeholder: "Enter Title",
      value: "",
      label: "Title",
      error: "Must have a Title",
      dbName: "title",
    },
    {
      id: "author", // Author
      valid: false,
      touched: false,
      validation: { required: true, pattern: ".{2}" },
      attributes: { type: "text" },
      placeholder: "Enter Author",
      value: "",
      label: "Author",
      error: "Must have an Author",
      dbName: "author",
    },
    {
      id: "file", // Image / File
      valid: true,
      touched: false,
      validation: { required: false, pattern: ".{1}" },
      attributes: { type: "file" },
      placeholder: "",
      accepts: ".jpg, .png, .jpeg",
      value: "",
      label: "",
      error: "Must have an image",
      dbName: "image",
    },
    {
      id: "synopsis", // Synopsis
      valid: true,
      touched: false,
      validation: { required: false, pattern: ".{1}" },
      attributes: { name: "synopsis" },
      placeholder: "This book is about...",
      value: "",
      label: "Synopsis",
      error: "Must have a synopsis",
      dbName: "description",
    },
    {
      id: "published", // Published
      valid: true,
      touched: false,
      validation: { required: false, pattern: ".{1}" },
      attributes: { type: "date" },
      placeholder: "",
      value: "",
      label: "Published",
      error: "Must have a published date",
      dbName: "publishDate",
    },
    {
      id: "numPages", // Pages
      valid: true,
      touched: false,
      validation: { required: false, pattern: ".{1}" },
      attributes: { type: "number" },
      placeholder: "Num. Pages",
      value: 0,
      label: "Pages",
      error: "Number of pages",
      dbName: "pages",
    },
    {
      id: "rating", // Rating
      valid: true,
      touched: false,
      validation: { required: false, pattern: ".{1}" },
      value: 0,
      label: "Rating",
      error: "Must have a rating",
      dbName: "ratings",
    },
  ]);

  useEffect(() => {
    if (formType === "edit") {
      const getBook = async () => {
        try {
          const bk = await axios.get(`http://localhost:3000/books/${id}`);
          let copyForm = [...form];
          copyForm = copyForm.map((el) => {
            el = { ...el };
            el.value = bk.data[el.dbName];
            el.valid = true;
            return el;
          });
          setForm(copyForm);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }
  }, []);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      let copyForm = [...form];

      copyForm = copyForm.map((el) => {
        el = { ...el };
        el.touched = true;
        return el;
      });
      setForm(copyForm);
    } else {
      let bk = {
        title: form[0].value,
        author: form[1].value,
        image: form[2].value,
        description: form[3].value,
        publishDate: form[4].value,
        pages: form[5].value,
        ratings: form[6].value,
      };
      if (formType === "edit") {
        const editBook = async () => {
          try {
            axios.patch(`http://localhost:3000/books/${id}`, bk, {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            history.push("/books");
          } catch (error) {
            console.log(error);
          }
        };
        editBook();
      }

      if (formType === "add") {
        const createBook = async () => {
          try {
            await axios.post("http://localhost:3000/books", bk, {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            history.push("/books");
          } catch (error) {
            console.log(error);
          }
        };
        createBook();
      }
    }
  };

  const checkValidity = (value, validation, id) => {
    let isValid = true;

    if (validation.required) {
      if (id === "numPages" || id === "rating") {
        return +value > 0;
      }

      isValid = value.trim() !== "" && isValid;

      if (validation.pattern) {
        isValid = value.search(validation.pattern) > -1 && isValid;
      }
    }

    return isValid;
  };

  const updateFormHandler = (e, formItemNum) => {
    const { value } = e.target;
    let copyForm = [...form];

    copyForm = copyForm.map((el, i) => {
      el = { ...el };
      if (i === formItemNum) {
        el.value = value;
        el.valid = checkValidity(el.value, el.validation, el.id);
        el.touched = true;
      }
      return el;
    });

    let isFormValid = true;
    isFormValid = copyForm.every((el) => el.valid && isFormValid);

    setForm(copyForm);
    setFormIsValid(isFormValid);
  };

  const updateRatingHandler = (e, ratingValue) => {
    const { value } = e.target;
    let copyForm = [...form];

    copyForm = copyForm.map((el, i) => {
      el = { ...el };
      if (el.id === "rating") {
        el.value = ratingValue;
        el.valid = checkValidity(el.value, el.validation, el.id);
        el.touched = true;
      }
      return el;
    });

    let isFormValid = true;
    isFormValid = copyForm.every((el) => el.valid && isFormValid);

    setForm(copyForm);
    setFormIsValid(isFormValid);
  };

  let formMapped = form.map((el, i) => {
    return (
      <Input
        key={i}
        el={el}
        value={el.value}
        onChange={(e) => updateFormHandler(e, i)}
        formType={formType}
        from={form}
        updateRatingHandler={updateRatingHandler}
      />
    );
  });

  return (
    <form className="formBook" onSubmit={submitFormHandler}>
      <h1 className="formBook__detail">
        {formType === "edit" ? "Edit Book" : "Add Book"}
      </h1>
      <div className="formBook__wrapper">
        {formMapped}
        <div className="formBook__wrapper--action">
          <button type="submit" className="btn btn--success formBook__btn">
            {formType === "edit" ? "Submit" : "Add Book"}
          </button>
          <button
            onClick={() => {
              history.push("/home");
            }}
            className="btn btn--setting-one formBook__btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

import React from "react";
import { useState } from "react";
import s from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };
  return (
    <form className={s.formulario}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={input}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;

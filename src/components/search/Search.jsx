import React from "react";
import { useContext } from "react";
import { useState } from "react";
import WeatherContext from "../../context/WeatherContext";
import s from "./Search.module.css";

const Search = () => {
  const { onSearch } = useContext(WeatherContext);
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
        placeholder="Enter a city..."
        aria-label="Search"
        value={input}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit} className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default Search;

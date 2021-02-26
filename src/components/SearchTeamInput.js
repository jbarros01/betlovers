import React, { useState } from "react"
import { func } from 'prop-types';
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { HOMEPAGE } from "../utils/constants"

const SearchTeamInput = ({ onSearch }) => {

  const [inputText, setInputText] = useState('')

  const onChange = e => {
    setInputText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (inputText.trim()) {
      onSearch(inputText);

      setInputText('')
    } else {
      alert(HOMEPAGE.WRITE_ITEM_MESSAGE)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <span className="input-search">
        <FaSearch />
      </span>
      <input
        type="text"
        className="input-text"
        placeholder={HOMEPAGE.SEARCH_PLACEHOLDER}
        value={inputText}
        name="team"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaArrowRight />
      </button>
    </form>
  )
}

SearchTeamInput.propTypes = {
  onSearch: func.isRequired
};

export default SearchTeamInput

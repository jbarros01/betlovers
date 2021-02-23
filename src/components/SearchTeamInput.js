import React, { useState } from "react"
import { func } from 'prop-types';
import { FaPlusCircle } from "react-icons/fa";
import { HOMEPAGE } from "../utils/Constants"

const SearchTeamInput = ({ onSearch }) => {

  const [inputText, setInputText] = useState('')

  const onChange = e => {
    setInputText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(inputText.trim()) {
      onSearch(inputText);

      setInputText('')
    } else {
      alert(HOMEPAGE.WRITE_ITEM_MESSAGE)
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText}
        name="team"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
      </button>
    </form>
  )
}

SearchTeamInput.propTypes = {
  onSearch: func.isRequired
};

export default SearchTeamInput

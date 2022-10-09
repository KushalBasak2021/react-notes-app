import React, { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  let characterLimit = 200;

  function handleChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="add a note here..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save btn" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </div>
  );
};

export default Addnote;

import React from "react";

const Note = ({ note, handleDeleteNote }) => {
  function handleTrashClick() {
    handleDeleteNote(note.id);
  }
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-footer">
        <small>{note.date}</small>
        <button>
          <i className="fas fa-trash" onClick={handleTrashClick}></i>
        </button>
      </div>
    </div>
  );
};

export default Note;

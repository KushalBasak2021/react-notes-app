import React from "react";
import Addnote from "./Addnote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDeleteNote, searchText }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleDeleteNote={handleDeleteNote}
          searchText={searchText}
        />
      ))}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;

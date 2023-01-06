import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [searchText, setSearchText] = useState("");
  const [savedNotes] = useState(localStorage.getItem("react-notes-app-data"));
  const [notes, setNotes] = useState(savedNotes ? JSON.parse(savedNotes) : []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        searchText={searchText}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [description, setDescription] = useState('');
  const [allNote, setAllNote] = useState([]);

  const handleCheck = (id) => {
    const updatedNotes = allNote.map((noteItem) => {
      if (noteItem.id === id) {
        return { ...noteItem, isCompleted: !noteItem.isCompleted };
      }
      return noteItem;
    });

    setAllNote(updatedNotes);

    // Check if the note is being marked as completed
    const noteToUpdate = updatedNotes.find((note) => note.id === id);
    if (noteToUpdate.isCompleted) {
      // Add a new card when a checkbox is checked
      const newNote = {
        id: uuidv4(),
        text: 'New card',
        description: 'This card was added after checking another card',
        isCompleted: false,
      };
      setAllNote((prevNotes) => [newNote, ...prevNotes]);
    }
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      text: textInput,
      description: description,
      isCompleted: false,
    };
    setAllNote((prevNotes) => [newNote, ...prevNotes]);
    setTextInput('');
    setDescription('');
  };

  return (
    <>
      <div className="form">
        <form onSubmit={addNote}>
          <input
            required
            type="text"
            placeholder="Add input..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <textarea
            required
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn" type="submit">
            Save
          </button>
        </form>
      </div>
      <h1>All Notes</h1>
      <div className="all-note">
        {allNote.map((note) => (
          <div key={note.id} className="all-card">
            <h2 className="title">{note.text}</h2>
            <p className="description">{note.description}</p>
            <input
              type="checkbox"
              checked={note.isCompleted}
              onChange={() => handleCheck(note.id)}
            />
            {note.isCompleted && <span className="completed"> completed</span>}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

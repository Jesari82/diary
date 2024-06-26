import React, { useState, useEffect } from "react";
import { fetchEntries, addEntry } from "./utils/storage";

function App() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: "", content: "" });

  useEffect(() => {
    const loadedEntries = fetchEntries();
    setEntries(loadedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    if (addEntry(newEntry)) {
      setEntries([newEntry, ...entries]);
      setNewEntry({ title: "", content: "" }); // Reset form
    } else {
      console.error("Failed to add entry");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEntry({ ...newEntry, date: new Date().toISOString() });
  };

  return (
    <div>
      <h1>My Diary App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newEntry.title}
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newEntry.content}
          onChange={(e) =>
            setNewEntry({ ...newEntry, content: e.target.value })
          }
        />
        <button type="submit">Add Entry</button>
      </form>

      <div>
        {entries.map((entry, index) => (
          <div key={index}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <small>{new Date(entry.date).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

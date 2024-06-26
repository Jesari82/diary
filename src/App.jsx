import React, { useState, useEffect } from "react";
import { fetchEntries, addEntry } from "./utils/storage";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch entries when component mounts
    const loadedEntries = fetchEntries();
    setEntries(loadedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    if (addEntry(newEntry)) {
      setEntries([newEntry, ...entries]);
    } else {
      // Handle error
      console.error("Failed to add entry");
    }
  };

  // Rest of your component code...
}

export default App;

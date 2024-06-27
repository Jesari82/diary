import React, { useState, useEffect } from "react";
import { fetchEntries, addEntry } from "./utils/storage";
import Header from "./components/Header";
import Button from "./components/Button";
import Search from "./components/Search";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadedEntries = fetchEntries();
    setEntries(loadedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    if (addEntry(newEntry)) {
      setEntries([newEntry, ...entries]);
    } else {
      console.error("Failed to add entry");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleAddEntry({ ...newEntry, date: new Date().toISOString() });
  // };

  return (
    <body class="header mt-8 bg-gray-100 text-gray-800">
    <Header />
    <main class="main mx-8 border rounded-lg border-gray-300 p-6">
      <Button onEntryData={handleAddEntry}/>
      <Search />
      <List />
    </main>
    <Footer />
    </body>
  )
}

export default App;

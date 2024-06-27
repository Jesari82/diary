
import React, { useState, useEffect } from "react";
import { fetchEntries, addEntry } from "./utils/storage";
import Header from "./components/Header";
import Button from "./components/Button";
import Search from "./components/Search";
import List from "./components/List";
import Footer from "./components/Footer";
import AddEntryForm from "./components/AddEntryForm";
import Modal from "./components/Modal";

function App() {
/*   const [entries, setEntries] = useState([]);
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
  }; */
  const [showModal, setShowModal] = useState(false);

  

  return (
<>
    <Header />
    <main className="main mx-8 border rounded-lg border-gray-300 p-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <AddEntryForm />
      </Modal>

      <Button />
      <Search />
      <List />
    </main>
    <Footer />
    </>
  )
}

export default App;

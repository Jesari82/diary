
import { useEffect, useState } from "react";

import { fetchEntries,validateEntryDate } from "./utils/storage";
import Header from "./components/Header";
import Button from "./components/Button";
import Search from "./components/Search";
import List from "./components/List";
import Footer from "./components/Footer";
import AddEntryForm from "./components/AddEntryForm";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);  //State to show or hide the modal

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const date = new Date();
  const options = {
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric',
  };

  const handleAddButton = () => { 
    //function to show the modal  
    //validation to show the modal
    console.log('dsdsd',validateEntryDate());
    if (validateEntryDate()) {   //get all the entries from the storage
      setShowModal(true);
        }else{
          setShowModal(true); //you can uncomment this line to test the modal
          alert("return tomorrow to add a new entry");
        }
    };

  const [entries, setEntries] = useState([]); //State to fetch the entries
    useEffect(() => {
      const loadedEntries = fetchEntries(); // fetch all enteies from storage and saved in {entries} state
      setEntries(loadedEntries);
    }, []);

  return (
    <>
      <Header />
      <main className="main mx-8 border rounded-lg border-gray-300 p-6">
        <Button onClick={handleAddButton} />
        <Search />
        <List entries={entries}/>
        
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Add Entry</h2>
          <AddEntryForm closeModal={handleCloseModal} setEntries={setEntries} />
        </Modal>
      </main>
      <Footer />
    </>
  )
}

export default App;

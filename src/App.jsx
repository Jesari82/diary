import {useState} from "react";
import AddEntryForm from "./components/add-entry-form.jsx";
import {DiaryEntry} from "./models/diary-entry.js";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [diaryEntry, setDiaryEntry] = useState(new DiaryEntry('','',''));


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

    const handleSaveEntry = (entry) => {
        setDiaryEntry(entry);
        setIsOpen(false);
        console.log('Saved Entry: ', entry);
    }

  return (
      <div>
        <div className='text-2xl'>Coolstes Team ever</div>
        <button onClick={openModal}>Add diary entry</button>
        <AddEntryForm
          isOpen={isOpen}
          onClose={closeModal}
          onSave={handleSaveEntry}
        />
      </div>
  );
};

export default App;
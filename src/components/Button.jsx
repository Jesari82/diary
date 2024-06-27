import React, {useState} from "react";
import AddEntryForm from "./AddEntryForm.jsx";

const Button = ({ onEntryData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSaveEntry = (entry) => {
        onEntryData(entry);
        setIsOpen(false);
        console.log('Saved new entry: ', entry);
    }

    return (
        <div>
            <button
                onClick={openModal}
                className="addButton w-full mb-5 px-4 py-3 bg-teal-900 hover:bg-teal-400 text-white font-bold py-2 px-4 border border-teal-900 rounded"
            >
                Eintrag hinzufügen
            </button>
            <AddEntryForm
                isOpen={isOpen}
                currentDate={new Date().toLocaleString()}
                onClose={closeModal}
                onSave={handleSaveEntry}
            />
        </div>

    );
};


export default Button;  // Don't forget to export the component!
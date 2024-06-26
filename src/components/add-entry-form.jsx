import {useState} from "react";

function AddEntryForm({isOpen, onClose, onSave}) {
    const [entry, setEntry] = useState(
        {
            title: '',
            content: '',
            image: '',
            date: new Date()
        });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(entry);
        onClose();
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEntry(previousEntry => (
            {
                ...previousEntry,
                [name]: value
            }
        ));
    }


    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            maxWidth: '600px',
            backgroundColor: 'grey',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1050,
            animation: 'fadeIn 0.3s'
        }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={entry.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    value={entry.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                />
                <input
                    type="file"
                    name="image"
                    id="inageUpload"
                    value={entry.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                />
                <input
                    type="date"
                    name="date"
                    value={entry.date}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit Entry</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default AddEntryForm;
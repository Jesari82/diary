import {useState} from "react";

function AddEntryForm({isOpen, onClose, onSave}) {          //'isOpen' to determine if the form is open, 'onClose' = function to close to form, 'onSave' =functiont to save the form

    const [entry, setEntry] = useState(                     //State to store the form data  
        {
            title: '',
            content: '',
            image: '',
            date: new Date().toLocaleString()
        });

    const handleSubmit = (event) => {
        event.preventDefault();                         //Prevent the default form submission
        onSave(entry);
        onClose();
    };

    const handleInputChange = (event) => {              //function to update every the entry state, updating the field that changes
        const {name, value} = event.target;
        setEntry(previousEntry => (
            {
                ...previousEntry,
                [name]: value
            }
        ));
    }

    if (!isOpen) return null;                               //If the form is not open, it renders nothing.

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
                    type="text"                                 //title
                    name="title"
                    value={entry.title}
                    onChange={handleInputChange}                //attaches the handleInputChange function to the input's change event
                    placeholder="Title"
                />
                <textarea
                    name="content"                              //content
                    value={entry.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                />
                <input
                    type="file"                                 //image
                    name="image"
                    id="inageUpload"
                    value={entry.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                />
                <p>
                {entry.date}
                </p>
                <button type="submit">Submit Entry</button>
            </form>
            <button onClick={onClose}>Close Entry</button>
        </div>
    )
}

export default AddEntryForm;
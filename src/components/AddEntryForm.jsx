import {useState} from "react";

function AddEntryForm({isOpen, currentDate, onClose, onSave}) {          

    const [entry, setEntry] = useState(
        {
            title: '',
            content: '',
            image: '',
            date: ''
        });

    const handleSubmit = (event) => {
        event.preventDefault();                         
        onSave(entry);
        setEntry({
                title: '',
                content: '',
                image: '',
                date: ''
            })
        onClose();
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEntry(previousEntry => (
            {
                ...previousEntry,
                date: currentDate,
                [name]: value
            }
        ));
    }

    //If the form is not open, it renders nothing.
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            backgroundColor: 'green',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1050,
            animation: 'fadeIn 0.3s'
        }}>
            <form onSubmit={handleSubmit}
                  style={{
                      display:"flex",
                      gap: "5px",
                      flexDirection: "column"
                  }}
            >
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
                    placeholder="Write down your thoughts here"
                    rows={15}
                    style={{resize : "none"}}
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
                {currentDate}
                </p>
                <button type="submit">Speichern</button>
            </form>
            <button onClick={onClose}>x</button>
        </div>
    )
}

export default AddEntryForm;
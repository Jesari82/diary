import {useState} from "react";
import { addEntry } from "../utils/storage";

const AddEntryForm = ({closeModal,setEntries}) => {

  const [entry, setEntry] = useState(  //State to store the form data  
    {
        title: '',
        content: '',
        image: null,
        date: new Date().toLocaleString('de-DE', {
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric',
        })
    });


    const handleInputChange = (event) => {  //function to update every the entry state, updating the field that changes
      const { name, value, files } = event.target;
      if (name === 'image') {
        const selectedFile = files[0];
        if (selectedFile && selectedFile.size < 2000000) { // Check file size (e.g., < 2MB)

          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = () => {
            setEntry(prevState => ({
              ...prevState,
              image: reader.result
            }));
          };
        } else {
          setErrorMessage('File is too large or not selected');
        }
      } 
      else 
      {
        setEntry(previousEntry => (
          {
              ...previousEntry,
              [name]: value
          }
        ));
      } 
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(entry); // Save the entry to local storage
        setEntries((prevEntries) => [entry, ...prevEntries]);   // Add the new entry to the entries state withou reload the page
        closeModal(); // Close the modal
        setEntry({title: '', content: '', image: '', date: new Date().toLocaleString()}); // Clear the form
      };
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={entry.title}
            onChange={handleInputChange}
            name="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">content</label>
          <textarea
            name="content"                            
            value={entry.content}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
            placeholder="Content"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <p>
          {entry.date}
          </p>
        </div>  

        <button type="submit" className="bg-teal-900 text-white px-4 py-2 rounded">
          Add Entry
        </button>
      </form>
    );
  };
  

export default AddEntryForm;
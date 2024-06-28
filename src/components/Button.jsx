const Button = ({onClick}) => {
    return (
        <button 
            className="addButton w-full mb-5 px-4 py-3 bg-teal-900 hover:bg-teal-400 text-white font-bold py-2 px-4 border border-teal-900 rounded"
            onClick={onClick}
            >
            Eintrag hinzufügen
        </button>
    );
  };
  export default Button;  // Don't forget to export the component!


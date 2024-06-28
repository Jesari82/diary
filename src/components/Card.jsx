const Card = ({index,entry}) => {
    return (
        <li className="card flex-initial min-w-[600px] border flex rounded-lg border-gray-300 p-4">
            <div className="py-10">
                <time dateTime="2024-06-25">{entry.date}</time>
            </div>
            <div className="py-10 pl-10">
                <h2>{entry.title}</h2>
            </div>
            <div className="py-10 pl-10">
                <p>{entry.content}</p>
            </div>
            <div className="pl-10">
                <img src={entry.image} alt="Bild2" className="w-52" />
            </div>
        </li>
    );
  };
  
  export default Card;  // Don't forget to export the component!

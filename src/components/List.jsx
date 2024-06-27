import Card from "./Card";

const List = ({entries}) => {

    return (
        <ul className="entries pt-4 flex flex-wrap justify-between gap-4">
            {entries.map((entry, index) => (
                <Card key={index} entry={entry} />
            ))  }
        </ul>
    );
  };
  
  export default List;  // Don't forget to export the component!
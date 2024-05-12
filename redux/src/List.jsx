import ListItem from "./ListItem.jsx";
import {useSelector} from "react-redux";

export default function List({notes,onEdit}) {
    //const notes = useSelector((state) => state.notes);
console.log("notes list",notes)
    if (notes.length === 0) {
        return;
    }

    return (
        <ul>
            {notes.map((item) => <li key={item.id}>
                <ListItem name={item.name} current={item.current}
                          onEditNote={() => onEdit?.call(null, item.id)} id={item.id}/>
            </li>)}
        </ul>
    );
}


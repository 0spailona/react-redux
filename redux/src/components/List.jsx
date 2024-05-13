import ListItem from "./ListItem.jsx";

export default function List({notes, onEdit}) {

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


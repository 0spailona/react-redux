import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {DELETE_NOTE} from "../redux/actions.ts";

export default function ListItem({name, current, onEditNote, id}) {
    const dispatch = useDispatch();

    return (
        <div className="d-flex gap-2 align-items-center">
            <span>{name}</span>
            <span>{current}</span>
            <Button variant="dark" title="edit" onClick={() => onEditNote?.call(null)}>
                <FontAwesomeIcon icon={faPen}/>
            </Button>
            <Button variant="danger" title="delete"
                    onClick={() => dispatch({type: DELETE_NOTE, payload: id})}>
                <FontAwesomeIcon icon={faXmark}/>
            </Button>
        </div>
    );
}
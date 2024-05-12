import {Button} from "react-bootstrap";
import React from "react";
import {connect} from "react-redux";
import {DELETE_NOTE, SAVE_NOTE} from "./actions.ts";
import {faShare, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//import StateNotes from "./typeConfig.ts";


class Form extends React.Component {
    state = {
        inputNameValue: "",
        inputCurrentValue: "",
        mode: "add",
        editNoteId:""
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (!this.props.editNoteId) {
            return;
        }

        if (this.state.editNoteId !== this.props.editNoteId) {
           const mode = this.props.mode.add? "add" : "edit"
            this.setState({
                inputNameValue: this.props.editNote.name,
                inputCurrentValue: this.props.editNote.current,
                mode: this.props.mode,
                editNoteId:this.props.editNoteId
            });
        }

    }

    onFormSubmit(e) {
        e.preventDefault();

        console.log("submit");
        const formData = new FormData(e.currentTarget);
        const name = Object.fromEntries(formData).name.toString();
        const current = parseInt(Object.fromEntries(formData).current.toString());

        this.props.save({id: this.state.editNoteId || null, name, current: Number(current)});
        //this.props.onSubmit?.call(null)
        //console.log("state", this.props.state);
        this.showAddForm()
    }

    onChangeInput(e) {
        //console.log("input");
        if (e.target.name === "name") {
            this.setState({inputNameValue: e.target.value});
        }
        else {
            this.setState({inputCurrentValue: e.target.value});
        }
    }

    showAddForm(){
        this.setState({inputNameValue: "", inputCurrentValue: "",mode:"add",editNoteId:""});
    }

    render() {
        //console.log("form props.editNote", this.props.editNote)
        //console.log("form inputNameValue",this.state.inputNameValue);
        return (
            <form className="d-flex gap-2" onSubmit={this.onFormSubmit.bind(this)}>
                <input className="w-25" type="text" name="name" value={this.state.inputNameValue}
                       onChange={this.onChangeInput.bind(this)} required/>
                <input className="w-25" type="text" name="current" value={this.state.inputCurrentValue}
                       pattern={"[0-9]*"} onChange={this.onChangeInput.bind(this)} required/>
                <Button variant="dark" type="submit"><FontAwesomeIcon icon={faShare} /></Button>
                {this.state.mode === "edit" ? <Button variant="danger" title="not save" onClick={()=> this.showAddForm()}><FontAwesomeIcon icon={faXmark} /></Button> : null}
            </form>
        );
    }
}


const mapStateToProps = (state, _props) => {
    return {editNote: state.notes.find(note => note.id === _props.editNoteId)};
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: note => dispatch({type: SAVE_NOTE, payload: note})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
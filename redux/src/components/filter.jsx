import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBroom, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default class Filter extends React.Component {

    state = {
        inputNameValue: ""
    };

    onChangeInput(e) {
        if (this.state.inputNameValue.length === 0) {
            this.props.onFilter.call(null, "");
        }
        this.setState({inputNameValue: e.target.value});
    }

    render() {

        return (
            <div className="d-flex gap-2">
                <input className="filter" name="searchText" value={this.state.inputNameValue}
                       onChange={this.onChangeInput.bind(this)}/>
                <Button variant="dark"
                        onClick={() => this.props.onFilter?.call(null, this.state.inputNameValue)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </Button>
                <Button variant="dark" onClick={() => {
                    this.props.onFilter?.call(null, "");
                    this.setState({inputNameValue: ""});}}>
                    <FontAwesomeIcon icon={faBroom}/>
                </Button>
            </div>
        );
    }
}
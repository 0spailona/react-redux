import List from "./List.jsx";
import {connect} from "react-redux";
import React from "react";
import {GlobalState, StateNotes} from "../config/typeConfig.ts";
import Form from "./form";
import Filter from "./filter.jsx";
import filterFunc from "../utilits/filterFunc";

type Props = {
    notes: StateNotes
}

type OwnState = {
    mode: {
        add: boolean, edit: boolean, filter: boolean
    }, editNoteId: string | null, notes: StateNotes
}

class App extends React.Component<Props> {

    state: OwnState = {
        mode: {
            add: true,
            edit: false,
            filter: false
        },
        editNoteId: null,
        notes: []
    }

    componentDidUpdate() {
        if (!this.state.mode.add) {
            this.setState({mode: {add: true}, editNoteId: null})
        }
    }

    changeMode(newMode: string, id: string | null, filter: string | null) {

        switch (newMode) {
            case "add": {
                this.setState({mode: "add", editNoteId: null})
                return
            }
            case "edit": {
                this.setState({mode: {edit: true, add: false}, editNoteId: id})
                return
            }
            case "filter": {
                const notes = filterFunc(filter, this.props.notes)
                this.setState({filter: true, notes})
                return
            }
        }
    }

    render() {

        return (
            <div className="d-flex flex-column gap-2">
                <Filter onFilter={(filter: string) => this.changeMode("filter", null, filter)}></Filter>
                <div className="forms d-flex flex-column flex-grow-1 gap-2 overflow-y-hidden">
                    <Form mode={this.state.mode} editNoteId={this.state.editNoteId || null}/>
                </div>
                <List notes={this.state.notes.length === 0 ? this.props.notes : this.state.notes}
                      onEdit={(id: string) => this.changeMode("edit", id, null)}/>
            </div>
        )
    }
}

const mapStateToProps = (state: GlobalState, _props: any) => {
    return {notes: state.notes};
};

export default connect(mapStateToProps, null)(App);
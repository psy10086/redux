import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactActions from "./actions/contactAction.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  handlChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    let contact = {
      name: this.state.name
    };
    this.setState({ name: "" });
    this.props.createContact(contact);
  }
  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li className="list-group-item clearfix" key={index}>
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Clientside Contacts Application</h1>
        <hr></hr>

        {/* <ul>
          {this.props.contacts.map((contact, index) => 
            <li key={index}>{contact}</li>
          )}
        </ul> */}

        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handlChange} />
            <input type="submit"></input>
          </form>

          <hr />
          { <ul className="list-group">
            {this.props.contacts.map((contact, i) => this.listView(contact, i))}
          </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactActions.createContact(contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
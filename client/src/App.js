import React, {Component} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stringInfo: ''
        }
    }
    submitChange =(event) =>{
        fetch('/api/todo',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: "testuser",
                        todo: this.state.stringInfo,
                        isDone: "false"
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    };

    InputOnChange =(event) =>{
        this.setState({stringInfo: event.target.value})


    };

    InputUser =(event) =>{
        this.setState({testuser: event.target.value})


    };

    deleteByID(id) {
        fetch('/api/todo',
            {
                method: "DELETE",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };

    render() {
        fetch('/api/todo/testuser')
            .then(data => data.json())
            .then(response => this.setState({data: response}));

        return (
            <div className="App">
                <ToDoList arr={this.state.data}
                          deleteFunction={this.deleteByID}/>
                <form onSubmit={this.submitChange}>

                    <lable> User Name
                        <input type="text" value={this.state.testuser} onChange={this.InputUser}placeholder={"username"}/>
                    </lable>

                    <label> Todo
                    <input type="text" value={this.state.stringInfo} onChange={this.InputOnChange}placeholder={"To Do"}/>
                    <input type="submit" value="Submit" />
                    </label>

                </form>

            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value,
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items:[...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item){
        const array= this.state.items;
        const index = array.indexOf(item);
        console.log(index);
        array.splice(index, 1);
        this.setState({
            items: array
        }, () => console.log(this.state.items));
    }
    renderTodos(){
        return this.state.items.map((item)=> {
            return (
                <div className="list-group-item d-flex justify-content-between align-items-center mt-4" key={item}>
                    {item}<button className="btn btn-primary" onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 align="center">My To Do List</h1>
                <form className="form-inline justify-content-center mt-4">
                    <input 
                    className="form-control mr-2"
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="add item" 
                    onChange={this.onChange.bind(this)}
                    />
                    <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;
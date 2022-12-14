import React from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import {toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: 'todo1', title: "Doing homework"},
            {id: 'todo2', title: "FixBug"},
            {id: 'todo3', title: "Learnt Reactjs"},

        ]
    }

    addnewTodo = (todo)=>{
        this.setState({
        listTodos:[...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }
    render(){
        let {listTodos} = this.state
        return(
            <div className="list-todo-container">
                <AddTodo
                addnewTodo= {this.addnewTodo}
                />
                <div className="list-todo-content" >
                    {listTodos && listTodos.length >0 &&
                    listTodos.map((item, index)=>{
                        return(
                            <div className="todo-child" key={item.id}>
                            <span> {item.title} + {index+1} </span >
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        )
                    })
                         
                    }
                  
                
                </div>
                </div>
        )
    }

}
export default ListTodo;
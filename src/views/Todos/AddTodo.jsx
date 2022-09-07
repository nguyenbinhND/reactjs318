import React from "react";
import {toast } from 'react-toastify';

class AddTodo extends React.Component{

    state= {
        title: ''
    }

    hadelOnchangeTitle = (event)=>{
        this.setState ({
            title: event.target.value
        })
    }

    hadelOnclickTodo = ()=>{
        if(!this.state.title ){
            toast.error("Missing title!")
            return ;
        }

        let todo = {
            id:Math.floor(Math.random()* 100) ,
            title: this.state.title
        }

        this.props.addnewTodo(todo)
        this.setState({
            title: ''
        })
    }


    render(){
        let {title} = this.state
        return(
            <div className="add-todo">
                <input type="text" 
                value={title}
                    onChange = {(event)=>this.hadelOnchangeTitle(event)}/>
                    <button className="add" type="button"
                    onClick={()=>this.hadelOnclickTodo()}
                    >Add</button>
            </div>
        )
    }
}   

export default AddTodo;
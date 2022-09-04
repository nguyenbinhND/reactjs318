import React from "react";

class AddComponents extends React.Component {

    state = {
        title : '',
        salary: '',
    }
    handelOnchangeTitleJob = (event)=>{
        this.setState({
          title: event.target.value
     
        })
      }
  
      handelOnchangSalary = (event)=>{
          this.setState({
            salary: event.target.value
          })
        }


        handellSubmit = (event)=>{
            if(!this.state.title || !this.state.salary ){
                alert(" Missing required")
                return ;
            }
            event.preventDefault()
            console.log(this.state)
            this.props.addnewJob({
                id:Math.floor(Math.random()* 100) ,
                title: this.state.title,
                salary: this.state.salary
            })

            this.setState({
                title : '',
                salary: ''
            })
          }
        
  
    render(){
        return (
            <form>
            <label htmlFor="fname">Job's Title:</label><br/>
            
            <input type="text"  value={this.state.title}
            onChange= {
                (event)=>this.handelOnchangeTitleJob(event)    
            }
            /><br/>
            <label htmlFor="lname">Salary:</label><br/>
            <input type="text" value={this.state.salary}
            onChange={
                (event)=>this.handelOnchangSalary(event)
            }
            /><br/><br/>
            <input type="submit" value="Submit"
            onClick={(event)=>this.handellSubmit(event)}
            />
        </form> 
        )
    }
}

export default AddComponents
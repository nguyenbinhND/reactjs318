import React from 'react';

class Mycomponents extends React.Component {
    state = {
        name: ' binh',
        age: 18
    }
    
    handelonchangeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    
    render(){
    
        return(
            <>
            <div className='first'>
                <input type="text" value={this.state.name} name="" id="" 
                onChange={(event)=> this.handelonchangeName(event)}
                />
                 hello dan it , my name {this.state.name}</div>
            <div> I am  {this.state.age}</div>
            </>
         

        )
    }
}

export default Mycomponents;
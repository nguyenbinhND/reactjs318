import React from 'react';
import Child from './Child';
import AddComponents from './AddComponents';

class Mycomponents extends React.Component {

    state = {
      
        arrjob: [
          {id: '1', title: " Developer", salary: '2000'},
          {id: '2', title: " Tester", salary: '3000'},
        ]
    }

    addnewJob = (job)=>{
      console.log('check job', job)
      this.setState({
        arrjob: [...this.state.arrjob, job]
      })
    }
   
    
    render(){
    
        return(
            <>

            <AddComponents 
            addnewJob = {this.addnewJob}
            />
           
            <Child 
            arrjob = {this.state.arrjob}
            
            />
            </>
        )

      
    }
}

export default Mycomponents;
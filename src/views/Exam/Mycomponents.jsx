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

    deleteAjob = (job)=>{
      let currenJob = this.state.arrjob;
      currenJob = currenJob.filter(item => item.id !== job.id)
      this.setState({
        arrjob : currenJob
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
            deleteAjob = {this.deleteAjob}
            
            />
            </>
        )

      
    }
}

export default Mycomponents;
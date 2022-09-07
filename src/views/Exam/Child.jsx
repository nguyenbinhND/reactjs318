import React from 'react';
import './Demo.scss'


class Child extends React.Component {

    // state = {
    //     firstName : '',
    //     lastName: ''
    // }
    // handelOnchange = (event)=>{
    //   this.setState({
    //     firstName: event.target.value
   
    //   })
    // }

    // handelOnchangelastName = (event)=>{
    //     this.setState({
    //       lastName: event.target.value
    //     })
    //   }

    //   handellSubmit = (event)=>{
    //    event.preventDefault()
    //     console.log(this.state)
    //   }
    state = {
      showjob : false
    }
    handeShowhide = ()=>{
      this.setState({
        showjob : !this.state.showjob
      })
    }

    handeonClickdelete = (job)=>{
      this.props.deleteAjob(job)
    }

    render(){
        let {name, age, arrjob} = this.props;
        let {showjob} = this.state;

        return(
            <>
            {showjob === false && 
             <div> 
              <button className="btn-show"  onClick={this.handeShowhide}>Show</button>
            </div>
            }
         
           
            {showjob && 
            <>
             <div className='job-list'>
              {/* child Component : {name} - {age}-{arrjob} */}

              {
                arrjob.map((item)=>{
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}  <> </>  
                      <span  onClick={()=>this.handeonClickdelete(item)}>x</span>
                    </div>
                  )
                })
              }
            </div>
            <div> 
              <button onClick={this.handeShowhide}>Hide</button>
            </div>
            </>
            }
            </>
        )

      
    }
}

// function components

// const Child =(props)=>{
//   let {name, age, arrjob} = this.props;
//   return (
//     <>
//     <div className='job-list'>
//       {/* child Component : {name} - {age}-{arrjob} */}

//       {
//         arrjob.map((item)=>{
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           )
//         })
//       }
//     </div>
//     </>
//   )
// }

export default Child;
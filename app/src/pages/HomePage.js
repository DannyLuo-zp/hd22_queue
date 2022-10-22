
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = ()=>{
    const [count,setCount] = useState(0)
    const navigate = useNavigate()
    const handle_submit = ()=>{
      //call backend API
  
      navigate('/thank-you')
  
    }
    return (
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-mobile is-centered">
  
            <div class = "column is-two-thirds">
              <span class = "title is-4">
                Where are you in the queue?
              </span>
            </div>
  
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center is-flex-direction-column">
                <span class = "title ">{count}</span>
                <span style={{fontSize:"1em"}}>people in front of me</span>
              </div>
              
            </div>
  
            <div class = "column is-two-thirds m-5 pt-6">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " onClick={()=>setCount(count+1)}>Click</button>
              </div>
            </div>
  
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " onClick={handle_submit}>Submit</button>
              </div>
            </div>
  
  
            
  
          </div>
        </div>
      </div>
    )
  }
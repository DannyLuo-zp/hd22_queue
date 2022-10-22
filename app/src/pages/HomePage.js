
import { useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';

export const HomePage = (props)=>{
    const checkpoint = useParams()
    console.log(checkpoint)

    const [count,setCount] = useState(checkpoint['checkpoint'] * 10)
    const navigate = useNavigate()
    const handle_submit = ()=>{
      //call backend API
      navigate('/thank-you')
  
    }
    
    


    return (
      <div class="hero-body">
        <Outlet />
        <div class="container">
          <div class="columns is-multiline is-mobile is-centered">
  
            <center><div class = "column is-two-thirds">
              <span class = "title is-6">
                Where are you in the queue?
              </span>
            </div></center>
  
            <div class = "column is-two-thirds">
            <center><div class = "is-flex is-justify-content-center is-flex-direction-column">
                <span class = "title ">{count}</span>
                <span style={{fontSize:"1em"}}>people in front of me</span>
              </div></center>
              
            </div>
  
            <div class = "column is-two-thirds m-5 pt-6">
              <div class = "is-flex is-justify-content-center ">
                <div class = "field is-grouped">
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(count+1)}>+1</button>
                  </p>
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(count>0?count-1:0)}>-1</button>
                  </p>
                </div>
              </div>
            </div>
  
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " style = {{ background: "#F6CF57"}} onClick={handle_submit}>Submit</button>
              </div>
            </div>
  
  
            
  
          </div>
        </div>
      </div>
    )
  }
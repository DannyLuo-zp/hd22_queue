import { useEffect, useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { get_all_from_location } from '../api/queue';

export const HomePage = (props)=>{
    const checkpoint = useParams()
    console.log(checkpoint)

    const upperbound = checkpoint['checkpoint'] * 10
    const [count,setCount] = useState(checkpoint['checkpoint'] * 10)
    const navigate = useNavigate()
    const handle_submit = ()=>{
      //call backend API
      navigate('/thank-you')
  
    }
    const [data, setData] = useState(null); 
    useEffect(() => {
        get_all_from_location('MailCenter')
        .then((data) =>{
            console.log(data)
            setData(data);
        }).catch(err => alert(err));
    }, []);

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
              <div class = "field is-grouped is-flex is-justify-content-center">
                <p class = "control is-justify-content-center">
                  <span class = "title ">{count}</span>
                </p>
                <p class = "control is-justify-content-center">
                  <img src = "https://cdn.dribbble.com/users/740477/screenshots/6549643/pikachurundrib.gif" width = "50px" height = "40px" />
                </p>
              </div>
                <span style={{fontSize:"1em"}}>people in front of me</span>
              </div></center>
              
            </div>
  
            <div class = "column is-two-thirds m-5 pt-6">
              <div class = "is-flex is-justify-content-center ">
                <div class = "field is-grouped">
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(count<upperbound?count+1:upperbound)}>+1</button>
                  </p>
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(count>upperbound-10?count-1:upperbound-10)}>-1</button>
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
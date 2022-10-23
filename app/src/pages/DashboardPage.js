import { Realtime } from "../components/Realtime";
import { Chart } from "../components/Chart";
import { useEffect, useState } from "react";
import {  has_previous_submission, get_all_from_location } from "../api/queue";
import { gen_data } from '../data/data_gen'

const filterData = (day, data) => {
  var current;
  const ret = [];
  data.sort(function(a,b){
    return a.TimeStamp-b.TimeStamp;
  })
  for (var i = 0; i < data.length; i++) {
    if (data[i][3].getDay() == day) {
      current = data[i][3];
      break;
    }
  }
  console.log(current)
  const arr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
  for (var i = 0; i < arr.length; i ++) {
    var length = 0;
    for (var j = 0; j < data.length; j++) {
      if (data[j].TimeStamp == current && data[j].TimeStamp.getHours() == arr[i]) {
        if (data[j].QueueLength > length) {
          length = data.QueueLength;
        }
      }
    }
    ret.push({"Hour": "" + arr[i],"QueueLength": length});
  }
  console.log("In filter data:" + ret)
  return ret;
}

const ChooseDate = (props) => {
  const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  // ChooseDate component give each date button a corresponding filterData call
  // so that when a date button is called, it process raw data into the data needed
  // by the chart and set the data with hook. This re-renders the chart. 
  return (
    <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
        <span>View other dates</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        {
          dates.map(res => <a href="#" onClick={()=>{
            props.setData(filterData(dates.indexOf(res), props.rawData))
          }} class="dropdown-item">{res}</a>)
        }
      </div>
    </div>
  </div>
  );
}

const DashBoard = (props)=>{
  const [data, setData] = useState({"Day": "Monday","Hour": "9:00","QueueLength": 30})  
  const [rawData, setRawData] = useState({"Day": "Monday","Hour": "9:00","QueueLength": 30})
  // After passing user auth, make a call to backend to retrieve raw data
  // Set raw data and pass it into choseData component
  useEffect(() => {
    setRawData(gen_data())
  }, []);

  return (
    <div>
      {/* <button class = "button" onClick={()=>{window.localStorage.clear()}}>Clear Browswer Cache</button> */}
      <Realtime />
      <div class="columns is-multiline is-mobile is-centered mt-6">
          <div class = "column is-full ml-6" style={{height:"300px",width:"500pxs"}}>
            <ChooseDate setData={setData} rawData={rawData}/>
            <span class = "subtitle ml-6">Traffic By Day of Week</span>
            <Chart data={data}/>
        </div>
      </div>
    </div>
  )
}

const AskIDComponent = (props)=>{
  const [input,setInput] = useState(null)
  const handle_submit = ()=>{
    has_previous_submission('MailCenter',input).then(
      (res)=>{
        console.log(res)
        if(res.length!=0){
          props.setStep(1)
          console.log("Set step to 1")
          window.localStorage.setItem("isAuth","TRUE")
        }else{
          props.setStep(2)
        }
      }
    )
  }
  return (
    <div class = "container is-flex is-flex-direction-column is-align-items-center mt-6">
      <span class = "title is-6"  style ={{width:"50%"}} >
        We need to verify if you have previous contribution to our page!!
      </span>
      <input class="input is-primary" style ={{width:"50%"}} type="text" placeholder="Enter NetID" onChange = {(e)=>setInput(e.target.value)}/>
      <a class = "button m-4 p-4" style ={{width:"50%"}} onClick={handle_submit}> Submit NetID </a>
    </div>
  )
}

const NotAuthorizedComponent = (props)=>{
  return (
    <div class = "container is-flex is-flex-direction-column is-align-items-center mt-6">
      <span class = "title is-6"  style ={{width:"50%"}} >
        Sorry :( You are not authorized to view the content.
        Please make contribution by logging your queue status next time!
      </span>

      <a class = "button m-4 p-4" style ={{width:"50%"}} onClick={()=>props.setStep(0)}> Go back to submit page </a>
    </div>
  )
}

export const DashboardPage = ()=>{
    // 0: AskIDComponent 1: Dashboard 2: not authorized
    const [step,setStep] = useState(0)
    useEffect(()=>{
      if(window.localStorage.getItem("isAuth")!=null){
        console.log("verify auth from local storage")
        setStep(1)
        return
      }
      setStep(0)
    },[])

    const renderContent = ()=>{
      switch (step) {
        case 0:
          return <AskIDComponent setStep = {setStep}/>;
        case 1:
          return <DashBoard setStep = {setStep}/>;
        case 2:
          return <NotAuthorizedComponent setStep = {setStep}/>;
        default:
          return <AskIDComponent setStep = {setStep}/>;
      }
    }
  
    return (

        <div class="container">
          {renderContent()}
        </div>
    )
}

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    LineChart,
    Line,
    Legend,
  } from "recharts";

import { useState } from "react";

import { Realtime } from "../components/Realtime";
import { Chart } from "../components/Chart";

export const DashboardPage = ()=>{
    const [data, setData] = useState({"Day": "Monday","Hour": "9:00","QueueLength": 30})  
    console.log(data)
    return (
        <div class="container">
          <Realtime />
            <div class="columns is-multiline is-mobile is-centered mt-6">
              <div class = "column is-full ml-6" style={{height:"300px",width:"500pxs"}}>
                <ChooseDate setData={setData}/>
                <span class = "subtitle ml-6">Traffic By Day of Week</span>
                <Chart data={data}/>
            </div>
            </div>
        </div>
    )
}

const ChooseDate = (props) => {
  const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const filter = () => {return {"Day": "Tuesday","Hour": "19:00","QueueLength": 120}}
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
          dates.map(res => <a href="#" onClick={()=>{props.setData(filter(dates.indexOf(res)))}} class="dropdown-item">{res}</a>)
        }
      </div>
    </div>
  </div>
  );
}
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

import { Realtime } from "../components/Realtime";
import { Chart } from "../components/Chart";

export const DashboardPage = ()=>{
    const data = [
        {
          "Day": "Monday",
          "Hour": "9:00",
          "QueueLength": 30,
        },
        {
          "Day": "Monday",
          "Hour": "10:00",
          "QueueLength": 50,
        },
        {
          "Day": "Monday",
          "Hour": "11:00",
          "QueueLength": 60,
        },
        {
          "Day": "Monday",
          "Hour": "12:00",
          "QueueLength": 80,
        },
        {
          "Day": "Monday",
          "Hour": "13:00",
          "QueueLength": 100,
        },
        {
          "Day": "Monday",
          "Hour": "14:00",
          "QueueLength": 20,
        },
        {
          "Day": "Monday",
          "Hour": "15:00",
          "QueueLength": 10,
        },
        {
          "Day": "Monday",
          "Hour": "16:00",
          "QueueLength": 10,
        },
        {
          "Day": "Monday",
          "Hour": "17:00",
          "QueueLength": 10,
        },
        {
          "Day": "Monday",
          "Hour": "18:00",
          "QueueLength": 10,
        }
      ];
    
  
    return (
        <div class="container">
          <Realtime />
            <div class="columns is-multiline is-mobile is-centered mt-6">
              <div class = "column is-full ml-6" style={{height:"300px",width:"500pxs"}}>
                
                <div class="dropdown is-hoverable">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                      <span>Day</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Monday
                      </a>
                      <a href="#" class="dropdown-item">
                        Tuesday
                      </a>
                      <a href="#" class="dropdown-item">
                        Wednesday
                      </a>
                      <a href="#" class="dropdown-item">
                        Thursday
                      </a>
                      <a href="#" class="dropdown-item">
                        Friday
                      </a>
                      <a href="#" class="dropdown-item">
                        Saturday
                      </a>
                      <a href="#" class="dropdown-item">
                        Sunday
                      </a>
                    </div>
                  </div>
                </div>

                <span class = "subtitle ml-6">Traffic By Day of Week</span>
                <div class ="mb-3"></div>
                <Chart data={data}/>
            </div>
            </div>
        </div>
    )
}
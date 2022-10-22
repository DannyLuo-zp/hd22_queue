import { useEffect, useState } from "react";
import { add_record, get_all_from_location } from "../api/queue";

export const APITestPage = ()=>{
    const [datalist, setDatalist] = useState([]); 

    useEffect(() => {
        get_all_from_location('MailCenter')
        .then((data) =>{
            console.log(data)
            setDatalist(data)

        }).catch(err => alert(err));
    }, []);

    return (
        <div class="hero-body">
            <div class="container">
            <div class="columns is-multiline is-mobile is-centered">
    
                <div class = "column is-two-thirds is-flex is-flex-direction-column">
                    <span class = "title is-4">
                        API Test 
                    </span>
                    {datalist.map(item => (
                        <li key={item.NetID}>
                            <span>{item.NetID}</span>
                            <span>{item.QueueLength}</span> 
                            <span>{item.TimeStamp.toUTCString()}</span> 
                        </li>
                    ))}
                    <a class = "button" onClick={()=>add_record('MailCenter','zl230',10)}>Generate</a>
            
                </div>

            </div>
            </div>
        </div>

    )
}
import { useState } from "react";
import { get_all_from_location } from '../api/queue'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Realtime = () => {
    const [lowerBound, setlowerBound] = useState(0);

    const update = () => {
        var data;
        get_all_from_location('MailCenter')
        .then((res) =>{
          data = res;
        }).catch(err => alert(err));

        
        setlowerBound(lowerBound + 1);
    }

    return (
        <div>
            <p>There are at least {lowerBound} people waiting in line.</p>
            <p>You need to wait approximately {lowerBound * 2} minutes.</p>
            <div class = "column is-two-thirds">
            <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " onClick={update}>Refresh</button>
              </div>
            </div>
        </div>
    );
}
import { useState } from "react";

export const Realtime = () => {
    const [lowerBound, setlowerBound] = useState(0);

    const update = () => {
        console.log("fetch latest data from database");
        console.log("execute algorithm to determine the return value");
        setlowerBound(lowerBound + 1);
    }

    return (
        <div>
            <p>There are at least {lowerBound} people waiting in line.</p>
            <p>You need to wait approximately {lowerBound * 2} minutes.</p>
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " onClick={update}>Refresh</button>
              </div>
            </div>
        </div>
    );
}
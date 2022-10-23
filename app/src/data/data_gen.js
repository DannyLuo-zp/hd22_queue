import firebase from "firebase/app";
import { add_record_gen } from "../api/queue";

const prob=(h)=>{
    const hour_distribution = {
        9:0.2,
        10:0.3,
        11:0.4,
        12:0.9,
        13:0.4,
        14:0.7,
        15:0.4,
        16:0.8,
        17:0.9,
        18:0.9
    }
    let prob = hour_distribution[h]
    return Math.random() < prob;
}
const get_queue_len = (h)=>{
    const hour_len = {
        9:10,
        10:25,
        11:20,
        12:10,
        13:25,
        14:10,
        15:15,
        16:20,
        17:19,
        18:18
    }
    return hour_len[h]
}

export const gen_data = ()=>{
    var l=[]
    var id_list = ['zl230','ab123','cd456']
    const t = firebase.firestore.Timestamp.fromDate(new Date());
    var n_month = 1
    var n_day = 30
    var hours = [9,10,11,12,13,14,15,16,17,18]
    var n_min = 60
    for(let month = 0;month<n_month;month++){
        for(let day = 0;day<n_day;day++){
            hours.forEach(h=>{
                for(let min=0;min<n_min;min++){
                    if(prob(h)){
                        var date = new Date(2022,month,day,h,min)
                        // create a new record
                        var record = ["MailCenter",id_list[0],get_queue_len(h),date]
                        l.push(record)
                    }
                }
            })
        }
    }
    return l
}
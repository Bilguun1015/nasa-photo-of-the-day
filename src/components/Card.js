import React, { useEffect, useState } from "react";
import axios from "axios";
import DateInput from "./DateInput";
import ImageDiv from "./ImageDiv";
import TitleDiv from "./TitleDiv";
import ParagraphDiv from "./ParagraphDiv";
import ButtonExampleGroupMixed from "./Button";
//import ModalExampleDimmer from "./Modal"

const Card = () => {
    const [data, setImage] = useState([]);
    const [date, setDate] = useState('');
    console.log(date)
    function changeDate(e){
        e.preventDefault();
        let userDate = e.target[0].value;
        setDate(userDate)
    }

    useEffect( () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=S8I4hQT1Gkj1cNOEGmgUCcBRsFG4dpIIFm5rryyy&date=${date}`)
            .then(response => {
                const img = response.data
                setImage(img);
            })
    }, [date]);
    return (
     <div className="container">
        <TitleDiv title={data.title}/>
        {/* <ModalExampleDimmer /> */}
        <DateInput changeDate = {changeDate}/>  
        <ImageDiv image = {data.url}/>
        <ButtonExampleGroupMixed />
       
        <ParagraphDiv parag={data.explanation}/>
        
    </div>
    
    )
}


export default Card;
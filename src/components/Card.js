import React, { useEffect, useState } from "react";
import axios from "axios";
import DateInput from "./DateInput";
import ImageDiv from "./ImageDiv";
import TitleDiv from "./TitleDiv";
import ParagraphDiv from "./ParagraphDiv"

const Card = () => {
    const [data, setImage] = useState([]);
    const [date, setDate] = useState('2017-07-13');

    useEffect( () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=S8I4hQT1Gkj1cNOEGmgUCcBRsFG4dpIIFm5rryyy&date=2017-07-13`)
            .then(response => {
                const img = response.data
                setImage(img);
            })
    },[]);
    return (
     <div>
        <DateInput />  
        <TitleDiv title={data.title}/>
        <ImageDiv image = {data.url}/>
        <ParagraphDiv parag={data.explanation}/>
    </div>
    )
}


export default Card;
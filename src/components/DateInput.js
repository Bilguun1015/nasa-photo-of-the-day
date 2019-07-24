import React from "react";
import styled from "styled-components";


const StyleF = styled.form`
  text-align : right;
`;

function DateInput ({changeDate}) {
    return (
        <StyleF onSubmit={changeDate}>
            Enter a date (YYYY-MM-DD): 
            <input />
            <input type="submit" />
        </StyleF>
    )
} 
    
  
export default DateInput;
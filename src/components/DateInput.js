import React from "react";


function DateInput ({changeDate}) {
    return (
        <form onSubmit={changeDate}>
            Enter a date (YYYY-MM-DD):
            <input />
            <input type="submit" />
        </form>
    )
} 
    
  
export default DateInput;
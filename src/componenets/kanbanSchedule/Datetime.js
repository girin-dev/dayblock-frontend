import React, { useState } from 'react';

const Datetime=()=>{
  const [today, setToday] = useState(new Date());
  const year  = today.getFullYear(); 
  const month  = today.getMonth() + 1; 
  const day  = `${today.getDate()}`.padStart(2, '0'); 

  const onChangeDate=e=>{
    const date = new Date(today);
    switch(e.target.dataset.type){
      case 'prev':
        date.setDate(date.getDate()-1)
        setToday(date);
        break;
      case 'next':
        date.setDate(date.getDate()+1)
        setToday(date);
        break;
      default:
        throw Error('unhandled exception');
    }
  }

  return (
    // <div key={index} style={style} className="schedule-date">
    <div className="date">
      <button className="btn btn-date" data-type="prev"
        onClick={onChangeDate}
      >&#60;</button>
      {/* <span className="date-selected">{`${year}-${month}-${day}`}</span> */}
      <span className="date-selected">{`${year}-${month}-${day}`}</span>
      <button className="btn btn-date" data-type="next"
        onClick={onChangeDate}
      >&#62;</button>
    </div>
    // </div>
  )
}
export default Datetime;

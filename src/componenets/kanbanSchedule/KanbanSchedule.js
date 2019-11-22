import React from 'react';
import './KanbanSchedule.css';
import Schedule from './Schedule';
import Kanban from '../kanban/Kanban';

const dateSelector=_=>{
  const today = new Date();
  const year  = today.getFullYear(); 
  const month  = today.getMonth() + 1; 
  const day  = `${today.getDate()}`.padStart(2, '0'); 
  return (
    // <div key={index} style={style} className="schedule-date">
    <div className="date">
      <button className="btn btn-date">&#60;</button>
      <span className="date-selected">{`${year}-${month}-${day}`}</span>
      <button className="btn btn-date">&#62;</button>
    </div>
    // </div>
  )
}
const KanbanSchedule = () => {
    return (
      <main className="main">
        <div className="time-selector">
          {dateSelector()}
        </div>
        <div className="block-selector">
          <div className="schedule-info">S</div>
          <select className="schedule-select">
            <option value="Suzy's diary">Suzy's diary</option>
            <option value="Suzy's diary2">Suzy's diary1</option>
            <option value="Suzy's diary3">Suzy's diary2</option>
            <option value="Suzy's diary4">Suzy's diary3</option>
          </select>
        </div>
        <Schedule></Schedule>
        <Kanban></Kanban>
      </main>
    );
};

export default KanbanSchedule;
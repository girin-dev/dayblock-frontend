import React, { useState } from 'react';
import './KanbanSchedule.css';
import Schedule from './Schedule';
import Kanban from '../kanban/Kanban';
import Datetime from './Datetime';

const initData = [
  {id:1, title:"Suzy's diary"},
  {id:2, title:"Suzy's diary1"},
  {id:3, title:"Suzy's diary2"},
  {id:4, title:"Suzy's diary3"},
  {id:5, title:"Suzy's diary4"},
];
const KanbanSchedule = () => {
    const [kanbanList, setKanbanList] = useState(initData);
    const [kanban, setKanban] = useState(kanbanList[0].id);
    const onChange = e =>{
      setKanban(parseInt(e.target.value))
    }
    return (
      <main className="main">
        <div className="time-selector">
          <Datetime/>
        </div>
        <div className="block-selector">
          <div className="schedule-info">S</div>
          <select className="schedule-select" onChange={onChange}>
            { kanbanList.map(kanban=><option key={kanban.id} value={kanban.id}>{kanban.title}</option>)
            }
          </select>
        </div>
        <Schedule></Schedule>
        <Kanban kanban={kanban}></Kanban>
      </main>
    );
};
export default KanbanSchedule;
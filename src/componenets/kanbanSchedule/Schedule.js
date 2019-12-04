import React, {useState, useCallback} from 'react';
import './Schedule.css';
import TaskSchedule from './TaskSchedule';
// import axios from 'axios';

const initialData = [
  {id:1, taskNote:'taskNote 해야함!', type:'urgency', startTime:'08:00', endTime:'12:00'},
  {id:2, taskNote:'밥먹기 해야함!', type:'todo', startTime:'12:00', endTime:'14:00'},
  {id:3, taskNote:'밤을 새볼까나?', type:'todo', startTime:'15:00', endTime:'16:00'},
  {id:4, taskNote:'내일 발표인데 우짜지...', type:'todo', startTime:'17:00', endTime:'19:00'},
  {id:5, taskNote:'taskNote 해야함!', type:'urgency', startTime:'19:00', endTime:'20:00'},
];

const Schedule = () => {
  const [tasks, setTasks] = useState(initialData);
  const [startId, setStartId] = useState(0);
  const [updatePoint, setUpdatePoint] = useState(null);
  const timePosition=[null, "06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"];

  const dateTable = () =>{
    let times = timePosition.map((time,index)=>{
      if(!!time){
        return (
          <div key={index} className={`
            schedule-time ${index === 1 ? "first" : "" } ${(index === timePosition.length -1) ? "last" : ""}
          `}>
            {time}
            <div id="droptarget" className="timeline" data-grid={index} onDrop={(e=>onDropTask(e))} onDragOver={(e => onDragOver(e))}></div>
          </div>
        )
      }
    })
    return times;
  }
  
  const onDropTask = useCallback(e=>{
    // Task Drop 이벤트
    console.log('Task Drop 이벤트, e',e)
  },[])

  const onChangeTaskTime=e=>{
    // TaskTime 변경 이벤트
    console.log('TaskTime 변경 이벤트, e',e)
  }

  const onDragOver = useCallback(e =>{
    e.preventDefault();
    console.log('eee',e)
    let targetPoint = parseInt(e.target.dataset.grid);
    // data 수정 로직
    if(updatePoint === "top"){
      setTasks(tasks.map(task => {
        if(task.id === parseInt(startId)) {
          const endPoint = timePosition.indexOf(task.endTime)
          if(targetPoint >= endPoint){
            targetPoint = endPoint-1;
          }
          return {...task, startTime:timePosition[targetPoint]}
        } else {
          return task
        }
      }))
    } else {
      setTasks(tasks.map(task => {
        if(task.id === parseInt(startId)) {
          const startPoint = timePosition.indexOf(task.startTime)
          if(targetPoint <= startPoint){
            targetPoint = startPoint+1;
          }
          return {...task, endTime:timePosition[targetPoint]}
        } else {
          return task
        }
      }))
    }
  },[startId, tasks, timePosition, updatePoint])

  const onDragStart = useCallback((e,taskTop,taskBottom)=>{
    setStartId(e.target.dataset.id);
    setUpdatePoint(e.target.dataset.role);
  },[]);

  return (
      <section className="schedule-container">
        <div className="schedule-back">
          {dateTable()}
        </div>
        <div className="schedule-back" onDrop={(e=>onChangeTaskTime(e))} onDragOver={(e=>e.preventDefault())}>
        {tasks.map(data => (
          <TaskSchedule data={data} timePosition={timePosition} key={data.id} onDragStart={onDragStart}/>
        ))}
        </div>
      </section>
  );
};

export default React.memo(Schedule);
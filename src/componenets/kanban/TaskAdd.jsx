import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// TaskUpdate와 구조가 거의 동일하므로 추후 리팩토링 필요(반복제거)
const AddContainer = styled.div`
  padding:20px;
`;
const AddLabel = styled.label`
width:264px;
font-size:11px;
color:rgba(0,0,0,.6)
`;
const AddInput = styled.input`
  display:block;
  font-size:14px;
  width:264px;
  padding:10px 13px;
  margin-bottom:20px;
  border-radius:3px;
  border:0;
  background-color: #f1f1f1;
`;
const ButtonAdd = styled.button`
  width:48%;
  border-radius:4px;
  font-size:14px;
  font-weight:bold;
  padding:14px 0;
  margin:${props => {
    if(!!props.left){return '0 2% 0 0'}
    else {return '0 0 0 2%'}
  }}
  border:${props => props.border  || ''};
  background-color:${props => props.backgroundColor  || ''};
  color:${props => props.color  || ''};
`;

const TaskAdd = ({columnId,closeModal,onSubmit}) => {
  const [taskTitle,setTaskTitle] = useState(null)
  const [taskNote,setTaskNote] = useState(null)
  const changeTask = e =>setTaskTitle(e.target.value);
  const changeNote = e =>setTaskNote(e.target.value);
  const taskInput = useRef();
  useEffect(() => {
    taskInput.current.focus();
  }, []);

  return (
    <AddContainer>
      <AddLabel>Task</AddLabel>
      <AddInput onChange={changeTask} ref={taskInput}/>
      <AddLabel>Note</AddLabel>
      <AddInput onChange={changeNote}/>
      <ButtonAdd color="#000" backgroundColor="#fff" border="solid 1px #979797" left
        onClick={closeModal}
      >Close</ButtonAdd>
      <ButtonAdd color="#fff" backgroundColor="#000" border="solid 1px #000" right
        onClick={_=>onSubmit(columnId,taskTitle,taskNote)}
      >Complete</ButtonAdd>
    </AddContainer>
  );
}

export default TaskAdd;

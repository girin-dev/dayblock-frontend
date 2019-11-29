import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import {dropdown_icon, comment_icon, file_icon} from '../../resources/icons'

// background-color: ${props => (props.isDragging ? 'rgba(124,123,181,0.2)' : 'white')};
const Container = styled.div`
  width: 240px;
  min-height: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
`;

const TaskHeader = styled.div`
  height: 25px;
  display: flex;
  
  position: relative;
  margin-bottom: 5px;
`;

const TaskTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap:break-word;
`;

const TaskDropDownButton = styled.img.attrs({
  src: dropdown_icon
  })`
  width: 16px;
  height: 16px;

  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4px;
`;

const TaskMenu = styled.ul`
  width:85px;
  height:60px;
  position: absolute;
  right:0;
  bottom:-60px;
  background:#fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

const TaskMenuButton = styled.li`
  line-height:32px;
  display:block;
  width:100%;
  height:50%;
  background:transparent;
  text-align:center;
  margin:0;
  border:0;
  border-bottom:1px solid #e2e2e2;
  cursor:pointer;
  &:last-child{
    border-bottom:0;
  }
`;

const TaskContent = styled.div`
  font-size: 13px;
  word-break:break-all;
  color: #2E2E2E;
  min-height: 60px;
  margin-bottom: 5px;
`;

const TaskFooter = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`;

const CommentIcon = styled.img.attrs({
  src: comment_icon
})`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const FileIcon = styled.img.attrs({
  src: file_icon
})`
  width: 15px;
  height: 15px;
`;

const Task = (props) => {
  const [isClickDDB, setIsClickDDB] = useState(false);
  return (
    <Draggable draggableId={props.task.task_id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <TaskHeader>
            <TaskTitle>{props.task.title}</TaskTitle>
            <TaskDropDownButton
              onClick={_=>setIsClickDDB(!isClickDDB)}
            />
            {isClickDDB &&
              <TaskMenu>
                <TaskMenuButton
                  onClick={_=>{
                    console.log('props.task_id',props.task.task_id)
                    props.deleteTask(props.task.task_id)
                  }}
                >Delete</TaskMenuButton>
                <TaskMenuButton
                  // onClick={props.modifyTask}
                >Modify</TaskMenuButton>
              </TaskMenu>
            }
          </TaskHeader>
          <TaskContent>
            {props.task.note}
          </TaskContent>
          <TaskFooter>
            <CommentIcon/>
            <FileIcon/>
          </TaskFooter>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;

import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBlock = styled.div`
  background: rgba(29,28,29,.15);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:998;
`;
const ModalWindow = styled.section`
  border-radius:8px;
  position: relative;
  z-index:999;
  box-shadow: 4px 0 40px 0 rgba(0, 0, 0, 0.13);
  background-color: #ffffff;
`;

const TaskUpdateModal = (props) => {
  console.log('TaskUpdateModal',props);
  return (
    <ModalBlock>
      <ModalWindow>
        { (props.props.index===undefined)
          ? (<props.component props={props}
              // id={props.props.task.task_id} title={props.props.task.title} note={props.props.task.note}
              columnId={props.props.column.column_id}
              closeModal={props.closeModal} onSubmit={props.onSubmit}
            />)
          : (<props.component props={props}
              id={props.props.task.task_id} title={props.props.task.title} note={props.props.task.note}
              closeModal={props.closeModal} onSubmit={props.onSubmit}
            />)
        }
      </ModalWindow>
    </ModalBlock>
  );
}

export default TaskUpdateModal;

import React, { useState } from 'react';
import styled from 'styled-components';

const UpdateContainer = styled.div`
  padding:20px;
`;
const UpdateLabel = styled.label`
width:264px;
font-size:11px;
color:rgba(0,0,0,.6)
`;
const UpdateInput = styled.input`
  display:block;
  font-size:14px;
  width:264px;
  padding:10px 13px;
  margin-bottom:20px;
  border-radius:3px;
  border:0;
  background-color: #f1f1f1;
`;
const ButtonUpdate = styled.button`
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

const TaskUpdate = ({id, title, note, closeModal, onSubmit}) => {
  console.log(closeModal)
  return (
    <UpdateContainer>
      <UpdateLabel>Task</UpdateLabel>
      {/* value 수정요 */}
      <UpdateInput value={title}/>
      <UpdateLabel>Note</UpdateLabel>
      {/* value 수정요 */}
      <UpdateInput value={note}/>
      <ButtonUpdate color="#000" backgroundColor="#fff" border="solid 1px #979797" left
        onClick={closeModal}
      >Close</ButtonUpdate>
      <ButtonUpdate color="#fff" backgroundColor="#000" border="solid 1px #000" right
        onClick={onSubmit}
      >Complete</ButtonUpdate>
    </UpdateContainer>
  );
}

export default TaskUpdate;

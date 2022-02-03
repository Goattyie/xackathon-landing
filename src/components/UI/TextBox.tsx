import React, {useState} from 'react';

interface TextBoxProps{
    labelName : string;
    inputPlaceholder: string;
    description: string;
    value? : string;
    onChange?(e: React.FormEvent<HTMLInputElement>): void;
    onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>) : void;
}

export default function TextBox({labelName, onChange, onKeyDown, description, inputPlaceholder, value} : TextBoxProps) {
  return (
    <div className="form-group" style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
    <h6>{labelName}</h6>
    <input defaultValue={value} onChange={onChange} onKeyDown={onKeyDown} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={inputPlaceholder}/>
    <small className="form-text text-muted">{description}</small>
  </div>);
}

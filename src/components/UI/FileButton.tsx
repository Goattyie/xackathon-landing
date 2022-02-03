import React from 'react';

interface FileProps{
    description: string;
}

export default function FileButton({description} : FileProps) {
  return (
    <div className="input-group mb-3">
        <input type="file" className="custom-file-input"/>
    </div>);
}

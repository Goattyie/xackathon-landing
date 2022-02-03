import React from 'react';


interface FileProps{
    description: string;
}

export default function FileButton({description} : FileProps) {
    return (
        <div className="input-group mb-3" style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
            <input type="file" className="form-control"/>
        </div>);
}

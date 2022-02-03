import React from 'react';

interface SubmitButtonProps{
    description: string;
}

export default function SubmitButton({description} : SubmitButtonProps) {
  return(
  <div className='d-flex justify-content-center'>
      <button type="submit" className="btn btn-primary">{description}</button>
  </div>);
}

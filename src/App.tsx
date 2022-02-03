import React from 'react';
import CompanyInfo from './components/CompanyInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestForm from './components/RequestForm';

function App() {

  return (
    <div className='container'>
      <CompanyInfo/>
      <RequestForm/>
    </div>
  );
}

export default App;

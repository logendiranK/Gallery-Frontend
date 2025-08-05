import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Check.css';

function Check() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const pass = "logu123";

  const handleSubmit = () => {
    if (title === pass) {
      navigate('/afefwegwerwegwerffgw4erwfgwef');
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <div className='card-container'>
      <h1 className='card-tile'>Password Check</h1>
      <input
        type="password"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit} className='card-btn'>Submit</button>
    </div>
  );
}

export default Check;

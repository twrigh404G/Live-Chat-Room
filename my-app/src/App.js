import './styles/index.css'
import React, { useState } from 'react';

export default function App() {
  const [userlogedin, setlogin] = useState(false)

  return (
  <div>
    <div className='userlogin'>
      {!userlogedin ? (
          <div className="loginform">
            <label>USERNAME</label>
            <input type="text" name="user" className="input" placeholder="Type something here...."></input>
            <label>USERNAME</label>
            <input type="text" name="user" className="input" placeholder="Type something here...."></input>
            <div className="dropdown">
              <selectmenu name="room" id="topic" className="joinroom">
                <option value="javascript">Javascript</option>
                <option value="react">react</option>
                <option value="node">node</option>
                <option value="databases">databases</option>
              </selectmenu>

            </div>

            <button onClick={()=>{setlogin(true)}}>Enter</button>
          </div>
          
      
      ):(
        <div>
          chat room
        </div>
      )}
    </div>
  </div>
  );
}



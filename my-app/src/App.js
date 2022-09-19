import './styles/index.css'
import React, { useState } from 'react';
import background from './imgs/twrigh404_voltron_8k_photorealistic_galactic_computer_spaceship_576b3e12-bfcb-47cb-914d-ba3b682bbdd3.png'


export default function App() {
  const [userlogedin, setlogin] = useState(false)
  const [loading, setloading] =useState(false)

  return (
  <div className="usercontainer">
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



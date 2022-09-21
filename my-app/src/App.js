import './styles/index.css';
import './styles/contentloading.css';
import React, { useState  ,useEffect} from 'react';
import Userlogin from './components/userlogin';
import Contentloading from './components/contentloading';



export default function App() {
  const [userlogedin, setlogin] = useState(true)
  const [isloading, setloading] = useState(true)

  function handleloading() {
    setloading(false)
    
  }
  function handlelogin(){
    setlogin(false)
  }


  useEffect(()=>{ 
    window.addEventListener('load', handleloading)
    return () => document.removeEventListener('load',handleloading)
  }, [])
  

  return (
    <div>
      { isloading ? (
        <Contentloading />
      ):(
        !userlogedin ? (
          <Userlogin />
        ): (
          <span> live chat</span>
        )
      )}
    </div>
  )


}




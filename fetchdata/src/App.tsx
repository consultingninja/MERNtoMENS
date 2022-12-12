import React, { useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState<user[]>([{firstName: '',lastName: '',email:'',id:0}]);

  const getUsers = ():void=>{
    fetch('http://127.0.0.1:8080/users')
    .then(res => {
      return res.json()
    })
    .then(data =>{
      if(data)setUsers(data);
    })
    .catch(error =>{
      console.log("Error Fetching the rando ",error);
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Consulting Ninja</h1>
      </div>
      <h1>Vite + React + Fetch</h1>
      <div className="card">
        {users && users.map((user:user):JSX.Element => {
          return(
            <div key={user.id} className='keyval-container'>
              <p>Firstname: {user.firstName}</p>
              <p className='values'>Lastname: {user.lastName}</p>
            </div>
          )
        })}
      <input type='button' value="Get our Users" onClick={()=> getUsers()} />
      </div>

    </div>
  )
}

export default App


type user = {firstName: string,lastName: string,email:string,id:number}

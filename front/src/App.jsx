import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/getuser')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>This is my React App</h1>
      <h2>Get Users lists</h2>
      {
        users.length > 0 ? (
       <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
        ) : (
          <p>No users found</p>
        )
      }

    </div>
  )
}

export default App
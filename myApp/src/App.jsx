import React from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import "./App.css"


const App = () => {
  return (
    <div className='app-background'>
      <Header/>
      <UserList/>
    </div>
  )
}

export default App
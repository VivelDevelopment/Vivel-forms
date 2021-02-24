import React from 'react';
import Header from './Header'
import './app.scss';


export default function App() {

  return (
    <div>
      <Header />
      <h1>Lest build Froms</h1>
      <button onClick={() => {
        electron.notificationApi.sendNotification('Hello Im Vivel froms!');
      }}>Notify</button>
    </div>
  )
}
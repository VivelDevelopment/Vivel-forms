import React from 'react';


export default function App() {

  return (
    <>
      <h1>I am App Component!!!</h1>
      <button onClick={() => {
        electron.notificationApi.sendNotification('Hello Im Vivel froms!');
      }}>Notify</button>
    </>
  )
}
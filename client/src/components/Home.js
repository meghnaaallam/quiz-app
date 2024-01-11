import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  return (
    <div>
        <h2> do you know ? </h2>
        <h3>Welcome 🙏🏽</h3>
        <ol>
        <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
            </ol>
        <form>
          <input type='text' className='usernameInput' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
          <Link to={`/quiz`}>Submit</Link>  
        </form>
    </div>
  )
}

export default Home;
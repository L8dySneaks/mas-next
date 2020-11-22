/**
 * Main Login page
 */

import { useState } from "react";
import jwt from 'jsonwebtoken';

export default function Home() {

  /**
   * Use the React State
   */

   const [username, setUsername] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const [message, setMessage] = useState<string>('You are not logged in.');
   const [secret, setSecret] = useState<string>('');

  /**
   * Perform a req to the backend server
   */
  async function submitForm() {
    // get the response from the API
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json());

    const token = res.token;

    if(token) {
      // decode the web token
      const json = jwt.decode(token) as { [key: string]: string};
      console.log(json)
      setMessage(`Welcome ${json.username}, you are logged in as ${json.admin ? 'an admin.': 'not an admin.'}`);

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then((t) => t.json());

      if(res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret('Nothing available');
      }
    } else {
      setMessage('Something has gone wrong!');
    }
  }

  return (
    <div>
      <h1>{ message }</h1>
      <h1>Secret: { secret }</h1>
      <form method="POST" action="/api/login">
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <input type="button" value="Login" onClick={submitForm} />
      </form>
    </div>
  )
}
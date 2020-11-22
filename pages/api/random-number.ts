/**
 * It should NOT be a react component
 * This is for REST API Endpoints
 * In NextJS you have to export a single function in a single file
 * The endpoint for this file would be http://localhost:3000/api/random-number
 * returns random number in json response
 */

import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse) {
  // console.log('Request body', req.body);
  // console.log('Request body', req.body.username);
  // res.json({ status: 'ok' });

  res.statusCode = 200

  // res.setHeader('X-Custom-Header', 'We are open!');
  // res.setHeader('Set-Cookie', 'areyouprogrammer=true;');
  // Send something that is not JSON
  res.send('Something like this');

  res.json({ num: Math.floor(Math.random() * 10)});
}

import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
  // See what information we get back
  // console.log('Loging clicked', req.body);

  const KEY = 'laskjdflakjowifndoskjflaksdn';

  // if request body is not available, send back a 404, end stream and return
  if(!req.body) {
    req.statusCode = 404;
    res.end('Error');
    return;
  }

  // Extract out username and password from the request body
  const { username, password } = req.body;

  // Use the jwt to check the username, and determine if it is admin
  // Assign the KEY to anything
  // Can use jwt.io to decode web tokens
  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, KEY)
  });
}
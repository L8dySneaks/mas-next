/* This file will serve any URL that looks something like 
* http://localhost:3000/project/<anythingcangohere>/<anythingcangohere>
* Only works for two dynamic segments
* Lose the ability to capture 2 dynamic segments
*/

export default function SubProjectName() {
  return <h1>This is a sub project of a project</h1>
}
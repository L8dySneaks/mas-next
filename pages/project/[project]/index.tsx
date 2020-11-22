/* This file will serve any URL that looks something like 
* http://localhost:3000/project/<anythingcangohere>
* Only works for one segment
* if you want something to show on the page with the URL
* http://localhost:3000/project you will need to add an index.tsx file
*/

export default function ProjectName() {
 return <h1>Hello from first segment</h1>
}
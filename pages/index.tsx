/**
 * Main Login page
 */

export default function Home() {
  return (
    <div>
      <form method="POST" action="/api/login">
        <input type="text" name="username" defaultValue="admin" />
        <br/>
        <input type="password" name="password" defaultValue="admin" />
        <br/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
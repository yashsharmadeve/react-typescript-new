import { useState } from "react"

type Auth = {
    name: string
    email: string
}

const AuthUser = () => {

    // const [user,setUser] = useState<string | null >(null); // to use directly
    const [user,setUser] = useState<Auth | null >(null);
    const handleLogin = () => {
        setUser({
            name: 'Yash Sharma',
            email: 'yashsharmasbm@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null); // Reset user to null on logout
    };

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Log out</button>
        <div>User Name is {user?.name}</div>
        <div>User Email is {user?.email}</div>
        <div></div>
    </div>
  )
}

export default AuthUser
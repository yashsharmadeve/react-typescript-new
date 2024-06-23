import { useState } from "react";

type Auth = {
  name: string;
  email: string;
};

const AuthUser2 = () => {
  const [user, setUser] = useState<Auth>({} as Auth);
  const handleLogin = () => {
    setUser({
      name: "Yash Sharma",
      email: "yashsharmasbm@gmail.com",
    });
    console.log(user);  
  };

//   useEffect(()=>{
//     console.log(user);
//   },[user])
//   const handleLogout = () => {
//     setUser(null); // Reset user to null on logout
//   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User Name is {user.name}</div>
      <div>User Email is {user.email}</div>
    </div>
  );
};

export default AuthUser2;

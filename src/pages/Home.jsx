import { useAuth } from "../context/authContext"

export function Home() {

  const {user, logOut, loading} = useAuth()

  const handleLogOut = async ()=>{
    await logOut()
  }

  if (loading) return <h1> loading</h1>
  return (
    <div className="">
      <div className=" ">
          <h1 className="font-bold ">Home</h1>
          
          <h2>welcome {user.email}</h2>  

          <div>
            <button onClick={handleLogOut}>log out</button>
          </div>
      </div>
      
    </div> 
  )
}
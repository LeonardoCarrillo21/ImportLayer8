import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { Input } from '../Components/Input/Input'

export function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [error, setEror] = useState()

  const navigate = useNavigate()

  const { logIn } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await logIn(user.email, user.password)
      navigate("/")
    } catch (error) {
      setEror(error.message)
    }
  }

  return (

    <div className=" w-full h-full flex justify-center items-center bg-gray-100">

      <div className="w-100  h-auto border-1 border-gray-200 rounded-2xl">
        <div className="font-bold text-3xl flex m-6">
          <h1 >Login</h1>
        </div>
        <div className="flex justify-center">

          <PersonIcon style={{ fontSize: '90px' }} />
        </div>

        <form className="" onSubmit={handleSubmit}>
          <div className="w-full p-5 ">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <Input placeholder='youremail@company.ltd' type='email' name='email' id='email' user={user} setUser={setUser}></Input>
            </div>
          </div>
          <div className="w-full p-5 ">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <Input className="bg-none" placeholder='*********' type='password' name='password' id='password' user={user} setUser={setUser}></Input>
            </div>
          </div>
          <div className="text-red-500 font-sans justify-center flex ">
            {error && <p>{error}</p>}
          </div>
          <div className="w-full p-5 flex justify-center items-center">
            <button type="submit" className="text-2xl border-b-1 border-gray-400   pb-1">
              login
              <LoginIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

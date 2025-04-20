import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { Input } from '../Components/Input/Input'



export function Register() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    confirPassword: ''
  });

  const [error, setEror] = useState()

  const navigate = useNavigate()

  const { signUp } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if(user.password !== user.confirPassword) throw new Error("Password es diferente a Confirm Password")
      console.log(user)
      await signUp(user.email, user.password)
      navigate("/")
    } catch (error) {
      setEror(error.message)
    }
  }

  return (

    <div className=" w-full h-full flex justify-center items-center
    bg-[url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">

      <div className="w-100  h-auto border-1 border-gray-200 rounded-2xl">
        <div className="font-bold text-3xl flex m-6">
          <h1 className="text-gray-100">Register new Account</h1>
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
          <div className="w-full p-5 ">
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
            </div>
            <div>
              <Input className="bg-none" placeholder='*********' type='password' name='confirmPassword' id='confirmPassword' user={user} setUser={setUser}></Input>
            </div>
          </div>
          <div className="text-red-500 font-sans justify-center flex ">
            {error && <p>{error}</p>}
          </div>
          <div className="w-full p-5 flex justify-center items-center">
            <button type="submit" className="text-2xl border-b-1 border-gray-400   pb-1">
              register
              <LoginIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

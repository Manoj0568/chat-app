import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const Signup = () => {

  const [inputs,setInputs] = useState({
    fullname: '',
    username: '',
    password:'',
    confirmPassword: '',
    gender: ''
  })
  const { loading, signup} = useSignup()
  const handleSubmit = async (e)=>{
    
    e.preventDefault()
    await signup(inputs)
    console.log(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp &nbsp;
          <span className="text-white rounded-lg p-3 bg-sky-500">ChatApp</span>
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Full Name" 
              value={inputs.fullname}
              onChange={e=>setInputs({...inputs,fullname: e.target.value})}
            />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" 
              value={inputs.username}
              onChange={e=>setInputs({...inputs,username: e.target.value})}
            />
          </label>
          <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password" 
                  value={inputs.password}
                  onChange={e=>setInputs({...inputs,password: e.target.value})}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Confirm password"
                value={inputs.confirmpassword}
                onChange={e=>setInputs({...inputs,confirmPassword: e.target.value})}
              />
            </label>
            <br />
            <div className='flex items-center justify-center gap-9'>
              <label className="label" htmlFor='male'><span className="text-base text-white ">Male</span></label>
            <input type="radio" name="radio-3" className="radio radio-secondary " value={"male"} 
              onChange={e=>setInputs({...inputs,gender:e.target.value})}
            />
            <label className="label" htmlFor='male'><span className="text-base text-white ">Female</span></label>
            <input type="radio" name="radio-3" className="radio radio-secondary" value={"female"}
             onChange={e=>setInputs({...inputs,gender:e.target.value})}
            />
            </div>
            <br />
            <div className="flex justify-center items-center gap-9">
              <Link to="/login"><button className="btn btn-outline btn-info ">Login</button></Link>
              <button type="submit" className="btn btn-info btn-wide"
               disabled={loading}
              >{loading?<span className='loading loading-spinner'></span>:"SignUp"}</button>
              
            </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Signup
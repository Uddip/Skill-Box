import React, { useRef, useState } from 'react'
import Image from "next/image";
import { useAuth } from '../contexts/AuthContext'
import { 
  MailIcon, 
  KeyIcon,
  LockClosedIcon
} from '@heroicons/react/solid'

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfrimRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfrimRef.current.value) {
      return setError("Passwords do not match")
    }

    signup(emailRef.current.value, passwordRef.current.value)

    try {
      setError('')
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value)
    } catch {

      setError("Failed to create account")
    }

    setLoading(false)
  }

  return (
    <section 
      className="bg-center bg-cover bg-no-repeat md:pb-1"
      style={{backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)"}}
    >
      <div class="absolute bg-black opacity-40 inset-0 z-0 mb-2 md:-mb-1"></div>
      <div className=" max-w-sm sm:max-w-sm md:max-w-sm px-4 mx-auto py-12">

        {/* SignUp Card */}
        <div className="relative flex flex-col break-words w-full  shadow-lg rounded-lg bg-gray-200 bg-opacity-90">
          <div className="rounded-t px-6 py-6">

            {/* SignUp Title */}
            <div className="text-center mb-3">
              <h6 className="text-gray-600 text-lg font-bold">
                Sign Up
              </h6>
              {/* Test for account information */}
              {/* {JSON.stringify(currentUser)} */}
              {/* {currentUser && currentUser.email} */}
              {error && 
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-left mt-5" role="alert">
                  <strong class="font-bold">Oops, something went wrong!</strong>
                  <span class="block">{error}</span>
                </div>}
            </div>

            {/* User Credentials Sign Up */}
            <div className="flex-auto px-4 py-6">
              <form onSubmit={handleSubmit}>
                
                {/* Text Input */}
                <div id="email"
                  className="form-group relative w-full mb-4">
                  {/* <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Email
                  </label> */}
                  <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                    <MailIcon className="h-5 text-gray-400"/>
                    <input type="email"
                      ref={emailRef}
                      required
                      className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                      placeholder="Email"/>
                  </div>
                </div>
                <div id="password"
                  className="form-group relative w-full my-5">
                  {/* <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Password
                  </label> */}
                  <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                    <KeyIcon className="h-5 text-gray-400"/>
                    <input type="password"
                      ref={passwordRef}
                      required
                      className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                      placeholder="Password"/>
                  </div>
                </div>
                <div id="passwordConfirm"
                  className="form-group relative w-full mt-5">
                  {/* <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Password Confirmation
                  </label> */}
                  <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                    <LockClosedIcon className="h-5 text-gray-400"/>
                    <input type="password"
                      ref={passwordConfrimRef}
                      required
                      className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                      placeholder="Re-enter Password"/>
                  </div>
                </div>

                {/* Terms & Policy */}
                <div>
                  <label className="inline-flex items-center cursor-pointer mt-3">
                    <input id="termsCheck"
                      type="checkbox"
                      className="rounded text-gray-700 ml-1 w-5 ease-linear transition-all duration-150" />
                    <span className="ml-2 text-sm font-semibold text-gray-600">
                      I agree with the <a href="##" className=" text-red-500 underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                {/* Create Account Button */}
                <div className="text-center mt-6">
                  <button type="submit"
                    disabled={loading}
                    className="bg-purple-800 text-white active:bg-purple-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                      Create Account
                  </button>
                </div>
              </form>
            </div>

            {/* SSO Buttons */}
            <div className="text-center">
              <hr className="mt-6 border-gray-300"/>
              <div className="text-gray-500 text-center mt-2 mb-5 font-bold">
                <h2>Single-Sign On</h2>
              </div>
              <button className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google
              </button>
            </div>
          </div>

          {/* To Login */}
          <div className="text-center text-gray-500 mb-10">
            <small>Already have an account? Login</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup

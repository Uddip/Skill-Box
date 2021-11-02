import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { MailIcon, KeyIcon, LockClosedIcon } from "@heroicons/react/solid";

function PasswordRecovery() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/");
    } catch {
      setError("Login failed");
    }

    setLoading(false);
  }

  return (
    <section
      className="bg-center bg-cover bg-no-repeat md:pb-1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      {/* <div class="absolute bg-black opacity-40 inset-0 z-0 mb-36 md:mb-32"></div> */}
      <div className=" max-w-sm sm:max-w-sm md:max-w-sm px-4 mx-auto py-12">
        {/* SignUp Card */}
        <div className="relative flex flex-col break-words w-full  shadow-lg rounded-lg bg-gray-200 bg-opacity-90">
          <div className="rounded-t px-6 py-6">
            {/* SignUp Title */}
            <div className="text-center mb-3">
              <h6 className="text-gray-600 text-lg font-bold">Login</h6>
              {/* Test for account information */}
              {/* {JSON.stringify(currentUser.uid)} */}
              {currentUser && currentUser.email}
              {error && (
                <div
                  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-left mt-5"
                  role="alert"
                >
                  <strong class="font-bold">Oops, something went wrong!</strong>
                  <span class="block">{error}</span>
                </div>
              )}
            </div>

            {/* User Credentials Sign Up */}
            <div className="flex-auto px-4 pt-6">
              <form onSubmit={handleSubmit}>
                {/* Text Input */}
                <div id="email" className="form-group relative w-full mb-4">
                  {/* <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Email
                  </label> */}
                  <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                    <MailIcon className="h-5 text-gray-400" />
                    <input
                      type="email"
                      ref={emailRef}
                      required
                      className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div id="password" className="form-group relative w-full my-5">
                  {/* <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Password
                  </label> */}
                  <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                    <KeyIcon className="h-5 text-gray-400" />
                    <input
                      type="password"
                      ref={passwordRef}
                      required
                      className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>

                {/* Create Account Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 text-white hover:bg-purple-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-center text-gray-500">
            <small>
              <Link href="/auth/forgotpassword">
                <a className="cursor-pointer hover:underline text-blue-500 w-min">
                  Forgot Password?
                </a>
              </Link>
            </small>
          </div>

          {/* To Register */}
          <div className="text-center text-gray-500 mb-10 cursor-default">
            <small>
              Don't have an account?{" "}
              <Link href="/auth/register">
                <a className="cursor-pointer hover:underline text-blue-500 w-min">
                  Sign up
                </a>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PasswordRecovery;

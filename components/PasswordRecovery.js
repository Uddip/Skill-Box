import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { MailIcon } from "@heroicons/react/solid";

function PasswordRecovery() {
  const router = useRouter();
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    resetPassword(emailRef.current.value);

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further insrtuctions");
    } catch {
      console.log("in the catch block");
      setError("Failed to send reset password email");
    }

    setLoading(false);
  }

  return (
    <section
      className=" h-screen bg-center bg-cover bg-no-repeat md:pb-1"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      {/* <div class="absolute bg-black opacity-40 inset-0 z-0 mb-36 md:mb-32"></div> */}
      <div className=" max-w-sm sm:max-w-sm md:max-w-sm px-4 mx-auto py-12">
        {/* SignUp Card */}
        {message ? (
          <div className="relative flex flex-col justify-center items-center text-center p-1 break-words h-56 shadow-lg rounded-lg bg-gray-200 bg-opacity-90">
            <div className="rounded-t px-6 py-6">
              <h6 className="text-gray-600 select-none text-lg font-bold">
                {message}
              </h6>
            </div>
            <div className="text-center text-gray-500 mb-10 cursor-default">
              <Link href="/auth/signin">
                <a className="cursor-pointer hover:underline text-blue-500 w-min">
                  Back to Login
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col break-words w-full  shadow-lg rounded-lg bg-gray-200 bg-opacity-90">
            <div className="rounded-t px-6 py-6">
              {/* SignUp Title */}
              <div className="text-center mb-3">
                <h6 className="text-gray-600 select-none text-lg font-bold">
                  Password Reset
                </h6>
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-left mt-5"
                    role="alert"
                  >
                    <strong className="font-bold">
                      Oops, something went wrong!
                    </strong>
                    <span className="block">{error}</span>
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

            {/* To Register/Login */}
            <div className="text-center text-gray-500 mb-10 cursor-default">
              <Link href="/auth/register">
                <a className="cursor-pointer hover:underline text-blue-500 w-min">
                  Create an account
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PasswordRecovery;

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { readUserData } from "../contexts/FireStoreContext";

function UpdateProfile() {
  const router = useRouter();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const displayNameRef = useRef();
  const skillsRef = useRef();
  const bioRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    readUserData(currentUser.uid)
      .then((result) => {
        setUserData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfrimRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await addUserData(
        currentUser.uid,
        display,
        name,
        emailRef.current.value,
        skills,
        bio
      );
      router.push("/");
    } catch {
      setError("Account was not created");
    }

    setLoading(false);
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl pl-10 pb-10">Update Profile</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured.</div>
      ) : userData ? (
        <form onSubmit={handleSubmit} className="flex flex-col p-5">
          {/* Input Fields */}
          <div className="grid grid-cols-1 justify-items-stretch place-items-start p-5">
            <div
              id="name"
              className="form-group flex relative w-full mb-4 space-x-5 justify-center items-center"
            >
              {/* Name */}
              <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                Name
              </label>
              <div className=" items-center bg-white rounded shadow px-3 py-3">
                <input
                  type="text"
                  ref={firstNameRef}
                  required
                  className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent max-w-sm"
                  placeholder={
                    userData.name.first_name.charAt(0).toUpperCase() +
                    userData.name.first_name.slice(1)
                  }
                />
              </div>

              <div className=" items-center bg-white rounded shadow px-3 py-3">
                <input
                  type="text"
                  ref={lastNameRef}
                  required
                  className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder={
                    userData.name.last_name.charAt(0).toUpperCase() +
                    userData.name.last_name.slice(1)
                  }
                />
              </div>
            </div>

            <div
              id="name"
              className="form-group flex relative w-full mb-4 space-x-5 items-center"
            >
              {/* Display Name */}
              <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                Display Name
              </label>
              <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                <input
                  type="text"
                  ref={firstNameRef}
                  required
                  className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder={userData.display_name}
                />
              </div>
            </div>

            {/* Email */}
            <div
              id="email"
              className="form-group flex relative w-full mb-4 space-x-5 items-center"
            >
              <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                Email
              </label>
              <div className="flex flex-row items-center bg-white rounded shadow px-3 py-3">
                <input
                  type="email"
                  ref={emailRef}
                  required
                  className=" pl-3 bg-transparent w-full placeholder-gray-300 text-gray-600 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

          {/* Create Account Button */}
          <div className="flex space-x-2 justify-end text-center mt-6">
            <button
              disabled={loading}
              className="border-purple-800 border-2 hover:text-white hover:bg-purple-800 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Cancle
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white hover:bg-purple-800 text-sm uppercase px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UpdateProfile;

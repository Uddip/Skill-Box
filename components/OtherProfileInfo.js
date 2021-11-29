import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { readUserData } from "../contexts/FireStoreContext";
import {
  MailIcon,
  AcademicCapIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

function OtherProfileInfo() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    readUserData("5JCPr67x0kgVIQxXGZzZmEcTRqU2")
      .then((result) => {
        setUserData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider">
      {/* Profile Card */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured.</div>
      ) : userData ? (
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div>
              <div className="p-4 md:p-12 text-center lg:text-left">
                {/* Profile Image */}
                <div
                  className="fblock lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    // link to profile images
                    backgroundImage: "url(./Naufil.jpeg)",
                  }}
                ></div>

                {/* Text/Call Buttons */}
                <div className="flex lg:float-right justify-center m-3">
                  <Link href="/message">
                    <div className="flex place-items-center w-max cursor-pointer select-none rounded-lg bg-purple-700 text-white hover:shadow-lg transition-all transform duration-150 ease-in p-2">
                      <AnnotationIcon className="h-5 pr-2" />
                      <div className="">Contact</div>
                    </div>
                  </Link>
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                  {userData.name.first_name.charAt(0).toUpperCase() +
                    userData.name.first_name.slice(1) +
                    " " +
                    userData.name.last_name.charAt(0).toUpperCase() +
                    userData.name.last_name.slice(1)}
                </h1>

                {/* Display Name */}
                <p>{userData.display_name}</p>
                <div className="mx-auto lg:mx-0 w-4/5 lg:w-full mt-2 pt-3 border-b-2 border-purple-500 opacity-25"></div>

                <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <MailIcon className="h-6 fill-current text-purple-700 pr-3" />
                  <p>{userData.email}</p>
                </div>

                {/* Bio */}
                <p className="pt-8 mx-5">{userData.bio}</p>

                {/* Skills */}
                <div className="flex flex-col mx-9 mt-10">
                  <div className="font-bold text-lg text-purple-700">
                    <div className="flex justify-center">
                      <AcademicCapIcon className="h-6 pr-3" />
                      Skills
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 gap-4 justify-items-stretch text-center border-2 border-gray-300 rounded-lg w-96 mt-2 p-3 mb-2">
                    {userData.skills.map((skill) => (
                      <div key={skill} className="p-2">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="./Naufil.jpeg"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default OtherProfileInfo;

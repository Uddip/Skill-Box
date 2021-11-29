import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { readUserData } from "../contexts/FireStoreContext";
import { MailIcon, AcademicCapIcon, PencilIcon } from "@heroicons/react/solid";

function Search() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function goToProfile(e) {
    try {
      router.push("/viewUserProfile");
    } catch {}

    setLoading(false);
  }

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
    <div className="p-5">
      {userData ? (
        <div
          onClick={goToProfile}
          className="flex border-2 rounded-lg p-5 mx-40 cursor-pointer hover:scale-105 hover:shadow-md transition-all transform duration-150 select-none"
        >
          {/* Profile Image */}
          <div
            className="fblock rounded-lg shadow-xl h-20 w-20 bg-cover mr-5"
            style={{
              // link to profile images
              backgroundImage: "url(./Naufil.jpeg)",
            }}
          ></div>
          <div className="grid grid-cols-1">
            {/* Name */}
            <div>
              {userData.name.first_name.charAt(0).toUpperCase() +
                userData.name.first_name.slice(1) +
                " " +
                userData.name.last_name.charAt(0).toUpperCase() +
                userData.name.last_name.slice(1)}
            </div>
            {/* Skills */}
            <div className=" text-sm text-gray-400">
              {userData.skills.map((skill) => (
                <p key={skill} className="mr-1">
                  {skill.charAt(0).toUpperCase() + skill.slice(1)}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>nope</div>
      )}
    </div>
  );
}

export default Search;

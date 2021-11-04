import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "../contexts/AuthContext";
import { useFireStore } from "../contexts/FireStoreContext";
import profilePic from "../public/profilePic.jpg";
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";

function ProfileInformation() {
  const { currentUser } = useAuth();
  const { addUserData, readUserData } = useFireStore();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  // Try to fetch user profile information
  async function getUserData() {
    try {
      setError("");
      setLoading(true);
      setUserData(await readUserData(currentUser.uid));
    } catch {
      setError("Unable to fetch user data at the current time.");
    }

    setLoading(false);
  }

  async function setVars() {
    setDisplayName(userData.data().display_name);
    setFirstName(
      userData.data().name.first_name.charAt(0).toUpperCase() +
        userData.data().name.first_name.slice(1)
    );
    setLastName(
      userData.data().name.last_name.charAt(0).toUpperCase() +
        userData.data().name.last_name.slice(1)
    );
    setEmail(userData.data().email);
    setSkills(userData.data().skills);
    setBio(userData.data().bio);
  }

  // On load run getUserData() function
  useEffect(() => {
    try {
      getUserData();
      setVars();
    } catch {}
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <div>
            <h1 className="text-center mb-0 text-7xl font-sans antialiased mt-10 text-purple-600 text-italic hover:text-blue-500">
              {displayName}
            </h1>
          </div>

          {/* this is the information section */}
          <div className="flex mt-5 flex-col">
            <div className="text-center border-purple-200">
              <Image
                src={profilePic}
                alt="Picture of the user"
                className="border-6 rounded-full hover:opacity-90"
                width={100}
                height={100}
                quality="80"
              />
            </div>

            <div className="m-10">
              <div className="text-2xl space-y-2">
                <p className="flex flex-row">
                  <p className="text-purple-600 font-bold mr-2">Name:</p>
                  {firstName + " " + lastName}
                </p>
                <p className="flex flex-row">
                  <p className="text-purple-600 font-bold mr-2">E-mail:</p>
                  {email}
                </p>
                <p className="flex flex-row">
                  <p className="text-purple-600 font-bold mr-2">Skills:</p>
                  <div>
                    {skills.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </p>
                <p className="flex flex-row">
                  <p className="text-purple-600 font-bold mr-2">Bio:</p>
                  {bio}
                </p>{" "}
              </div>
              <div className="mt-5 space-x-5 text-2xl">
                <b className="text-purple-600">Followers:</b> 200{" "}
                <b className="text-purple-600"> Following:</b> 10
              </div>

              <div className="flex flex-row gap-12">
                <div className="hover:transform transition duration-150 active:scale-90 cursor-pointer select-none">
                  <BadgeCheckIcon className="h-20 text-green-500" /> Follow User{" "}
                </div>
                <div className="hover:transform transition duration-150 active:scale-90 cursor-pointer select-none">
                  <ExclamationIcon className="h-20 text-red-600" /> Report User{" "}
                </div>
              </div>
            </div>
          </div>
          {/* End of Info Section */}
        </div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default ProfileInformation;

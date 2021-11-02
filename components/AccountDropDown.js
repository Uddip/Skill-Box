import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/solid";
import {
  PencilIcon,
  CogIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

function AccountDropDown() {
  const { data: session } = useSession();
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropDownRef.current !== null &&
        !dropDownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }

      console.log("Outside");
      console.log(dropDownRef.current);
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
      console.log("Inside");
      console.log(dropDownRef.current);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="relative ml-6">
      <button
        onClick={onClick}
        className="flex items-center rounded-full hover:text-gray-100 outline-none"
      >
        {session ? (
          <>
            <img
              src={session.user.image}
              alt="profile pic"
              className=" h-8 w-8 rounded-full object-cover ring-1 ring-purple-600 hover:ring-purple-400 hover:ring-2"
            />
          </>
        ) : (
          <UserCircleIcon className="h-10" />
        )}
      </button>
      <div
        ref={dropDownRef}
        className={`menu ${
          isActive ? "active" : "inactive"
        } duration-150 ease-in transform`}
      >
        {/* Profile */}
        <div className="p-2">
          <Link href="/profile">
            <div className="p-1 flex w-full text-sm hover:bg-gray-700 text-white rounded-md cursor-pointer">
              <PencilIcon
                className="w-5 h-5 mr-2 text-purple-400"
                aria-hidden="true"
              />
              <p>Profile</p>
            </div>
          </Link>
          {/* Settings */}
          <Link href="/settings/general">
            <div className="p-1 flex w-full text-sm hover:bg-gray-700 text-white rounded-md cursor-pointer">
              <CogIcon
                className="w-5 h-5 mr-2 text-purple-400"
                aria-hidden="true"
              />
              <p>Settings</p>
            </div>
          </Link>
        </div>

        {/* Login/Logout */}
        <div className="p-2">
          {session ? (
            <Link href="/" onClick={signOut}>
              <div className="p-1 flex w-full text-sm hover:bg-gray-700 text-white rounded-md cursor-pointer">
                <LogoutIcon
                  className="w-5 h-5 mr-2 text-purple-400"
                  aria-hidden="true"
                />
                <p>Logout</p>
              </div>
            </Link>
          ) : (
            <Link href="/auth/signin">
              <div className="p-1 flex w-full text-sm hover:bg-gray-700 text-white rounded-md cursor-pointer">
                <LoginIcon
                  className="w-5 h-5 mr-2 text-purple-400"
                  aria-hidden="true"
                />
                <p>Login</p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="hidden absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-600 rounded-md shadow-lg ring-2 ring-gray-600 ring-opacity-50 focus:outline-none">
        {/* Profile & Settings */}
        <div className="px-1 py-1">
          {/* <Link href="/profile">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-700 text-white" : "text-white"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <PencilIcon
                      className="w-5 h-5 mr-2 text-purple-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <PencilIcon
                      className="w-5 h-5 mr-2 text-purple-400"
                      aria-hidden="true"
                    />
                  )}
                  Profile
                </button>
              )}
            </Menu.Item>
          </Link> */}
          {/* <Link href="/settings/general">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-700 text-white" : "text-white"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <CogIcon
                      className="w-5 h-5 mr-2 text-purple-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <CogIcon
                      className="w-5 h-5 mr-2 text-purple-400"
                      aria-hidden="true"
                    />
                  )}
                  Settings
                </button>
              )}
            </Menu.Item>
          </Link> */}
        </div>

        {/* Logout */}
        <div className="px-1 py-1">
          {/* <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-700 text-white" : "text-white"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                {active ? (
                  <LogoutIcon
                    className="w-5 h-5 mr-2 text-purple-400"
                    aria-hidden="true"
                  />
                ) : (
                  <LogoutIcon
                    className="w-5 h-5 mr-2 text-purple-400"
                    aria-hidden="true"
                  />
                )}
                Logout
              </button>
            )}
          </Menu.Item> */}
        </div>
      </div>
    </div>
  );
}

export default AccountDropDown;

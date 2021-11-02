import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Banner() {
  const { currentUser } = useAuth();
  return (
    <div className="text-center m-4 text-purple-600">
      <div className="my-12">
        <div className="flex flex-col text-center uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <p>Welcome</p>
          <p>to </p>
          <p>SkillBox</p>

          <br />
          {currentUser ? (
            <div className="text-left text-base normal-case text-gray-700 ml-5">
              <p className="text-center text-xl text-gray-700 mb-32">
                Ready to start sharing?
              </p>
              <p>Email: {currentUser.email}</p>
              <p>UID: {currentUser.uid}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Banner;

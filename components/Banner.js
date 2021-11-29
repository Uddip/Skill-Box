// import React from "react";
// import { useAuth } from "../contexts/AuthContext";

// function Banner() {
//   const { currentUser } = useAuth();
//   return (
//     <div className="text-center m-4 text-purple-600">
//       <div className="my-12">
//         <div className="flex flex-col text-center uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//           <p>Welcome</p>
//           <p>to </p>
//           <p>SkillBox</p>

//           <br />
//           {currentUser ? (
//             <div className="text-left text-base normal-case text-gray-700 ml-5">
//               <p className="text-center text-xl text-gray-700 mb-32">
//                 Ready to start sharing?
//               </p>
//               <p>Email: {currentUser.email}</p>
//               <p>UID: {currentUser.uid}</p>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./CBanner.module.css";
import Link from "next/link";
import TrendingList from "./TrendingList";

function Banner() {
  const { currentUser } = useAuth();
  return (
    <div>
      {/* Welcome Banner */}
      <div className={styles["banner_container"]}>
        <div>
          <div className={styles["welcome_container"]}>Welcome To SkillBox</div>
          {currentUser ? (
            <div className="pb-10"></div>
          ) : (
            <Link href="/auth/register">
              <button className="h-max w-max bg-purple-500 p-3 text-white rounded-md hover:scale-105 transform transition-all duration-150 ease-in">
                Signup Now
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Trending SKills */}
      <TrendingList />

      <div className="bg-purple-50 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center mx-20 mb-20">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Why SkillBox?</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Many people want to learn skills as a hobby or professional reasons.
            <br />
            SkillBox enables users from various professions and skill levels to
            trade skill for skill. <br />A wide variety of skills can be learnt
            for free such as cooking, programming, stitching, modeling and so
            on. <br /> This can be a one-way learning process or a give and take
            as well.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-purple-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="/images/guitar.jpeg"
            className="rounded-lg w-48"
            alt="Guitar"
          />
          <div>
            <img
              src="/images/piano.jpeg"
              className="rounded-lg mb-8 w-96"
              alt="Piano"
            />
            <img
              src="/images/cooking.jpeg"
              className="rounded-lg w-96"
              alt="Cooking"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

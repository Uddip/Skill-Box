import React from 'react'
import Image from 'next/image'
import profilePic from '../public/profilePic.jpg'
import {
  BadgeCheckIcon,
  ExclamationIcon
} from '@heroicons/react/solid';

function ProfileHeader() {
  return (
    <div>
          
          <div >
           <h1 className="text-center mb-0 text-7xl font-sans antialiased mt-10 text-purple-600 text-italic hover:text-blue-500">User Information</h1>
          </div>

{/*
this is the information section 
 */}
          <div className="m-40 grid grid-flow-col grid-cols-2 grid-rows-1">
          <div className="border-r-2 border-purple-200 max-w-xl"><Image src={profilePic} alt="Picture of the user" className="border-6 rounded-full hover:opacity-90" width={450} height={450} 
          quality="80" /></div>

          <div> 
          <ul className="ist-none md:list-disc text-2xl a-right"> 
          <li> <b className="text-purple-600">Name:</b> KaramDude2002</li><br />
          <li> <b className="text-purple-600">Followers:</b> 200</li><br />
          <li> <b className="text-purple-600"> Following:</b> 10</li><br />
           <li> <b className="text-purple-600">E-mail:</b> IamSuperman@gmail.com</li><br />
          <li> <b className="text-purple-600">Bio:</b> I love music. I can play all types of guitars. I was the guitar player for Michael Jackson. </li><br />
          </ul>
          <div className="flex flex-row gap-12">
          <div className="hover:transform transition duration-500 hover:scale-150"><BadgeCheckIcon className="h-20 text-green-500" /> Follow User </div>
          <div className="hover:transform transition duration-500 hover:scale-150"><ExclamationIcon className="h-20 text-red-600" /> Report User </div>
           </div>
          </div>
          </div>
{/* End of Info Section */}

        </div>


  )
}

export default ProfileHeader


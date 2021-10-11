import React from 'react'
import {
  SearchIcon,
  UserCircleIcon,
  BellIcon,
  ChatAlt2Icon
} from '@heroicons/react/solid'

function TextChat() {
    return (
       <div>
          
          <div >
           <h1 className="text-center mb-0 text-7xl font-sans antialiased mt-10 text-purple-600 text-italic hover:text-blue-500 responsive">Chat Box</h1>
          </div>
<div className="m-14 flex-row content-center justify-center">
<div className="" >
<span class="flex space-x-10 items-baseline m-auto">
<h4 className="text-xl text-purple-800"> Users in this chat (2) = </h4>
  <span className="w-25 ml-20 bg-indigo-100 p-8 rounded-full text-2xl border-8 border-purple-200">BL</span>
  <span className="w-25 bg-indigo-100 p-8 rounded-full text-2xl border-8 border-purple-200">JC</span>
</span>
</div> <br />
<div className="bg-indigo-100 p-10 text-3xl border-8 border-purple-200">
<div class="chat-panel">
		  <div className="text-center p-3 self-right max-w-sm">
			<div class="col-md-3">
			  <div className="bg-purple-200">
				Which progrmamming language should I use of Artificial learning?
			  </div>
			</div>
		  </div>
		  <div class="text-center p-3 self-right max-w-sm ml-auto mr-0">
			<div class="col-md-3 offset-md-9">
			  <div class="bg-purple-300">
				Go with Python
			  </div>
			</div>
		  </div>
		  <div class="text-center p-3 self-right max-w-sm ml-auto mr-0">
			<div class="col-md-3 offset-md-9">
			  <div class="bg-purple-300">
				I have couple of videos on that topic on SkillBox please check them out.
			  </div>
			</div>
		  </div>
		  <div class="text-center p-3 self-right max-w-sm">
			<div class="col-md-3">
			  <div class="bg-purple-200">
				Skillbox is very intuitive.
			  </div>
			</div>
		  </div>
		  <div class=" p-3 max-w-sm text-center">
			<div class="col-md-3">
			  <div class="bg-purple-200">
				I love skillbox.
			  </div>
			</div>
		  </div>
		  <div class=" text-center p-3 self-right max-w-sm ml-auto mr-0 ">
			<div class="col-md-3">
			  <div class="bg-purple-300">
				This is the best place to learn for free.
			  </div>
			</div>
		  </div>
		  <div class="text-center p-3 self-right max-w-sm">
			<div class="col-md-3 offset-md-9">
			  <div class="bg-purple-200">
				exactly!
			  </div>
			</div>
		  </div>

 
 
</div>
</div><br />
<div className="flex items-center md:border-2 rounded-md py-2 md:shadow-sm" >
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-md text-gray-500 placeholder-gray-400 focus:placeholder-gray-800" 
          type="text"
          placeholder="Type your message here..."
        />
        <p className="hidden md:inline-flex bg-purple-500 text-gray-100 rounded-full p-2 cursor-pointer md:mx-2 text-xl">Send!</p>
      </div>

</div>

</div>
    )
}

export default TextChat

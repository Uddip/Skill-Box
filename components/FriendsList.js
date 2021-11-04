/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import {
  UserIcon
} from "@heroicons/react/solid";

export default function Example() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

// Dummy friends list
const friends = [
  {
    name: "Karam Jawad",
    description: "The best Guitar Player",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "John Cena",
    description: "Made for wrestling",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "Benjamin David",
    description: "The carpenter creating wonders with wood",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "Thomas Togal",
    description: "Programmer",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "Mark Roffalo",
    description: "Artist",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "Brock Sindri",
    description: "The cook of the future",
    href: "##",
    icon: UserIcon,
  },
  {
    name: "Syed Ahmed",
    description: "Artist from. middle east",
    href: "##",
    icon: UserIcon,
  },
];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center">
                     Your Friends
                    </Dialog.Title>
                    <div className="mt-2">
                     

<div className="relative grid gap-8 bg-white p-7">
                        {friends.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-purple-100 hover:text-white-300 text-black focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-purple-400 sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4 flex flex-col text-left">
                              <p className="text-sm font-bold text-black hover:text-white-300 mb-1">
                                {item.name}
                              </p>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>



                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                 OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
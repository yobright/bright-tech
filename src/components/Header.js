import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
const navigation = [
  {
    name: "À propos de nous", href: '/about', current: false
  },
  { name: "Services", href: "/services", current: false },
  {
    name: "Clients", href: "/work", current: false
  }, 
  {
    name: "Contact",
    href: "/contact",
    current: false,
  },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute flex ml-4 sm:hidden">
                {/* Mobile menu button*/}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/BT.svg"
                      alt="Workflow"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/BT.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded-md text-xs font-medium uppercase cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

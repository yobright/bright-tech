import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
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
              <div className="absolute flex ml-2 sm:hidden">
                {/* Mobile menu button*/}
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className="text-gray-900 hover:bg-gray-200 hover:text-red-700 hover:font-bold px-2 py-1 rounded-md border text-xs font-medium uppercase cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start">
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
                <div className="hidden sm:block sm:ml-16">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className="text-gray-900 hover:font-bold border hover:bg-gray-200 hover:text-red-700 px-2 py-1 rounded-md text-xs font-medium uppercase cursor-pointer"
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

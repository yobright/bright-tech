import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import AstroText from "./AstroText/AstroText";

const navigation = [{ name: "Contact", href: "/contact", current: false }];

export default function Header() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute flex ml-4 sm:hidden">
                {/* Mobile menu button*/}
                {navigation.map((item) => (
                  <a
                    href={item.href}
                    key={item.name}
                    className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-medium uppercase cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/BT.svg"
                      alt="Workflow"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/BT.svg"
                      alt="Workflow"
                    />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-medium uppercase cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <a
                    href="/astro"
                    className="hover:bg-gray-100 hover:text-gray-900 flex px-3 py-2 rounded-md focus:outline-none cursor"
                  >
                    <AstroText />
                  </a>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

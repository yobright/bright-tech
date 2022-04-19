import React from 'react'

function Footer() {
  return (
    <div className="">
      <div className="flex justify-around py-2">
        <span className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-xs font-medium uppercase justify-left cursor-pointer">
          Instagram
        </span>
        <span className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-xs font-medium uppercase justify-left cursor-pointer">
          LinkedIn
        </span>
        <span className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-xs font-medium uppercase justify-left cursor-pointer">
          Facebook
        </span>
      </div>
      <div className="flex justify-around py-2 bg-gray-900">
        <span className="text-xs cursor-pointer text-gray-300 hover:text-gray-500">
          Copyright © 2022 Bright Tech. Tous droits réservés.
        </span>
      </div>
    </div>
  );
}

export default Footer
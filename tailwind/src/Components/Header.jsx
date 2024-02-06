import React from 'react';

function Header() {
  return (
    <div className="bg-red-500 border border-white flex justify-between items-center p-4">
      <div className="text-white flex space-x-4">
      <h1 className="font-bold text-xl">Kalvium</h1>
      
     
      <a href="#" className="text-blue-500">About us</a>
      <a href="#" className="text-blue-500">Contact</a>
      <a href="#" className="text-blue-500">Courses</a>
      </div>
     
      <div className="text-white">
        <a href="#" className="border border-white px-4 py-2">Login</a>
      </div>
    </div>
  );
}

export default Header;

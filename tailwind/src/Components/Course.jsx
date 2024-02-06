import React from 'react';

function Course() {
  return (
    <div className="py-2 flex justify-center">
      <div className="bg-white shadow-lg flex p-4 rounded-lg">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="w-16 h-16 mr-4" />
        <div>
          <h1 className="text-black font-bold text-xl mb-2">Kalvium Store</h1>
          <p className="text-black">You have a new Course!</p>
        </div>
      </div>
    </div>
  );
}

export default Course;

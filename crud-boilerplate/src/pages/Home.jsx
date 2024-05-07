import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
 

  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <h1 className="text-center font-bold text-2xl text-indigo-500">
          Hi,  find your blog posts here
        </h1>

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          
            <Link to={`/post/}`}>
              <div
                
                className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
              >
                <img
                  className="h-56 lg:h-60 w-full object-cover"
                  src={`http://localhost:5000/Images/$`}
                  alt=""
                />
                <div className="p-3">
                  {/* <span className="text-sm text-primary">November 19, 2022</span> */}
                  <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                   post title
                  </h3>
                  <p className="paragraph-normal text-gray-600">
                   post description
                  </p>
                  <a className="mt-3 block" href="#">{`Read More >>`}</a>
                </div>
              </div>
            </Link>
        
        </div>
      </section>
    </>
  );
}

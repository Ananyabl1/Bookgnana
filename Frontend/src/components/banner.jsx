import React from "react";
import banner from "../../src/components/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-8 text-center mt-20">
        <h1 className="text-3xl"> BooksGnana</h1>
        <h1 className="text-1xl"> "Books are a uniquely portable magic."</h1>
      </div>
      <br />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <div className="space-y-10">
            <h2 className="text-4xl font-semibold">
              Welcome to our{" "}
              <span className="text-lime-200"> virtual library! </span>
              Explore worlds within pages and embark on literary adventures.
            </h2>
            <p className="text-xl">
              "Reading books is a journey of the mind, Where imaginations soar
              and wisdom we find. With every turn of a page, a new world
              unfolds, So dive into the magic that storytelling holds."
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="Enter your email here"
              />
            </label>
            <button className="btn btn-secondary bg-lime-200 border-lime-900">
              Get Started
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2">
            <img
              src={banner}
              className="px-8 w-92 h-92"
              alt=""
            />
        </div>
      </div>
    </>
  );
}

export default Banner;

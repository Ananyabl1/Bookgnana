import React from "react";

function Cards({ item }) {
  return (
    <>
    <br/>
      <div className="mt-4 my-3 p-3 cursor-pointer">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Story Books
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <h1>{item.title}</h1>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg hover:bg-lime-200 hover:text-black">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

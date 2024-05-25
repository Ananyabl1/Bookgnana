import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../src/components/cards";
import {Link} from "react-router-dom";
import axios from "axios";

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      }catch(error){

      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl ">
          We're delighted to have{" "}
          <span className="text-lime-100"> YOU here! :)</span>
        </h1>
        <p className="mt-12">
          Immerse yourself in thrilling adventures, unlocking hidden secrets and
          boundless knowledge that transcend time and space. Experience the
          pulse-pounding excitement of daring heroes, ancient mysteries, and
          exhilarating escapades. Travel through history and beyond, exploring
          different eras and civilizations firsthand within the pages of a book.
          Ignite your creativity with vivid landscapes and thought-provoking
          ideas, sparking new dreams and endless possibilities with every turn
          of the page.
        </p>
        <Link to="/">
        <button className= "hover:bg-lime-200  hover:text-black mt-6 px-4 py-2 border-2 rounded-md ">
            Back
        </button>

        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))}
      </div>
      
    </div>
    
    </>
  );
}

export default Course;

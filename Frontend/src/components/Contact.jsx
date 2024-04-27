import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      return (
        <>
          <div className="flex h-screen items-center justify-center">
            <div className="w-[400px]">
              <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>
                
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="mt-4 spacing-y-2">
                  <span>
                    Name
                  </span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-80 outline-none rounded-md px-3 py-1"
                    {...register("text", { required: true })} 
                  />
                  <br />
                  {errors.text && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="mt-4 spacing-y-2">
                  <span>
                    Email
                  </span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 outline-none rounded-md px-3 py-1"
                    {...register("email", { required: true })} 
                  />
                  <br />
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="mt-8 spacing-y-2">
                  <span>Message</span>
                  <br />
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                    className="w-80 outline-none rounded-md px-3 py-3"
                    {...register("text", { required: true })} 
                  />
                  <br />
                  {errors.text && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="flex justify-around mt-4">
                  <button className="bg-lime-200 text-black rounded-md px-3 py-1 hover:bg-lime-300">
                    Submit
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
    </>
  )
}

export default Contact;

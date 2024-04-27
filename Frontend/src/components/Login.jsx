import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={()=>document.getElementById("my_modal_3").close()}>

              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>
              Email
            </span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 outline-none border rounded-md px-3 py-1"
              {...register("email", { required: true })} 
            />
             <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-8 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 outline-none border rounded-md px-3 py-1"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-lime-200 text-black rounded-md px-3 py-1 hover:bg-lime-300">
              Login
            </button>
            <p>
              Not registered??
              <Link to="/signup" className="underline text-lime-200 cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;

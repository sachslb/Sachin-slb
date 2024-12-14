import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
  const onSubmit = async (data ,e) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message,
        }

        try {
           await axios.post("https://getform.io/f/avrrjkea",userInfo) 
           toast.success("your message has been sent")
           
           
        } catch (error) {
            console.log(error)
            toast.error("some thing went wrong")
        }
  }

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">CONTACT ME</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-4">
        <form
         onSubmit={handleSubmit(onSubmit)}
        // action="https://getform.io/f/avrrjkea"
        // method="POST"
        className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 "
            >
              Full Name
            </label>
            <input
            {...register("name", { required: true })} 
              className=" px-3  shadow appearance-none border rounded-lg  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 "
            >
              Email
            </label>
            <input
             {...register("email", { required: true })}
              className=" px-3  shadow appearance-none border rounded-lg  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-gray-700 "
            >
              Message
            </label>
            <textarea
             {...register("message", { required: true })}
              className=" px-3  shadow appearance-none border rounded-lg  py-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message"
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 ">Send</button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;

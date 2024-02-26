import React, { useState } from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
import { useEffect } from "react";


const Contact = () => {

  useEffect(() => {
    Aos.init({
      duration:2500,
      delay:400,
    })
  })
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]" >
        Contact
      </h1>
      <form
        action="https://getform.io/f/7baf8f45-6072-4350-8fa2-1a46875476fd"
        method="POST"
        encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2" data-aos ="fade-down" data-aos-duration='2000'>
          <div>
            <label className="uppercase text-sm py-2" data-aos ="fade-down" data-aos-duration='2000'>Name</label>
            <input
              className="border-2 rounded-lg p-3  flex border-gray-300 "
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col" data-aos ="fade-down" data-aos-duration='2000'>
            <label className="uppercase text-sm py-2" data-aos ="fade-down" data-aos-duration='2000'>Phone Number</label>
            <input
              className="border-2 rounded-lg p-3   flex border-gray-300 "
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2" data-aos ="fade-down" data-aos-duration='2000'>
          <label className="uppercase text-sm py-2" data-aos ="fade-down" data-aos-duration='2000'>Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300   "
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2" data-aos ="fade-down" data-aos-duration='2000'>
          <label className="uppercase text-sm py-2" data-aos ="fade-down" data-aos-duration='2000'>Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300   "
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2" data-aos ="fade-down" data-aos-duration='2000'> 
          <label className="uppercase text-sm py-2" data-aos ="fade-down" data-aos-duration='2000'>Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 rows-10"
            name="message"
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg" data-aos ="fade-up" data-aos-duration='2000'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

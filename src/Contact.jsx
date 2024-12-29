import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex justify-center items-center bg-[#0a192f] p-4 w-full h-screen"
    >
      <form action="" className="flex flex-col w-full max-w-[600px]">
        <div className="pb-8">
          <p className="inline border-pink-300 border-b-4 font-bold text-4xl text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            // submit the form below or shoot me an email ...
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <button className="flex items-center border-2 hover:border-pink-300 hover:bg-pink-300 mx-auto my-8 px-4 py-3 text-white">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

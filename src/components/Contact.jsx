import React from 'react';
import contactImage from '../assets/contact.svg'; // replace with your actual image

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-pink-900 to-indigo-900 text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img src={contactImage} alt="Contact Illustration" className="w-full h-auto" />
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded border border-gray-300 text-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded border border-gray-300 text-black"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded border border-gray-300 text-black"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full p-3 rounded border border-gray-300 text-black"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded border border-gray-300 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-white text-black mt-16 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-semibold">
          Subscribe to our Newsletter<br />& Never miss latest updates
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-l-full border border-purple-500 flex-1 text-black"
          />
          <button className="bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold px-6 py-3 rounded-r-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

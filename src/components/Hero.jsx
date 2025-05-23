import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import 'react-floating-whatsapp/dist/index.css';

const Hero = () => {
  const services = ["Web Development", "SEO Optimization", "Landing Pages", "Portfolio Websites", "Blog Setup", "Site Maintenance"];

  const pricingPlans = [
    {
      name: "Regular",
      price: "₹4,999",
      features: ["1 Page", "Basic SEO", "Responsive Design"],
      bg: "bg-blue-100",
    },
    {
      name: "Medium",
      price: "₹9,999",
      features: ["Up to 5 Pages", "Advanced SEO", "Contact Form", "Fast Delivery"],
      bg: "bg-blue-200",
    },
    {
      name: "Premium",
      price: "₹14,999",
      features: ["Unlimited Pages", "Premium SEO", "Animations", "Speed Optimization", "Lifetime Support"],
      bg: "bg-blue-300",
    },
  ];

  return (
    <div className="p-6 text-white">
      {/* Hero / Introduction Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I Build Web Solutions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          I offer professional web development services including SEO-friendly websites, landing pages, personal portfolio sites, and more.
        </p>
      </section>

      {/* Services List */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">What I Offer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-xl text-center border border-blue-300">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`rounded-xl p-6 shadow-lg ${plan.bg} text-gray-900`}>
              <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
              <p className="text-xl text-center font-semibold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-center py-1">✔ {feature}</li>
                ))}
              </ul>
              <div className="text-center">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button
      <a
        href="https://wa.me/918123456789?text=Hi%2C%20I'm%20interested%20in%20your%20web%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326a7.903 7.903 0 0 0-5.683-2.326C3.478 0 0 3.477 0 7.753a7.75 7.75 0 0 0 1.056 3.912L.029 16l4.424-1.432A7.885 7.885 0 0 0 7.918 16C12.194 16 16 12.522 16 8.247a7.9 7.9 0 0 0-2.399-5.921zM7.918 14.646a6.7 6.7 0 0 1-3.41-.94l-.244-.144-2.625.85.873-2.552-.158-.262a6.635 6.635 0 0 1-.972-3.345c0-3.68 2.993-6.672 6.683-6.672 1.781 0 3.455.692 4.716 1.951a6.646 6.646 0 0 1 1.957 4.721c0 3.68-2.993 6.673-6.683 6.673zm3.688-4.996c-.205-.102-1.208-.598-1.396-.667-.187-.07-.323-.102-.459.103s-.528.667-.647.805c-.12.138-.238.156-.442.055-.205-.102-.863-.318-1.64-1.014-.606-.54-1.016-1.205-1.135-1.41-.12-.205-.013-.316.09-.418.092-.092.205-.238.308-.357.103-.119.137-.204.206-.34.07-.137.035-.255-.017-.357-.051-.102-.459-1.103-.63-1.51-.165-.395-.334-.341-.459-.346l-.39-.008c-.137 0-.358.051-.545.255-.187.205-.715.698-.715 1.7s.733 1.975.835 2.113c.102.136 1.441 2.199 3.49 3.083.488.211.868.337 1.164.431.489.156.933.134 1.284.081.391-.058 1.208-.494 1.379-.97.17-.476.17-.884.12-.97-.05-.085-.188-.136-.392-.238z" />
        </svg>
      </a> */}

      <FloatingWhatsApp
        phoneNumber="+918870670500"
        accountName="Abhinand"
        avatar="https://avatars.githubusercontent.com/u/000000?v=4" // Optional
        statusMessage="Typically replies within a few hours"
        chatMessage="Hello! 👋 How can I help you?"
        placeholder="Type your message..."
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default Hero;

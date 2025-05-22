import React from "react";

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
    </div>
  );
};

export default Hero;

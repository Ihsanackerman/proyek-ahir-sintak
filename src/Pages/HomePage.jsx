// Improved and Professional Homepage for Aroma Sriwijaya Coffee Website
import React from "react";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurStory />
      <WhyChooseUs />
      <FeaturedProducts />
      <ClientTestimonials />
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <div
      className="hero h-[500px]"
      style={{ backgroundImage: "url(src/assets/coffe.jpg)" }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight">
            Aroma Sriwijaya
          </h1>
          <p className="mb-6 text-2xl">
            Discover Premium Indonesian Coffee, Delivered Worldwide.
          </p>
          <button className="btn bg-amber-700 text-white hover:bg-amber-800">
            Browse Catalog <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <div className="bg-[#fefae0] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <img
          src="src/assets/coffee-beans.jpg"
          alt="Coffee Beans"
          className="rounded-xl w-full max-w-lg shadow-xl"
        />
        <div>
          <p className="text-sm uppercase font-semibold text-amber-600 mb-2">
            Sourced from Indonesia
          </p>
          <h2 className="text-4xl font-bold text-amber-800 mb-4">
            Handpicked Beans with Heart
          </h2>
          <p className="mb-6 text-gray-700">
            We partner with farmers across Indonesia to deliver the highest
            quality Arabica and Robusta beans. Grown sustainably, roasted with
            precision, and crafted to perfection.
          </p>
          <button className="btn bg-amber-700 text-white hover:bg-amber-800">
            Learn Our Story
          </button>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const items = [
    {
      icon: <RiGlobalLine className="text-4xl text-amber-700" />,
      title: "Global Distribution",
      desc: "Trusted logistics partners ensure smooth export to global destinations.",
    },
    {
      icon: <FiCoffee className="text-4xl text-amber-700" />,
      title: "Premium Beans",
      desc: "Only the top 5% of harvested beans meet our strict quality standards.",
    },
    {
      icon: <LuLeaf className="text-4xl text-amber-700" />,
      title: "Eco-Friendly",
      desc: "Sustainability is at the core of every cup we produce.",
    },
  ];

  return (
    <div className="py-20 bg-white px-6">
      <div className="text-center mb-12">
        <p className="text-sm uppercase font-semibold text-amber-600">
          Why Choose Us
        </p>
        <h2 className="text-4xl font-bold">Dedicated to Excellence</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Learn why international clients trust Aroma Sriwijaya as their coffee
          supplier.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-72 bg-[#fff8ed] border border-amber-100 rounded-xl p-6 shadow-sm"
          >
            {item.icon}
            <h3 className="font-semibold text-xl mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const products = [
    {
      title: "Sumatra Mandheling",
      region: "Aceh, North Sumatra",
      desc: "Bold, earthy, full-bodied with dark chocolate & cedar notes.",
      img: "src/assets/product.jpeg",
    },
    {
      title: "Toraja Kalosi",
      region: "South Sulawesi",
      desc: "Complex, well-balanced with spice hints and syrupy body.",
      img: "src/assets/product2.jpeg",
    },
    {
      title: "Java Robusta",
      region: "East Java",
      desc: "Strong, bold, woody with dark chocolate aftertaste.",
      img: "src/assets/product3.jpeg",
    },
  ];

  return (
    <div className="py-20 bg-amber-50 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-amber-800">
          Featured Selections
        </h2>
        <p className="text-gray-700">
          Explore flavors from different Indonesian regions.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div key={i} className="bg-white border rounded-lg shadow-md w-80">
            <img
              src={p.img}
              alt={p.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-amber-800">{p.title}</h3>
              <p className="text-sm text-amber-600">{p.region}</p>
              <p className="text-sm mt-2 text-gray-700">{p.desc}</p>
              <button className="btn w-full mt-4 bg-amber-700 text-white hover:bg-amber-800">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Michael T.",
      feedback:
        "Aroma Sriwijaya provides top-tier beans with unmatched flavor. Always reliable!",
    },
    {
      name: "Yuki H.",
      feedback:
        "Our café has never been better since switching to their beans. Highly recommended.",
    },
    {
      name: "Rafael G.",
      feedback: "Fast shipping, amazing aroma, and premium quality every time.",
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="text-center mb-10">
        <p className="text-sm uppercase text-amber-600 font-semibold">
          What Our Clients Say
        </p>
        <h2 className="text-3xl font-bold">Testimonials</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-amber-50 p-6 rounded-xl shadow-md w-80">
            <p className="italic text-gray-700 mb-4">“{t.feedback}”</p>
            <h4 className="text-amber-800 font-semibold">— {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

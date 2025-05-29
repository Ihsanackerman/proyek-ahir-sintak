"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { useState } from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <WhyChooseUs />
      <OurProducts />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/bg_cafe.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70"></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 opacity-20 animate-pulse">
          <FiCoffee className="h-16 w-16 text-white" />
        </div>
        <div
          className="absolute top-1/3 right-20 opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <LuLeaf className="h-12 w-12 text-white" />
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <RiGlobalLine className="h-14 w-14 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full">
          <FiCoffee className="h-4 w-4 mr-2" />
          <span className="font-medium">
            Crafting Perfect Coffee Since 2020
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Bengkel Kopi
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Where every cup is meticulously crafted in our coffee workshop.
          Experience the perfect blend of tradition, innovation, and exceptional
          taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
            Explore Our Menu
            <IoIosArrowRoundForward className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105">
            Visit Our Workshop
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: <RiGlobalLine className="h-8 w-8" />,
      title: "Global Network",
      description:
        "Supplying the finest beans to top roasters and distributors around the world.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FiCoffee className="h-8 w-8" />,
      title: "Premium Selection",
      description:
        "Expertly curated Arabica and Robusta blends sourced from sustainable farms.",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      icon: <LuLeaf className="h-8 w-8" />,
      title: "Eco-Friendly Practices",
      description:
        "Committed to environmentally responsible farming and fair trade principles.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Quality Assurance",
      description:
        "Every batch is carefully tested and approved by our expert quality control team.",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <span className="font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by coffee connoisseurs and businesses worldwide for our
            unwavering dedication to quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurProducts() {
  const products = [
    {
      name: "Signature Bengkel Blend",
      category: "House Special",
      description:
        "Our signature blend combining the best of Sumatran and Javanese beans with notes of dark chocolate and caramel.",
      price: "Rp 45,000",
      image: "/src/assets/product.jpeg",
      badge: "Best Seller",
      badgeColor: "bg-red-500",
    },
    {
      name: "Workshop Espresso",
      category: "Espresso Based",
      description:
        "Bold and intense espresso perfect for those who appreciate the pure essence of coffee craftsmanship.",
      price: "Rp 25,000",
      image: "/src/assets/product2.jpeg",
      badge: "Strong",
      badgeColor: "bg-gray-800",
    },
    {
      name: "Artisan Cold Brew",
      category: "Cold Coffee",
      description:
        "Slow-brewed for 18 hours to create a smooth, refreshing coffee experience with natural sweetness.",
      price: "Rp 35,000",
      image: "/src/assets/product3.jpeg",
      badge: "Refreshing",
      badgeColor: "bg-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <span className="font-medium">Our Coffee Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Coffee Selections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated range from Indonesia's best regions, each
            carefully crafted to deliver an exceptional coffee experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {product.badge}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-amber-600 font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Global Beans Co.",
      role: "International Distributor",
      quote:
        "We've sourced from many suppliers, but Bengkel Kopi stands out for consistency and flavor. Their beans are the foundation of our premium blends.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "CoffeeCraft Roasters",
      role: "Specialty Roaster",
      quote:
        "Their beans are the base of our best-selling blends. Truly authentic Indonesian taste with exceptional quality control.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "IndoBrew Distributors",
      role: "Regional Partner",
      quote:
        "Excellent service and outstanding quality! Our go-to partner for premium beans. They never disappoint our customers.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center bg-amber-600/20 text-amber-300 border border-amber-600/30 px-4 py-2 rounded-full">
            <span className="font-medium">What Our Clients Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimonials from Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real testimonials from businesses and partners around the globe who
            trust our quality and service.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 border-4 border-amber-400 rounded-full overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-xl text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-amber-300 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="border border-white/20 text-white hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-amber-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="border border-white/20 text-white hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

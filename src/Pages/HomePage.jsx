"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <HeroSection />
      <WhyChooseUs />
      <OurProducts />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-600 p-2 rounded-lg">
              <span className="text-white text-xl">☕</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Bengkel Kopi
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </a>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <span className="text-4xl">☕</span>
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <span className="text-3xl">🔧</span>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce">
        <span className="text-3xl">❤️</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6 inline-block bg-amber-600/20 text-amber-300 border border-amber-600/30 px-4 py-2 rounded-full">
          ☕ Crafting Perfect Coffee Since 2020
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Bengkel Kopi
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Where every cup is meticulously crafted in our coffee workshop.
          Experience the perfect blend of tradition and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-lg transition-colors group">
            Explore Our Menu
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg transition-colors">
            Visit Our Workshop
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: "🔧",
      title: "Artisan Craftsmanship",
      description:
        "Every cup is carefully crafted by our skilled baristas using traditional and modern techniques.",
      color: "bg-blue-500",
    },
    {
      icon: "☕",
      title: "Premium Beans",
      description:
        "We source the finest Indonesian coffee beans directly from local farmers and roast them fresh daily.",
      color: "bg-amber-500",
    },
    {
      icon: "👥",
      title: "Community Hub",
      description:
        "More than a cafe - we're a gathering place for coffee lovers, creators, and dreamers.",
      color: "bg-green-500",
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description:
        "Recognized for excellence in coffee brewing and customer service by local food critics.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
            Why Choose Bengkel Kopi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Crafted with Passion, Served with Love
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our coffee workshop special and why customers
            keep coming back for more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-lg shadow-lg border"
            >
              <div className="p-8 text-center">
                <div
                  className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform text-2xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
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
      image: "/placeholder.svg?height=300&width=400",
      badge: "Best Seller",
    },
    {
      name: "Workshop Espresso",
      category: "Espresso Based",
      description:
        "Bold and intense espresso perfect for those who appreciate the pure essence of coffee craftsmanship.",
      price: "Rp 25,000",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Strong",
    },
    {
      name: "Artisan Cold Brew",
      category: "Cold Coffee",
      description:
        "Slow-brewed for 18 hours to create a smooth, refreshing coffee experience with natural sweetness.",
      price: "Rp 35,000",
      image: "/placeholder.svg?height=300&width=400",
      badge: "Refreshing",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            Our Coffee Menu
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Handcrafted Coffee Creations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each drink is a masterpiece, carefully crafted in our workshop using
            premium ingredients and expert techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white rounded-lg shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    {product.price}
                  </span>
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-colors">
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
      name: "Sarah Wijaya",
      role: "Coffee Enthusiast",
      quote:
        "Bengkel Kopi is my daily sanctuary. The attention to detail in every cup is extraordinary, and the atmosphere makes me feel like I'm part of a coffee-loving family.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Ahmad Rizki",
      role: "Local Business Owner",
      quote:
        "I've tried coffee shops all over Jakarta, but nothing compares to Bengkel Kopi. Their signature blend is absolutely perfect, and the baristas are true artists.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Maya Sari",
      role: "Food Blogger",
      quote:
        "As a food blogger, I'm quite picky about coffee. Bengkel Kopi exceeded all my expectations. The workshop concept is unique and the coffee quality is world-class.",
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
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-amber-600/20 text-amber-300 border border-amber-600/30 px-4 py-2 rounded-full">
            Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Coffee Lovers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real customers who have experienced the magic of
            Bengkel Kopi.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 border-4 border-amber-400 rounded-full overflow-hidden">
                    <img
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <span key={i} className="text-amber-400 text-xl">
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <blockquote className="text-lg md:text-xl italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-xl">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-amber-300">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="border border-white/30 text-white hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-amber-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="border border-white/30 text-white hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <span className="text-white text-xl">☕</span>
              </div>
              <span className="text-2xl font-bold">Bengkel Kopi</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your neighborhood coffee workshop where passion meets perfection.
              Join us for an unforgettable coffee experience.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">🌿</span>
              <span className="text-sm">
                Sustainably sourced • Locally roasted
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Jl. Coffee Street No. 123</li>
              <li>Jakarta Selatan, 12345</li>
              <li>+62 21 1234 5678</li>
              <li>hello@bengkelkopi.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Bengkel Kopi. All rights reserved. Made with ❤️ and lots
            of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}

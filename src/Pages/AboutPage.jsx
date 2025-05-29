"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function AboutPage() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <SectionDivider />
      <OurStory />
      <SectionDivider />
      <OurMission />
      <SectionDivider />
      <OurTeam />
      <SectionDivider />
      <WorkshopTour />
      <SectionDivider />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default AboutPage;

// Komponen pembatas section
function SectionDivider() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white px-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/coffee_farm.jpg')",
          backgroundSize: "cover",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 left-8 opacity-15 animate-pulse">
          <span className="text-8xl">☕</span>
        </div>
        <div
          className="absolute top-1/4 right-16 opacity-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-6xl">🌿</span>
        </div>
        <div
          className="absolute top-2/3 left-1/4 opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-7xl">🌍</span>
        </div>
        <div
          className="absolute top-1/2 right-1/3 opacity-8 animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          <span className="text-5xl">☕</span>
        </div>
        <div
          className="absolute bottom-1/4 right-8 opacity-12 animate-pulse"
          style={{ animationDelay: "4s" }}
        >
          <span className="text-6xl">🌱</span>
        </div>
        <div
          className="absolute bottom-1/3 left-16 opacity-10 animate-pulse"
          style={{ animationDelay: "5s" }}
        >
          <span className="text-5xl">🫘</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full">
            <span className="mr-2">🌍</span>
            <span className="font-medium">Our Journey Since 2020</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              CoffeeBean Co.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the passion, people, and process behind Indonesia's premier
            coffee supplier.
          </p>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
              <span className="font-medium">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From Small Workshop to Global Supplier
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                CoffeeBean Co. began in 2020 as a small coffee workshop in
                Palembang, founded by a group of passionate coffee enthusiasts
                with a dream to showcase Indonesia's exceptional coffee beans to
                the world.
              </p>
              <p>
                What started as a modest roastery quickly gained recognition for
                its commitment to quality, sustainability, and the unique flavor
                profiles of our carefully selected beans. Our founders traveled
                across Indonesia's diverse islands, building relationships with
                local farmers and learning traditional cultivation methods.
              </p>
              <p>
                Today, we're proud to supply premium Indonesian coffee beans to
                roasters, cafes, and distributors across the globe, while
                maintaining the same passion and attention to detail that
                defined our humble beginnings.
              </p>
            </div>
          </div>
          <div className="relative max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop"
                alt="Coffee farmers"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-amber-500 rounded-lg p-3 shadow-lg">
              <p className="text-white font-bold text-lg">Est. 2020</p>
              <p className="text-white/80 text-sm">Palembang, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurMission() {
  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible farming practices and supporting the communities where our coffee is grown.",
    },
    {
      icon: "✨",
      title: "Quality",
      description:
        "Every bean is carefully selected, processed, and tested to ensure it meets our exacting standards for flavor and freshness.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "We build long-term relationships with farmers, paying fair prices and investing in their communities and techniques.",
    },
    {
      icon: "🔄",
      title: "Innovation",
      description:
        "While respecting tradition, we continuously explore new processing methods and flavor profiles to push boundaries.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <span className="font-medium">Our Mission & Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Elevating Indonesian Coffee to Global Recognition
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to showcase the exceptional quality and unique
            character of Indonesian coffee while ensuring sustainable practices
            and fair compensation for the farmers who make it all possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-2xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  const [activeTab, setActiveTab] = useState(0);

  const team = [
    {
      name: "Budi Santoso",
      role: "Founder & CEO",
      bio: "Coffee enthusiast with 15+ years in the industry and a passion for Indonesian coffee varieties. Budi has traveled to over 20 countries studying coffee cultivation techniques and has been recognized as a leading voice in sustainable coffee production in Southeast Asia.",
      expertise: [
        "Strategic Leadership",
        "Coffee Sourcing",
        "Sustainable Business",
      ],
      icon: "☕",
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "Dewi Lestari",
      role: "Head of Coffee Sourcing",
      bio: "Expert in identifying premium beans and building relationships with coffee farmers across Indonesia. With a background in agricultural science, Dewi works directly with farming communities to improve cultivation practices and ensure fair compensation.",
      expertise: ["Bean Selection", "Farmer Relations", "Quality Control"],
      icon: "🌱",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Agus Wijaya",
      role: "Master Roaster",
      bio: "Award-winning roaster who perfects our signature blends and single-origin offerings. Agus trained in Italy and has developed a unique roasting style that brings out the distinctive characteristics of Indonesian coffee beans.",
      expertise: ["Roasting Techniques", "Flavor Profiling", "Blend Creation"],
      icon: "🔥",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Siti Rahayu",
      role: "Workshop Director",
      bio: "Passionate educator who leads our coffee workshops and training programs. With a background in hospitality and education, Siti has designed immersive learning experiences that have trained over 500 baristas and coffee enthusiasts.",
      expertise: [
        "Training & Development",
        "Customer Experience",
        "Coffee Education",
      ],
      icon: "📚",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <span className="font-medium">Meet Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Passionate People Behind Our Coffee
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our diverse team of coffee experts brings together decades of
            experience and a shared commitment to quality and sustainability.
          </p>
        </div>

        {/* Team Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {team.map((member, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Member Details */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-1">
              <div
                className={`bg-gradient-to-r ${team[activeTab].color} w-24 h-24 rounded-full flex items-center justify-center text-white mx-auto text-4xl shadow-lg`}
              >
                {team[activeTab].icon}
              </div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {team[activeTab].name}
              </h3>
              <p className="text-amber-600 font-medium mb-4">
                {team[activeTab].role}
              </p>
              <p className="text-gray-600 mb-6">{team[activeTab].bio}</p>

              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {team[activeTab].expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-3 py-1 rounded-full text-sm text-amber-700 border border-amber-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-amber-500">
            <p className="text-4xl font-bold text-amber-600">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-amber-500">
            <p className="text-4xl font-bold text-amber-600">20+</p>
            <p className="text-gray-600">Coffee Varieties</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-amber-500">
            <p className="text-4xl font-bold text-amber-600">500+</p>
            <p className="text-gray-600">Trained Baristas</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-amber-500">
            <p className="text-4xl font-bold text-amber-600">12</p>
            <p className="text-gray-600">Global Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkshopTour() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center bg-amber-600/20 text-amber-300 border border-amber-600/30 px-4 py-2 rounded-full">
              <span className="font-medium">Visit Our Workshop</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Art of Coffee Making
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our coffee workshop in Palembang is open for visitors who want
                to see firsthand how we select, roast, and package our premium
                coffee beans.
              </p>
              <p>
                Join one of our guided tours to learn about the journey from
                bean to cup, or participate in a hands-on workshop where you can
                learn brewing techniques from our expert baristas.
              </p>
              <p>
                Whether you're a coffee professional or an enthusiast, our
                workshop offers an immersive experience into the world of
                Indonesian coffee.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-full mr-4">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-gray-300">
                    Jl. Kopi No. 123, Palembang, South Sumatra, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-2 rounded-full mr-4">
                  <span className="text-white">🕒</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Opening Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 3:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                Book a Tour
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=500&h=300&fit=crop"
                  alt="Coffee roasting"
                  className="w-full h-auto hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop"
                  alt="Coffee farmers"
                  className="w-full h-auto hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop"
                  alt="Coffee workshop"
                  className="w-full h-auto hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=300&fit=crop"
                  alt="Coffee beans"
                  className="w-full h-auto hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-orange-200 rounded-full opacity-40"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a cafe owner, distributor, or coffee enthusiast,
              we'd love to hear from you. Reach out to discuss how we can work
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
              <Link
                to="/product"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

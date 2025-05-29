import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HomePage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const handleVisitWorkshop = () => {
    setShowWorkshopModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  const closeWorkshopModal = () => {
    setShowWorkshopModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection onVisitWorkshop={handleVisitWorkshop} />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <OurProducts onOrderNow={handleOrderNow} />
      <SectionDivider />
      <ClientTestimonials />
      <Footer />

      {showPaymentModal && (
        <PaymentModal product={selectedProduct} onClose={closePaymentModal} />
      )}

      {showWorkshopModal && <WorkshopModal onClose={closeWorkshopModal} />}
    </div>
  );
}

export default HomePage;

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

function HeroSection({ onVisitWorkshop }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/bg_cafe.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70"></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 opacity-20 animate-pulse">
          <span className="text-6xl">☕</span>
        </div>
        <div
          className="absolute top-1/3 right-20 opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-4xl">🌿</span>
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-5xl">🌍</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full">
          <span className="mr-2">☕</span>
          <span className="font-medium">
            Crafting Perfect Coffee Since 2020
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            CoffeeBean Co.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Where every cup is meticulously crafted in our coffee workshop.
          Experience the perfect blend of tradition, innovation, and exceptional
          taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Perbaikan: Ganti button dengan Link */}
          <Link
            to="/product"
            className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center"
          >
            Explore Our Menu
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          <button
            onClick={onVisitWorkshop}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
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
      icon: "🌍",
      title: "Global Network",
      description:
        "Supplying the finest beans to top roasters and distributors around the world.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "☕",
      title: "Premium Selection",
      description:
        "Expertly curated Arabica and Robusta blends sourced from sustainable farms.",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Practices",
      description:
        "Committed to environmentally responsible farming and fair trade principles.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: "✅",
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
                className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}
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

function OurProducts({ onOrderNow }) {
  const products = [
    {
      id: 1,
      name: "Signature Bengkel Blend",
      category: "House Special",
      description:
        "Our signature blend combining the best of Sumatran and Javanese beans with notes of dark chocolate and caramel.",
      price: "Rp 45.000",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      badge: "Best Seller",
      badgeColor: "bg-red-500",
      origin: "Sumatra & Java Blend",
      processing: "Medium Roast",
      altitude: "1,200-1,500 masl",
      flavor: "Dark Chocolate, Caramel, Nutty",
      available: "Year-round",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Workshop Espresso",
      category: "Espresso Based",
      description:
        "Bold and intense espresso perfect for those who appreciate the pure essence of coffee craftsmanship.",
      price: "Rp 25.000",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      badge: "Strong",
      badgeColor: "bg-gray-800",
      origin: "East Java",
      processing: "Dark Roast",
      altitude: "1,000-1,400 masl",
      flavor: "Bold, Intense, Smoky",
      available: "Year-round",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Artisan Cold Brew",
      category: "Cold Coffee",
      description:
        "Slow-brewed for 18 hours to create a smooth, refreshing coffee experience with natural sweetness.",
      price: "Rp 35.000",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      badge: "Refreshing",
      badgeColor: "bg-blue-500",
      origin: "Bali Kintamani",
      processing: "Cold Brew",
      altitude: "1,200-1,600 masl",
      flavor: "Smooth, Sweet, Refreshing",
      available: "Year-round",
      rating: 4.8,
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
                <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium ml-1">
                    {product.rating}
                  </span>
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
                  <button
                    onClick={() => onOrderNow(product)}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
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
      name: "John Doe",
      role: "CEO Global Beans Co.",
      quote:
        "We've sourced from many suppliers, but CoffeeBean Co. stands out for consistency and flavor. Their beans are the foundation of our premium blends.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Owner CoffeeCraft Roasters",
      quote:
        "Their beans are the base of our best-selling blends. Truly authentic Indonesian taste with exceptional quality control.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Director IndoBrew Distributors",
      quote:
        "Excellent service and outstanding quality! Our go-to partner for premium beans. They never disappoint our customers.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
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
                <div className="w-24 h-24 border-4 border-amber-400 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">
                      ⭐
                    </span>
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
              ←
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
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentModal({ product, onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate total price
    const priceNumber = Number.parseInt(product.price.replace(/[^\d]/g, ""));
    const totalPrice = priceNumber * quantity;

    // Here you can add your payment processing logic
    alert(
      `Pesanan berhasil!\n\nNama: ${customerName}\nProduk: ${
        product.name
      }\nJumlah: ${quantity} kg\nTotal: Rp ${totalPrice.toLocaleString(
        "id-ID"
      )}\nTelepon: ${phoneNumber}\nAlamat: ${address}`
    );

    onClose();
  };

  const priceNumber = Number.parseInt(product.price.replace(/[^\d]/g, ""));
  const totalPrice = priceNumber * quantity;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Form Pemesanan</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Product Info */}
          <div className="bg-amber-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-lg font-bold text-amber-800">
                  {product.price}/kg
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon *
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah (kg) *
              </label>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center justify-center font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(1, Number.parseInt(e.target.value) || 1)
                    )
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="1"
                  required
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Pengiriman *
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Masukkan alamat lengkap"
                rows="3"
                required
              />
            </div>

            {/* Total Price */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Total Harga:</span>
                <span className="text-2xl font-bold text-amber-800">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {quantity} kg × {product.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-md font-medium"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function WorkshopModal({ onClose }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [participants, setParticipants] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const availableTimes = ["09:00", "11:00", "13:00", "15:00", "17:00"];
  const workshopPrice = 150000; // Rp 150.000 per person
  const totalPrice = participants * workshopPrice;

  // Get tomorrow's date as the minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Reservasi Workshop Berhasil!
    
Nama: ${name}
Email: ${email}
Telepon: ${phone}
Tanggal: ${selectedDate}
Waktu: ${selectedTime}
Jumlah Peserta: ${participants}
Total Biaya: Rp ${totalPrice.toLocaleString("id-ID")}
Permintaan Khusus: ${specialRequests || "Tidak ada"}`);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Reservasi Workshop Kopi
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Workshop Info */}
            <div>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop"
                  alt="Coffee Workshop"
                  className="w-full h-64 object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                CoffeeBean Co. Workshop Experience
              </h3>

              <div className="space-y-4 text-gray-700">
                <p>
                  Ikuti workshop kopi kami dan pelajari seni pembuatan kopi dari
                  para ahli. Workshop ini mencakup:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Pengenalan berbagai jenis biji kopi Indonesia</li>
                  <li>Teknik roasting dan pengaruhnya terhadap rasa</li>
                  <li>
                    Metode brewing yang berbeda (Pour Over, French Press,
                    Espresso)
                  </li>
                  <li>Sesi cupping untuk melatih palate Anda</li>
                  <li>Sertifikat keikutsertaan</li>
                  <li>Goodie bag berisi 100gr kopi pilihan</li>
                </ul>

                <div className="bg-amber-50 p-4 rounded-lg mt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Durasi:</span>
                    <span>2 jam</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Kapasitas:</span>
                    <span>Maksimal 10 orang</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Harga:</span>
                    <span className="font-bold text-amber-800">
                      Rp 150.000/orang
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Workshop *
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={minDate}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu Workshop *
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih waktu</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time} WIB
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Peserta *
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() =>
                        setParticipants(Math.max(1, participants - 1))
                      }
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={participants}
                      onChange={(e) =>
                        setParticipants(
                          Math.max(
                            1,
                            Math.min(10, Number.parseInt(e.target.value) || 1)
                          )
                        )
                      }
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="1"
                      max="10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setParticipants(Math.min(10, participants + 1))
                      }
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Permintaan Khusus
                  </label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Informasi tambahan atau permintaan khusus"
                    rows="3"
                  />
                </div>

                {/* Total Price */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      Total Biaya:
                    </span>
                    <span className="text-2xl font-bold text-amber-800">
                      Rp {totalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {participants} orang × Rp{" "}
                    {workshopPrice.toLocaleString("id-ID")}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-md font-medium"
                  >
                    Reservasi Sekarang
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

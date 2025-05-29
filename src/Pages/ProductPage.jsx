"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ProductPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <NavBar />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <ProductSection onAddToCart={handleAddToCart} />
        <Footer />
      </div>

      {showPaymentModal && (
        <PaymentModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default ProductPage;

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Product" },
    { path: "/contact", label: "Contact" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            {/* Coffee Logo - Orange Circle */}
            <div className="relative">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.5,3H6C4.89,3 4,3.89 4,5V19A2,2 0 0,0 6,21H18A2,2 0 0,0 20,19V5C20,3.89 19.1,3 18,3H18.5M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7Z" />
                </svg>
              </div>
            </div>

            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">
                CoffeeBean Co.
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                Premium Indonesian Coffee
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-orange-600 ${
                  isActive(item.path)
                    ? "text-gray-900 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <button className="relative p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* Get Started Button */}
            <button className="hidden sm:flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span>Get Started</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-orange-700 bg-orange-50 border-l-4 border-orange-600"
                      : "text-gray-700 hover:text-orange-700 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Get Started Button */}
              <button className="mt-4 flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('src/assets/bg2_cafe')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Premium Indonesian Coffee
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          Discover the finest coffee beans from the volcanic soils of Indonesia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-800 hover:bg-amber-900 text-white text-lg px-8 py-3 rounded-md font-medium shadow-lg">
            Explore Products
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 text-lg px-8 py-3 rounded-md font-medium transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductSection({ onAddToCart }) {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      title: "Sumatra Mandheling",
      origin: "Aceh, North Sumatra",
      processing: "Wet-Hulled",
      altitude: "1,200-1,500 masl",
      flavor: "Earthy, Herbal, Spicy",
      available: "Year-round",
      rating: 4.8,
      price: "Rp 42.000",
      description:
        "A full-bodied coffee with distinctive earthy flavors and low acidity. Perfect for those who enjoy bold, complex coffee with herbal undertones.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      title: "Java Preanger",
      origin: "West Java",
      processing: "Washed",
      altitude: "1,300-1,600 masl",
      flavor: "Citrus, Floral, Clean",
      available: "June - December",
      rating: 4.7,
      price: "Rp 45.000",
      description:
        "A bright and clean coffee with vibrant citrus notes and delicate floral aromas. Grown in the highlands of West Java with traditional methods.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      title: "Bali Kintamani",
      origin: "Bali",
      processing: "Wet Process",
      altitude: "1,200-1,600 masl",
      flavor: "Lemon, Caramel, Nutty",
      available: "May - October",
      rating: 4.6,
      price: "Rp 38.000",
      description:
        "A well-balanced coffee with bright lemon acidity, sweet caramel notes, and a nutty finish. Cultivated in the volcanic soils of Mount Batur.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      title: "Flores Bajawa",
      origin: "East Nusa Tenggara",
      processing: "Semi-Washed",
      altitude: "1,300-1,800 masl",
      flavor: "Chocolate, Spice, Floral",
      available: "June - November",
      rating: 4.9,
      price: "Rp 44.000",
      description:
        "An exceptional coffee with rich chocolate flavors, warm spices, and subtle floral notes. Grown by small-scale farmers in the Bajawa highlands.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
      title: "Toraja Kalosi",
      origin: "South Sulawesi",
      processing: "Wet-Hulled",
      altitude: "1,400-1,800 masl",
      flavor: "Dark Chocolate, Spicy, Earthy",
      available: "Year-round",
      rating: 4.8,
      price: "Rp 43.000",
      description:
        "A premium coffee with intense dark chocolate flavors, spicy complexity, and earthy undertones. Sourced from the legendary Toraja region.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop",
      title: "Java Robusta",
      origin: "East Java",
      processing: "Dry Process",
      altitude: "600-900 masl",
      flavor: "Woody, Nutty, Strong",
      available: "Year-round",
      rating: 4.5,
      price: "Rp 29.000",
      description:
        "A robust and strong coffee with woody characteristics and nutty undertones. Perfect for espresso blends and those who prefer intense caffeine.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop",
      title: "Gayo Highland",
      origin: "Central Aceh",
      processing: "Wet-Hulled",
      altitude: "1,200-1,700 masl",
      flavor: "Fruity, Wine-like, Complex",
      available: "April - September",
      rating: 4.7,
      price: "Rp 41.000",
      description:
        "A unique coffee with wine-like characteristics and fruity complexity. Grown in the pristine highlands of Gayo with organic farming methods.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      title: "Papua Wamena",
      origin: "Papua",
      processing: "Washed",
      altitude: "1,500-2,000 masl",
      flavor: "Bright, Citrus, Honey",
      available: "July - December",
      rating: 4.6,
      price: "Rp 39.000",
      description:
        "A high-altitude coffee with bright acidity, citrus notes, and honey sweetness. Cultivated by indigenous farmers in the Baliem Valley.",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
      title: "Lampung Robusta",
      origin: "Lampung",
      processing: "Dry Process",
      altitude: "700-1,200 masl",
      flavor: "Bold, Bitter, Intense",
      available: "Year-round",
      rating: 4.4,
      price: "Rp 31.000",
      description:
        "A strong and bold robusta with intense flavor and high caffeine content. Perfect for traditional Indonesian coffee preparations and espresso.",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1504627298434-2119d6928e93?w=400&h=300&fit=crop",
      title: "Sidikalang",
      origin: "North Sumatra",
      processing: "Semi-Washed",
      altitude: "1,200-1,500 masl",
      flavor: "Balanced, Smooth, Mild",
      available: "Year-round",
      rating: 4.5,
      price: "Rp 35.000",
      description:
        "A well-balanced coffee with smooth body and mild acidity. Known for its consistency and approachable flavor profile, perfect for daily brewing.",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&h=300&fit=crop",
      title: "Mangkuraja",
      origin: "South Sumatra",
      processing: "Wet-Hulled",
      altitude: "1,000-1,400 masl",
      flavor: "Caramel, Vanilla, Sweet",
      available: "March - August",
      rating: 4.6,
      price: "Rp 37.000",
      description:
        "A sweet and aromatic coffee with caramel and vanilla notes. Grown in the fertile volcanic soils of South Sumatra with traditional processing methods.",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
      title: "Kerinci Kayu Aro",
      origin: "Jambi",
      processing: "Wet Process",
      altitude: "1,500-1,800 masl",
      flavor: "Floral, Tea-like, Delicate",
      available: "May - November",
      rating: 4.8,
      price: "Rp 40.000",
      description:
        "An elegant coffee with delicate floral notes and tea-like qualities. Grown in the highest coffee-growing region of Sumatra with meticulous care.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Coffee Collection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Each coffee tells a story of its origin, from the volcanic soils to
          the hands that carefully cultivate and process every bean.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 bg-amber-800 text-white px-2 py-1 rounded text-sm">
          {product.available}
        </span>
        <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-sm font-medium ml-1">{product.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <span className="text-2xl font-bold text-amber-800">
            {product.price}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <span className="text-sm">📍 {product.origin}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">Processing:</span>
            <span className="text-gray-600">{product.processing}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">⛰️ Altitude:</span>
            <span className="text-gray-600">{product.altitude}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">Flavor Notes:</span>
            <span className="text-gray-600">{product.flavor}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">📅 Available:</span>
            <span className="text-gray-600">{product.available}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            🛒 Add to Cart
          </button>
          <button className="border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white py-2 px-3 rounded-md transition-colors">
            ⭐
          </button>
        </div>
      </div>
    </div>
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
        product.title
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
                alt={product.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.origin}</p>
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

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.54,12.19 14.58,12.81C16.09,13.45 17,14.94 17,16.61C17,18.95 15.05,20.9 12.71,20.9H9.29C6.95,20.9 5,18.95 5,16.61C5,14.94 5.91,13.45 7.42,12.81C5.46,12.19 4,10.28 4,8V5L2,5V8H0V3H6V8C6,9.1 6.9,10 8,10H10C11.1,10 12,9.1 12,8V3H18V8C18,9.1 17.1,10 16,10H14C12.9,10 12,9.1 12,8V5H10V8C10,10.76 12.24,13 15,13H17C19.76,13 22,10.76 22,8V3H24V8H22V5L20,5Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">CoffeeBean Co.</span>
                <span className="text-xs text-gray-400 -mt-1">
                  Premium Indonesian Coffee
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              Premium Indonesian coffee beans sourced directly from local
              farmers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Arabica Beans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Robusta Beans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ground Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Coffee Blends
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Jakarta, Indonesia</p>
              <p>+62 21 1234 5678</p>
              <p>info@coffeebean.co.id</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CoffeeBean Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

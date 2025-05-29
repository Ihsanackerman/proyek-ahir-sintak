import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
    subscribe: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message:
          "Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
        subscribe: false,
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div className="pt-16">
        <ContactHero />
        <ContactInfo />
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formStatus={formStatus}
        />
        <MapSection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
}

export default KontakPage;

function ContactHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#fdf8ed]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Coffee Bean Illustration - Left Side */}
      <div className="absolute left-10 top-1/4 opacity-20 w-32 h-32">
        <img
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop&q=80"
          alt="Coffee Beans"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      {/* Coffee Cup Illustration - Right Side */}
      <div className="absolute right-10 bottom-1/4 opacity-20 w-32 h-32">
        <img
          src="https://images.unsplash.com/photo-1611174275735-af3bf5ffe49b?w=200&h=200&fit=crop&q=80"
          alt="Coffee Leaf"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 inline-flex items-center bg-[#fef3d1] text-amber-800 px-6 py-3 rounded-full border border-amber-200">
          <span className="mr-2">📞</span>
          <span className="font-medium">Hubungi Kami</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="text-orange-600">Kontak</span>
          <br />
          <span className="text-gray-800">CoffeeBean Co.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          Kami selalu siap mendengarkan Anda. Hubungi kami untuk pertanyaan,
          saran, atau sekadar untuk mengobrol tentang kopi.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  const contactMethods = [
    {
      icon: "📱",
      title: "Telepon & WhatsApp",
      details: ["+62 21 1234 5678", "+62 812 3456 7890 (WhatsApp)"],
      action: {
        text: "Hubungi Sekarang",
        link: "tel:+622112345678",
      },
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["info@coffeebean.co.id", "orders@coffeebean.co.id"],
      action: {
        text: "Kirim Email",
        link: "mailto:info@coffeebean.co.id",
      },
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📍",
      title: "Lokasi",
      details: ["Jl. Kopi Arabika No. 123", "Jakarta Selatan, 12345"],
      action: {
        text: "Lihat di Maps",
        link: "#map-section",
      },
      color: "from-red-500 to-red-600",
    },
    {
      icon: "🕒",
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 07:00 - 22:00",
        "Sabtu - Minggu: 08:00 - 23:00",
      ],
      action: {
        text: "Reservasi",
        link: "#reservation",
      },
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-2xl mb-6`}
              >
                {method.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {method.title}
              </h3>

              <div className="space-y-2 mb-6">
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>

              <a
                href={method.action.link}
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
              >
                {method.action.text}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm({ formData, handleChange, handleSubmit, formStatus }) {
  const subjectOptions = [
    { value: "general", label: "Pertanyaan Umum" },
    { value: "order", label: "Pesanan & Pengiriman" },
    { value: "wholesale", label: "Kerjasama Bisnis" },
    { value: "career", label: "Karir" },
    { value: "feedback", label: "Saran & Masukan" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kirim Pesan Kepada Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ada pertanyaan, saran, atau ingin bekerja sama dengan kami? Isi
              formulir di bawah ini dan tim kami akan segera menghubungi Anda.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Form Section */}
              <div className="md:w-2/3 p-6 md:p-10">
                {formStatus.submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {formStatus.message}
                  </div>
                )}

                {formStatus.error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      >
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="subscribe"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Saya ingin menerima newsletter dan promo dari CoffeeBean
                      Co.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>

              {/* Image Section */}
              <div
                className="md:w-1/3 bg-cover bg-center hidden md:block"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=900&fit=crop')",
                }}
              >
                <div className="h-full bg-gradient-to-b from-amber-600/40 to-amber-900/60 p-10 flex flex-col justify-end">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Hubungi Kami Langsung
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="mr-3 text-xl">📱</span>
                        <div>
                          <p className="font-medium">Telepon</p>
                          <p className="text-white/80">+62 21 1234 5678</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 text-xl">📧</span>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-white/80">info@coffeebean.co.id</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 text-xl">🕒</span>
                        <div>
                          <p className="font-medium">Jam Operasional</p>
                          <p className="text-white/80">
                            Setiap Hari: 07:00 - 22:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="map-section" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temukan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kunjungi CoffeeBean Co. dan nikmati pengalaman kopi terbaik langsung
            di tempat kami.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Map */}
            <div className="md:w-2/3 h-96 bg-gray-200">
              {/* Replace with actual map embed */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&h=600&fit=crop')",
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-900/30">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Google Maps
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Peta interaktif akan ditampilkan di sini.
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Buka di Google Maps
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="md:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Lokasi Kami
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    CoffeeBean Co. - Jakarta Selatan
                  </h4>
                  <p className="text-gray-600">
                    Jl. Kopi Arabika No. 123
                    <br />
                    Jakarta Selatan, 12345
                    <br />
                    Indonesia
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Transportasi
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">🚗</span>
                      <span>Parkir tersedia di basement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🚇</span>
                      <span>5 menit dari Stasiun MRT Senayan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🚌</span>
                      <span>Bus Transjakarta Halte Senayan</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Jam Operasional
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between">
                      <span>Senin - Jumat:</span>
                      <span>07:00 - 22:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sabtu - Minggu:</span>
                      <span>08:00 - 23:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hari Libur:</span>
                      <span>08:00 - 22:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Apakah CoffeeBean Co. menerima pesanan kopi dalam jumlah besar?",
      answer:
        "Ya, kami menerima pesanan kopi dalam jumlah besar untuk acara, kantor, atau kebutuhan bisnis lainnya. Silakan hubungi kami melalui formulir kontak dengan subjek 'Kerjasama Bisnis' atau kirim email ke wholesale@coffeebean.co.id untuk mendapatkan penawaran khusus.",
    },
    {
      question: "Bagaimana cara memesan kopi online dari CoffeeBean Co.?",
      answer:
        "Anda dapat memesan kopi kami secara online melalui website resmi kami di halaman Produk. Pilih kopi yang Anda inginkan, tambahkan ke keranjang, dan selesaikan pembayaran. Kami akan mengirimkan pesanan Anda dalam 1-3 hari kerja.",
    },
    {
      question: "Apakah CoffeeBean Co. menyediakan layanan pengiriman?",
      answer:
        "Ya, kami menyediakan layanan pengiriman ke seluruh Indonesia. Biaya pengiriman bervariasi tergantung lokasi dan berat pesanan. Untuk pengiriman di area Jakarta, kami juga menyediakan layanan same-day delivery untuk pesanan yang dilakukan sebelum pukul 12.00 WIB.",
    },
    {
      question: "Apakah CoffeeBean Co. menerima reservasi untuk acara khusus?",
      answer:
        "Ya, kami menerima reservasi untuk acara khusus seperti ulang tahun, gathering, atau meeting. Kami memiliki ruang private yang dapat menampung hingga 20 orang. Untuk reservasi, silakan hubungi kami minimal 3 hari sebelum acara.",
    },
    {
      question: "Apakah CoffeeBean Co. menyediakan workshop atau kelas kopi?",
      answer:
        "Ya, kami secara rutin mengadakan workshop dan kelas kopi untuk berbagai level, mulai dari pemula hingga barista profesional. Jadwal workshop dapat dilihat di halaman Events atau ikuti media sosial kami untuk informasi terbaru.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center bg-[#fef3d1] text-amber-800 px-4 py-2 rounded-full">
            <span className="font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang produk dan layanan
            kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`text-amber-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Masih punya pertanyaan lain?</p>
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Hubungi Tim Kami
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

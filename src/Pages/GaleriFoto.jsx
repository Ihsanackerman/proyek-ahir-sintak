import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function GaleriFoto() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedImages, setLikedImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareImageId, setShareImageId] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    // Load liked and saved images from localStorage if available
    const savedLikes = localStorage.getItem("likedImages");
    const savedCollection = localStorage.getItem("savedImages");

    if (savedLikes) setLikedImages(JSON.parse(savedLikes));
    if (savedCollection) setSavedImages(JSON.parse(savedCollection));
  }, []);

  const handleLikeImage = (imageId) => {
    const newLikedImages = likedImages.includes(imageId)
      ? likedImages.filter((id) => id !== imageId)
      : [...likedImages, imageId];

    setLikedImages(newLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(newLikedImages));
  };

  const handleSaveImage = (imageId) => {
    const newSavedImages = savedImages.includes(imageId)
      ? savedImages.filter((id) => id !== imageId)
      : [...savedImages, imageId];

    setSavedImages(newSavedImages);
    localStorage.setItem("savedImages", JSON.stringify(newSavedImages));
  };

  const handleShareImage = (imageId) => {
    setShareImageId(imageId);
    setShowShareModal(true);
  };

  return (
    <>
      <NavBar />
      <div className="pt-16">
        <GalleryHero />
        <GalleryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <GalleryGrid
          selectedCategory={selectedCategory}
          setSelectedImage={setSelectedImage}
          isLoading={isLoading}
          likedImages={likedImages}
          savedImages={savedImages}
          onLikeImage={handleLikeImage}
          onSaveImage={handleSaveImage}
          onShareImage={handleShareImage}
        />
        <InstagramSection />
        <Footer />
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          isLiked={likedImages.includes(selectedImage.id)}
          isSaved={savedImages.includes(selectedImage.id)}
          onLike={() => handleLikeImage(selectedImage.id)}
          onSave={() => handleSaveImage(selectedImage.id)}
          onShare={() => handleShareImage(selectedImage.id)}
        />
      )}

      {showShareModal && (
        <ShareModal
          imageId={shareImageId}
          onClose={() => setShowShareModal(false)}
          galleryItems={galleryItems}
        />
      )}
    </>
  );
}

export default GaleriFoto;

function GalleryHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern - Cream color with subtle texture */}
      <div className="absolute inset-0 bg-[#fdf8ed]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Coffee Cup Illustration - Left Side */}
      <div className="absolute left-10 top-1/4 opacity-20 w-32 h-32">
        <img
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop&q=80"
          alt="Coffee Cup"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      {/* Coffee Leaf Illustration - Right Side */}
      <div className="absolute right-10 bottom-1/4 opacity-20 w-32 h-32">
        <img
          src="https://images.unsplash.com/photo-1611174275735-af3bf5ffe49b?w=200&h=200&fit=crop&q=80"
          alt="Coffee Leaf"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      {/* Camera Illustration - Bottom Left */}
      <div className="absolute left-1/4 bottom-10 opacity-15 w-24 h-24">
        <img
          src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=200&h=200&fit=crop&q=80"
          alt="Camera"
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 inline-flex items-center bg-[#fef3d1] text-amber-800 px-6 py-3 rounded-full border border-amber-200">
          <span className="mr-2">📸</span>
          <span className="font-medium">Visual Journey</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="text-orange-600">Gallery</span>
          <br />
          <span className="text-gray-800">of Moments</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          Discover the artistry behind every cup, the warmth of our space, and
          the passion that drives
          <span className="font-medium text-amber-700">
            {" "}
            CoffeeBean Co.
          </span>{" "}
          through our curated collection of moments.
        </p>
      </div>
    </section>
  );
}

function GalleryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    {
      id: "all",
      name: "All Moments",
      icon: "🎨",
      description: "View our complete collection of coffee moments",
    },
    {
      id: "interior",
      name: "Our Space",
      icon: "🏠",
      description: "Explore the cozy corners of our coffee shop",
    },
    {
      id: "coffee",
      name: "Coffee Art",
      icon: "☕",
      description: "Discover the beauty in every cup we craft",
    },
    {
      id: "people",
      name: "Community",
      icon: "👥",
      description: "Meet the faces that make our coffee culture special",
    },
    {
      id: "process",
      name: "Behind Scenes",
      icon: "⚙️",
      description: "Witness our journey from bean to cup",
    },
    {
      id: "events",
      name: "Events",
      icon: "🎉",
      description: "Special moments from our coffee workshops and events",
    },
  ];

  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-amber-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveTooltip(category.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200 hover:border-amber-300"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>

              {/* Tooltip */}
              {activeTooltip === category.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-90">
                  {category.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Define gallery items at the module level so it can be accessed by multiple components
const galleryItems = [
  {
    id: 1,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=1200&fit=crop",
    title: "Warm Embrace",
    description:
      "Where every corner tells a story of comfort and craftsmanship",
    size: "large",
    likes: 234,
    comments: 18,
    location: "Main Café, Palembang",
    date: "March 2024",
  },
  {
    id: 2,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    title: "Morning Ritual",
    description: "The perfect pour, captured in golden hour light",
    size: "medium",
    likes: 189,
    comments: 12,
    location: "Brew Bar",
    date: "January 2024",
  },
  {
    id: 3,
    category: "people",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop",
    title: "Shared Moments",
    description: "Conversations that brew stronger than our coffee",
    size: "medium",
    likes: 156,
    comments: 24,
    location: "Community Table",
    date: "February 2024",
  },
  {
    id: 4,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=600&fit=crop",
    title: "Bean Selection",
    description: "Hand-picked perfection from Indonesian highlands",
    size: "small",
    likes: 98,
    comments: 8,
    location: "Roastery",
    date: "December 2023",
  },
  {
    id: 5,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=800&fit=crop",
    title: "Industrial Elegance",
    description: "Where modern meets tradition in perfect harmony",
    size: "medium",
    likes: 267,
    comments: 31,
    location: "Upstairs Lounge",
    date: "January 2024",
  },
  {
    id: 6,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    title: "Latte Art Mastery",
    description: "Every cup is a canvas, every pour is art",
    size: "large",
    likes: 342,
    comments: 45,
    location: "Espresso Bar",
    date: "March 2024",
  },
  {
    id: 7,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
    title: "Roasting Perfection",
    description: "The alchemy of transforming green beans into liquid gold",
    size: "small",
    likes: 123,
    comments: 15,
    location: "Roastery",
    date: "November 2023",
  },
  {
    id: 8,
    category: "people",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=800&fit=crop",
    title: "Barista's Focus",
    description: "Dedication in every movement, passion in every brew",
    size: "medium",
    likes: 198,
    comments: 22,
    location: "Brew Bar",
    date: "February 2024",
  },
  {
    id: 9,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop",
    title: "Cozy Corner",
    description: "Your perfect spot for inspiration and relaxation",
    size: "small",
    likes: 176,
    comments: 19,
    location: "Reading Nook",
    date: "December 2023",
  },
  {
    id: 10,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=800&fit=crop",
    title: "Ethiopian Origins",
    description: "Tracing the roots of coffee culture to its birthplace",
    size: "medium",
    likes: 145,
    comments: 11,
    location: "Tasting Room",
    date: "January 2024",
  },
  {
    id: 11,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
    title: "Grinding Excellence",
    description: "Precision in every grind, consistency in every cup",
    size: "large",
    likes: 289,
    comments: 33,
    location: "Brew Lab",
    date: "March 2024",
  },
  {
    id: 12,
    category: "people",
    image:
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&h=600&fit=crop",
    title: "Community Gathering",
    description: "Where strangers become friends over shared coffee love",
    size: "small",
    likes: 167,
    comments: 28,
    location: "Event Space",
    date: "February 2024",
  },
  {
    id: 13,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=800&fit=crop",
    title: "Rustic Charm",
    description: "Wooden textures that tell stories of craftsmanship",
    size: "medium",
    likes: 201,
    comments: 16,
    location: "Main Café",
    date: "January 2024",
  },
  {
    id: 14,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop",
    title: "Brewing Science",
    description: "Where precision meets passion in every extraction",
    size: "small",
    likes: 134,
    comments: 9,
    location: "Brew Lab",
    date: "December 2023",
  },
  {
    id: 15,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1504627298434-2119d6928e93?w=600&h=800&fit=crop",
    title: "Farm to Cup",
    description: "The journey from highland farms to your morning cup",
    size: "medium",
    likes: 178,
    comments: 21,
    location: "Sourcing Room",
    date: "February 2024",
  },
  // Additional aesthetic coffee shop images
  {
    id: 16,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&h=800&fit=crop",
    title: "Morning Light",
    description:
      "Sunbeams dancing through our windows, creating the perfect ambiance",
    size: "medium",
    likes: 223,
    comments: 17,
    location: "Window Seating",
    date: "March 2024",
  },
  {
    id: 17,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=600&fit=crop",
    title: "Perfect Crema",
    description: "The golden crown that adorns our signature espresso",
    size: "small",
    likes: 156,
    comments: 14,
    location: "Espresso Bar",
    date: "January 2024",
  },
  {
    id: 18,
    category: "people",
    image:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=600&h=800&fit=crop",
    title: "Creative Minds",
    description: "Where ideas flow as freely as our coffee",
    size: "medium",
    likes: 187,
    comments: 23,
    location: "Co-working Space",
    date: "February 2024",
  },
  {
    id: 19,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?w=800&h=600&fit=crop",
    title: "Latte Art Workshop",
    description: "Learning the delicate art of milk and espresso",
    size: "large",
    likes: 276,
    comments: 32,
    location: "Training Room",
    date: "March 2024",
  },
  {
    id: 20,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=800&fit=crop",
    title: "Minimalist Design",
    description: "Clean lines and warm tones create our signature aesthetic",
    size: "medium",
    likes: 198,
    comments: 19,
    location: "Main Café",
    date: "December 2023",
  },
  {
    id: 21,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1515283709260-ee29296f1534?w=600&h=600&fit=crop",
    title: "Bean Varieties",
    description: "A rainbow of flavors from around the coffee-growing world",
    size: "small",
    likes: 143,
    comments: 12,
    location: "Tasting Room",
    date: "January 2024",
  },
  {
    id: 22,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    title: "Cupping Session",
    description: "Discovering subtle notes and unique characteristics",
    size: "large",
    likes: 231,
    comments: 27,
    location: "Tasting Lab",
    date: "February 2024",
  },
  {
    id: 23,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=600&h=800&fit=crop",
    title: "Coffee Masterclass",
    description: "Expert knowledge shared with passionate enthusiasts",
    size: "medium",
    likes: 209,
    comments: 31,
    location: "Event Space",
    date: "March 2024",
  },
  {
    id: 24,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=600&fit=crop",
    title: "Quiet Moments",
    description: "Peaceful corners where time slows down",
    size: "small",
    likes: 167,
    comments: 14,
    location: "Reading Nook",
    date: "January 2024",
  },
  {
    id: 25,
    category: "people",
    image:
      "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&h=800&fit=crop",
    title: "Coffee Conversations",
    description: "Deep discussions fueled by exceptional brews",
    size: "medium",
    likes: 178,
    comments: 22,
    location: "Community Table",
    date: "February 2024",
  },
  {
    id: 26,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&h=600&fit=crop",
    title: "Brewing Competition",
    description:
      "Where passion meets precision in the pursuit of the perfect cup",
    size: "large",
    likes: 298,
    comments: 43,
    location: "Event Space",
    date: "March 2024",
  },
  {
    id: 27,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
    title: "Single Origin",
    description: "The pure expression of terroir in every sip",
    size: "small",
    likes: 145,
    comments: 13,
    location: "Brew Bar",
    date: "December 2023",
  },
  {
    id: 28,
    category: "process",
    image:
      "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=600&h=800&fit=crop",
    title: "Artisan Roasting",
    description: "Small batches, big flavors, endless dedication",
    size: "medium",
    likes: 187,
    comments: 19,
    location: "Roastery",
    date: "January 2024",
  },
  {
    id: 29,
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop",
    title: "Urban Oasis",
    description: "A sanctuary of calm in the heart of the city",
    size: "large",
    likes: 267,
    comments: 29,
    location: "Garden Terrace",
    date: "February 2024",
  },
  {
    id: 30,
    category: "events",
    image:
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600&h=800&fit=crop",
    title: "Coffee Tasting Night",
    description:
      "An evening journey through flavor profiles and brewing methods",
    size: "medium",
    likes: 213,
    comments: 26,
    location: "Event Space",
    date: "March 2024",
  },
];

function GalleryGrid({
  selectedCategory,
  setSelectedImage,
  isLoading,
  likedImages,
  savedImages,
  onLikeImage,
  onSaveImage,
  onShareImage,
}) {
  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  if (isLoading) {
    return <LoadingGrid />;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedImage(item)}
              isLiked={likedImages.includes(item.id)}
              isSaved={savedImages.includes(item.id)}
              onLike={() => onLikeImage(item.id)}
              onSave={() => onSaveImage(item.id)}
              onShare={() => onShareImage(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
  isLiked,
  isSaved,
  onLike,
  onSave,
  onShare,
}) {
  return (
    <div
      className="group cursor-pointer break-inside-avoid mb-6"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            onClick={onClick}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200 mb-3">{item.description}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <span className="mr-1">❤️</span>
                  {item.likes}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">💬</span>
                  {item.comments}
                </span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                View
              </span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium capitalize">
            {item.category}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike();
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLiked
                  ? "bg-red-500 text-white"
                  : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              {isLiked ? "❤️" : "🤍"}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSave();
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isSaved
                  ? "bg-amber-500 text-white"
                  : "bg-white/80 text-gray-700 hover:bg-amber-500 hover:text-white"
              }`}
            >
              {isSaved ? "📌" : "📍"}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onShare();
              }}
              className="w-8 h-8 bg-white/80 text-gray-700 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              📤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingGrid() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="animate-pulse break-inside-avoid mb-6">
              <div className="bg-gray-200 rounded-2xl h-64"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community on Instagram for daily doses of coffee
            inspiration, behind-the-scenes moments, and exclusive content.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center"
          >
            <span className="mr-3 text-2xl">📱</span>
            Follow @CoffeeBeanCo
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <div className="text-gray-400 text-lg">#CoffeeBeanMoments</div>
        </div>

        {/* Instagram Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
          ].map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                  📱
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageModal({
  image,
  onClose,
  isLiked,
  isSaved,
  onLike,
  onSave,
  onShare,
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <span className="text-3xl">✕</span>
        </button>

        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-2/3 relative">
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-64 md:h-[500px] object-cover"
              />

              {/* Image Navigation Overlay */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                <button className="bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  ←
                </button>
                <button className="bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  →
                </button>
              </div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{image.location}</h3>
                    <p className="text-sm text-gray-200">{image.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={onLike}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isLiked
                          ? "bg-red-500 text-white"
                          : "bg-white/20 text-white hover:bg-red-500"
                      }`}
                    >
                      {isLiked ? "❤️" : "🤍"}
                    </button>
                    <button
                      onClick={onSave}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSaved
                          ? "bg-amber-500 text-white"
                          : "bg-white/20 text-white hover:bg-amber-500"
                      }`}
                    >
                      {isSaved ? "📌" : "📍"}
                    </button>
                    <button
                      onClick={onShare}
                      className="w-10 h-10 bg-white/20 text-white hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      📤
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {image.category}
                </span>
                <div className="flex items-center space-x-3 text-gray-500">
                  <span className="flex items-center">
                    <span className="mr-1">❤️</span>
                    {image.likes}
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">💬</span>
                    {image.comments}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {image.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {image.description}
              </p>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "details"
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "comments"
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Comments
                </button>
                <button
                  onClick={() => setActiveTab("related")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "related"
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Related
                </button>
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === "details" && (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{image.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{image.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "comments" && (
                  <div className="space-y-3 max-h-32 overflow-y-auto">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium">
                            Coffee Lover {i + 1}
                          </p>
                          <p className="text-xs text-gray-500">
                            Beautiful shot! Love the atmosphere.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "related" && (
                  <div className="grid grid-cols-3 gap-2">
                    {galleryItems
                      .filter(
                        (item) =>
                          item.category === image.category &&
                          item.id !== image.id
                      )
                      .slice(0, 3)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="aspect-square rounded overflow-hidden"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  onClick={onShare}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Share This Moment
                </button>
                <button
                  onClick={onSave}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSaved
                      ? "bg-amber-100 text-amber-800 border border-amber-300"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {isSaved ? "Saved to Collection" : "Save to Collection"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareModal({ imageId, onClose, galleryItems }) {
  const image = galleryItems.find((item) => item.id === imageId);

  const [copied, setCopied] = useState(false);
  const shareUrl = `https://coffeebean.co.id/gallery/${imageId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialPlatforms = [
    { name: "Instagram", icon: "📱", color: "from-pink-500 to-purple-600" },
    { name: "Facebook", icon: "👍", color: "from-blue-500 to-blue-700" },
    { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
    { name: "WhatsApp", icon: "💬", color: "from-green-500 to-green-600" },
    { name: "Email", icon: "📧", color: "from-gray-600 to-gray-800" },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Share This Moment
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {image && (
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-5 gap-2">
                {socialPlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    className={`bg-gradient-to-r ${platform.color} text-white p-3 rounded-lg flex flex-col items-center justify-center transition-all hover:scale-105`}
                  >
                    <span className="text-xl mb-1">{platform.icon}</span>
                    <span className="text-xs">{platform.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button
                  onClick={handleCopyLink}
                  className={`px-4 py-2 ${
                    copied ? "bg-green-600" : "bg-amber-600 hover:bg-amber-700"
                  } text-white rounded-r-md transition-colors`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
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
              <p>Palembang, Indonesia</p>
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

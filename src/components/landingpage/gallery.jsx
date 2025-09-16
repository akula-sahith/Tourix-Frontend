import React, { useState, useEffect } from 'react';

const JharkhandGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Industry & Economy');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = [
    'Industry & Economy',
    'Government & Administration',
    'Education & Innovation',
    'Heritage & Culture',
    'Lifestyle & Tourism',
    'Cuisine & Handicrafts'
  ];

  const imageData = {
    'Industry & Economy': [
      { src: 'https://picsum.photos/1080/720?random=1', alt: 'Industry 1' },
      { src: 'https://picsum.photos/1080/720?random=2', alt: 'Industry 2' },
      { src: 'https://picsum.photos/1080/720?random=3', alt: 'Industry 3' },
      { src: 'https://picsum.photos/1080/720?random=4', alt: 'Industry 4' },
      { src: 'https://picsum.photos/1080/720?random=5', alt: 'Industry 5' },
      { src: 'https://picsum.photos/1080/720?random=6', alt: 'Industry 6' },
      { src: 'https://picsum.photos/1080/720?random=7', alt: 'Industry 7' },
      { src: 'https://picsum.photos/1080/720?random=8', alt: 'Industry 8' }
    ],
    'Government & Administration': [
      { src: 'https://picsum.photos/1080/720?random=11', alt: 'Government 1' },
      { src: 'https://picsum.photos/1080/720?random=12', alt: 'Government 2' },
      { src: 'https://picsum.photos/1080/720?random=13', alt: 'Government 3' },
      { src: 'https://picsum.photos/1080/720?random=14', alt: 'Government 4' },
      { src: 'https://picsum.photos/1080/720?random=15', alt: 'Government 5' },
      { src: 'https://picsum.photos/1080/720?random=16', alt: 'Government 6' },
      { src: 'https://picsum.photos/1080/720?random=17', alt: 'Government 7' },
      { src: 'https://picsum.photos/1080/720?random=18', alt: 'Government 8' }
    ],
    'Education & Innovation': [
      { src: 'https://picsum.photos/1080/720?random=21', alt: 'Education 1' },
      { src: 'https://picsum.photos/1080/720?random=22', alt: 'Education 2' },
      { src: 'https://picsum.photos/1080/720?random=23', alt: 'Education 3' },
      { src: 'https://picsum.photos/1080/720?random=24', alt: 'Education 4' },
      { src: 'https://picsum.photos/1080/720?random=25', alt: 'Education 5' },
      { src: 'https://picsum.photos/1080/720?random=26', alt: 'Education 6' },
      { src: 'https://picsum.photos/1080/720?random=27', alt: 'Education 7' },
      { src: 'https://picsum.photos/1080/720?random=28', alt: 'Education 8' }
    ],
    'Heritage & Culture': [
      { src: 'https://picsum.photos/1080/720?random=31', alt: 'Heritage 1' },
      { src: 'https://picsum.photos/1080/720?random=32', alt: 'Heritage 2' },
      { src: 'https://picsum.photos/1080/720?random=33', alt: 'Heritage 3' },
      { src: 'https://picsum.photos/1080/720?random=34', alt: 'Heritage 4' },
      { src: 'https://picsum.photos/1080/720?random=35', alt: 'Heritage 5' },
      { src: 'https://picsum.photos/1080/720?random=36', alt: 'Heritage 6' },
      { src: 'https://picsum.photos/1080/720?random=37', alt: 'Heritage 7' },
      { src: 'https://picsum.photos/1080/720?random=38', alt: 'Heritage 8' }
    ],
    'Lifestyle & Tourism': [
      { src: 'https://picsum.photos/1080/720?random=41', alt: 'Lifestyle 1' },
      { src: 'https://picsum.photos/1080/720?random=42', alt: 'Lifestyle 2' },
      { src: 'https://picsum.photos/1080/720?random=43', alt: 'Lifestyle 3' },
      { src: 'https://picsum.photos/1080/720?random=44', alt: 'Lifestyle 4' },
      { src: 'https://picsum.photos/1080/720?random=45', alt: 'Lifestyle 5' },
      { src: 'https://picsum.photos/1080/720?random=46', alt: 'Lifestyle 6' },
      { src: 'https://picsum.photos/1080/720?random=47', alt: 'Lifestyle 7' },
      { src: 'https://picsum.photos/1080/720?random=48', alt: 'Lifestyle 8' }
    ],
    'Cuisine & Handicrafts': [
      { src: 'src/assets/cusine1.webp', alt: 'Cuisine 1' },
      { src: 'src/assets/cusine2.webp', alt: 'Cuisine 2' },
      { src: 'src/assets/cusine3.webp', alt: 'Cuisine 3' },
      { src: 'src/assets/cusine4.webp', alt: 'Cuisine 4' },
      { src: 'src/assets/cusine5.jpg', alt: 'Cuisine 5' },
      { src: 'src/assets/cusine6.jpg', alt: 'Cuisine 6' },
      { src: 'src/assets/cusine7.webp', alt: 'Cuisine 7' },
      { src: 'src/assets/cusine8.JPG', alt: 'Cuisine 8' },
    ]
  };

  const currentImages = imageData[activeCategory];

  // Auto-looping logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === currentImages.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, currentImages.length]);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setCurrentImageIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  const getImageStyle = (index) => {
    const relativeIndex = index - currentImageIndex;
    const totalImages = currentImages.length;
    
    // Normalize index for continuous loop effect
    let normalizedIndex = relativeIndex;
    if (normalizedIndex > totalImages / 2) {
      normalizedIndex -= totalImages;
    } else if (normalizedIndex < -totalImages / 2) {
      normalizedIndex += totalImages;
    }
    
    // Position cards side by side
    const translateX = normalizedIndex * 250; // Use a fixed pixel value for consistent spacing
    const scale = 1 - Math.abs(normalizedIndex) * 0.1;
    const opacity = 1 - Math.abs(normalizedIndex) * 0.2;
    const zIndex = totalImages - Math.abs(normalizedIndex);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      filter: `brightness(${1 - Math.abs(normalizedIndex) * 0.1})`
    };
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rainbow Gradient Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse cursor-default">
            Explore Jharkhand
          </h2>
          <div className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Gallery */}
        <div 
          className={`relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          // Adding cursor-pointer here to indicate the carousel is interactive, e.g., for swiping
          // You might not need this if you don't implement click/drag to change images
          // But it's good practice for gallery components
          // If the image itself is clickable, you would apply it to the <img> tag or parent div.
          // Since the gallery is an auto-looping carousel, we'll keep it on the images.
        >
          {currentImages.map((image, index) => {
            const style = getImageStyle(index);

            return (
              <div
                key={index}
                className="absolute w-80 h-[28rem] md:w-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ease-in-out cursor-pointer"
                style={style}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-center">
                  <h3 className="font-bold text-lg">{image.alt}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JharkhandGallery;
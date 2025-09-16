import { useState, useEffect, useRef } from 'react';

// Import images directly from the assets folder with correct file extensions
import industrialImage from '../../assets/industry.jpg';
import governmentImage from '../../assets/government.jpg';
import educationImage from '../../assets/education.png';
import heritageImage from '../../assets/heritage.jpg';
import tourismImage from '../../assets/tourism.jpg';
import cuisineImage from '../../assets/cusine.webp'; // Corrected file name and extension

// Card data
const visitHighlights = [
  {
    title: 'Industrial & Economic Growth',
    text: 'A hub for steel, coal, and power industries with major cities like Jamshedpur and Bokaro.',
    image: industrialImage,
  },
  {
    title: 'Government & Administration',
    text: 'Explore the state capital, Ranchi, and its key government buildings and civic centers.',
    image: governmentImage,
  },
  {
    title: 'Education & Innovation',
    text: 'Home to premier institutions like IIT Dhanbad and XLRI, shaping the future of India.',
    image: educationImage,
  },
  {
    title: 'Heritage & Culture',
    text: 'Discover ancient temples like Rajrappa and vibrant tribal festivals like Sarhul and Karma.',
    image: heritageImage,
  },
  {
    title: 'Tourism & Lifestyle',
    text: 'Enjoy modern infrastructure, urban parks, and well-planned guided tours for a comfortable stay.',
    image: tourismImage,
  },
  {
    title: 'Cuisine',
    text: 'Taste unique local dishes like Thekua, Litti Chokha, and Rugra at traditional eateries.',
    image: cuisineImage,
  },
];

const AboutJharkhandSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    // Create an observer for each highlight card and the main sections
    [
      'aboutText',
      'aboutImage',
      'visitHeading',
      'visitCards',
      'dontMiss',
      'quote',
      'video'
    ].forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(prev => ({
              ...prev,
              [key]: entry.isIntersecting
            }));
          },
          { threshold: 0.3 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const setRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <div className="bg-white">
      {/* About Jharkhand Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content - Left Side */}
            <div 
              ref={setRef('aboutText')}
              className={`transform transition-all duration-1000 ${
                isVisible.aboutText ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic bg-gradient-to-r from-emerald-600 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-red-500 hover:via-yellow-500 hover:to-green-500 transition-all duration-500 cursor-default">
                About Jharkhand
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                Jharkhand, a land of majestic mountains, lush forests, and cascading waterfalls, offers an unparalleled opportunity to connect with unspoiled nature. Beyond its breathtaking scenery, Jharkhand is home to prominent museums, temples, and wildlife sanctuaries. Emerging from Bihar nearly two decades ago, the state has forged its own path, marked by a fascinating history, diverse culture, and the cherished simplicity of its tribal communities.
              </p>

              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>

            {/* Image Content - Right Side */}
            <div 
              ref={setRef('aboutImage')}
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.aboutImage ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="src/assets/aboutjharkhand.jpg"
                  alt="Jharkhand Nature"
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Jharkhand Section (New) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div 
            ref={setRef('visitHeading')}
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.visitHeading ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
              Why Visit Jharkhand?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A state of contrasts, where ancient traditions coexist with modern growth, offering a unique blend of heritage, industry, and nature.
            </p>
          </div>

          {/* Highlights Grid */}
          <div 
            ref={setRef('visitCards')}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300 ${
              isVisible.visitCards ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {visitHighlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <div className="h-48 w-full rounded-xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div 
            ref={setRef('dontMiss')}
            className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${
              isVisible.dontMiss ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
              Don't Miss Out on the Full Experience!
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              From the serene beauty of its waterfalls to its rich cultural tapestry and bustling modern cities, Jharkhand has something for every traveler.
            </p>
            <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>
      
      {/* Video Section with Quote */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Quote Side */}
            <div 
              ref={setRef('quote')}
              className={`lg:col-span-1 transform transition-all duration-1000 ${
                isVisible.quote ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 rounded-2xl shadow-2xl text-white">
                <div className="text-6xl font-serif text-emerald-300 mb-4">"</div>
                <blockquote className="text-xl font-light italic leading-relaxed mb-6">
                  Where ancient forests whisper tales of tribal heritage, and waterfalls dance with the rhythm of nature - Jharkhand is not just a destination, it's a journey to the soul of India.
                </blockquote>
                <footer className="text-emerald-200 font-medium">
                  - The Heart of Tribal India
                </footer>
              </div>
            </div>

            {/* Video Side */}
            <div 
              ref={setRef('video')}
              className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${
                isVisible.video ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <video
                  className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='videoGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23videoGrad)'/%3E%3Ccircle cx='600' cy='400' r='80' fill='white' opacity='0.9'/%3E%3Cpolygon points='570,360 570,440 640,400' fill='%23059669'/%3E%3Ctext x='600' y='500' text-anchor='middle' fill='white' font-size='32' font-weight='bold'%3ETour Jharkhand%3C/text%3E%3C/svg%3E"
                >
                  <source src="src\components\landingpage\tour.mp4" type="video/mp4" />
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-cyan-500 via-emerald-500 to-emerald-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-emerald-600 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-2xl font-bold">Tour Jharkhand</p>
                    </div>
                  </div>
                </video>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="bg-white h-16"></div>
    </div>
  );
};

export default AboutJharkhandSection;
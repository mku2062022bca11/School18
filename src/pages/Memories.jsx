import React, { useState } from 'react';
import { Camera, Calendar, Award, Users, ChevronLeft, ChevronRight, Trophy, Star, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Memories = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAlbum, setSelectedAlbum] = useState('recent');

  const carouselImages = [
    {
      image: "./Memories/MemoriesImg1.jpeg",
      title: "Annual Sports Day 2024",
      description: "Students showcase their athletic talents in various competitions",
      date: "March 2024"
    },
    {
      image: "./Memories/MemoriesImg2.jpeg",
      title: "Science Fair Excellence",
      description: "Young scientists present innovative projects and experiments",
      date: "February 2024"
    },
    {
      image: "./Memories/MemoriesImg3.jpeg",
      title: "Cultural Festival Celebration",
      description: "Students celebrate diversity through music, dance, and art",
      date: "January 2024"
    },
    {
      image: "./Memories/MemoriesImg4.jpeg",
      title: "Graduation Ceremony 2023",
      description: "Celebrating the achievements of our graduating class",
      date: "December 2023"
    }
  ];

  const albums = {
    recent: [
      {
        image: "./Memories/MemoriesImg5.jpeg",
        title: "Spring Sports Meet",
        count: "45 photos"
      },
      {
        image: "./Memories/MemoriesImg6.jpeg",
        title: "Art Exhibition",
        count: "32 photos"
      },
      {
        image: "./Memories/MemoriesImg7.jpeg",
        title: "Music Concert",
        count: "28 photos"
      },
      {
        image: "./Memories/MemoriesImg8.jpeg",
        title: "Library Week",
        count: "19 photos"
      }
    ],
    sports: [
      {
        image: "./Memories/MemoriesImg9.jpeg",
        title: "Basketball Championship",
        count: "67 photos"
      },
      {
        image: "./Memories/MemoriesImg10.jpeg",
        title: "Swimming Competition",
        count: "43 photos"
      },
      {
        image: "./Memories/MemoriesImg1.jpeg",
        title: "Track & Field Day",
        count: "52 photos"
      },
      {
        image: "./Memories/MemoriesImg11.jpeg",
        title: "Soccer Tournament",
        count: "38 photos"
      }
    ],
    annual: [
      {
        image: "./Memories/MemoriesImg12.jpeg",
        title: "Annual Day 2024",
        count: "89 photos"
      },
      {
        image: "./Memories/MemoriesImg13.jpeg",
        title: "Talent Show",
        count: "56 photos"
      },
      {
        image: "./Memories/MemoriesImg14.jpeg",
        title: "Awards Ceremony",
        count: "34 photos"
      },
      {
        image: "./Memories/MemoriesImg15.jpeg",
        title: "Cultural Evening",
        count: "72 photos"
      }
    ],
    trips: [
      {
        image: "./Memories/MemoriesImg16.jpeg",
        title: "Science Museum Visit",
        count: "41 photos"
      },
      {
        image: "./Memories/MemoriesImg17.jpeg",
        title: "Nature Camp",
        count: "63 photos"
      },
      {
        image: "./Memories/MemoriesImg18.jpeg",
        title: "Historical Site Tour",
        count: "29 photos"
      },
      {
        image: "./Memories/MemoriesImg19.jpeg",
        title: "Beach Excursion",
        count: "48 photos"
      }
    ],
    clubs: [
      {
        image: "./Memories/MemoriesImg20.jpeg",
        title: "Drama Club Performance",
        count: "36 photos"
      },
      {
        image: "./Memories/MemoriesImg21.jpeg",
        title: "Robotics Competition",
        count: "25 photos"
      },
      {
        image: "./Memories/MemoriesImg22.jpeg",
        title: "Debate Championship",
        count: "18 photos"
      },
      {
        image: "./Memories/MemoriesImg23.jpeg",
        title: "Art Club Exhibition",
        count: "44 photos"
      }
    ]
  };

  const proudMoments = [
    {
      title: "National Science Olympiad Winners",
      description: "Our Grade 10 students secured 1st place in the National Science Olympiad, competing against 500+ schools nationwide.",
      image: "./Memories/MemoriesImg24.jpeg",
      date: "March 2024",
      achievement: "Gold Medal"
    },
    {
      title: "International Mathematics Competition",
      description: "Three of our students represented the country in the International Mathematics Competition, bringing home silver and bronze medals.",
      image: "./Memories/MemoriesImg25.jpeg",
      date: "February 2024",
      achievement: "International Recognition"
    },
    {
      title: "Environmental Innovation Award",
      description: "Our school's sustainability project won the Regional Environmental Innovation Award for outstanding contribution to green initiatives.",
      image: "./Memories/MemoriesImg26.jpeg",
      date: "January 2024",
      achievement: "Regional Award"
    },
    {
      title: "State Basketball Champions",
      description: "Our varsity basketball team completed an undefeated season by winning the State Championship for the third consecutive year.",
      image: "./Memories/MemoriesImg27.jpeg",
      date: "December 2023",
      achievement: "State Champions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cherished Memories</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Capturing the joy, achievements, and special moments that make our school community extraordinary. Every picture tells a story of growth, friendship, and success.
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our most memorable moments through this curated collection of photographs from recent events and celebrations.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={carouselImages[currentSlide].image}
                alt={carouselImages[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{carouselImages[currentSlide].title}</h3>
                <p className="text-lg mb-2">{carouselImages[currentSlide].description}</p>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{carouselImages[currentSlide].date}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? themeColors.bg : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Albums */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Albums</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our organized collection of memories, sorted by events and activities throughout the academic year.
            </p>
          </div>

          {/* Album Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'recent', label: 'Recent Events', icon: <Calendar className="w-4 h-4" /> },
              { key: 'sports', label: 'Sports Day', icon: <Trophy className="w-4 h-4" /> },
              { key: 'annual', label: 'Annual Day', icon: <Star className="w-4 h-4" /> },
              { key: 'trips', label: 'Field Trips', icon: <Camera className="w-4 h-4" /> },
              { key: 'clubs', label: 'Club Activities', icon: <Users className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedAlbum(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedAlbum === tab.key
                    ? `${themeColors.bg} text-white`
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Album Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums[selectedAlbum].map((album, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative">
                  <img 
                    src={album.image}
                    alt={album.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{album.title}</h3>
                  <p className="text-gray-500">{album.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proud Moments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proudest Moments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating exceptional achievements, awards, and recognition that showcase the excellence of our students and school community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {proudMoments.map((moment, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${themeColors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {moment.achievement}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{moment.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{moment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                  
                  <div className="flex items-center mt-6">
                    <Award className={`w-5 h-5 ${themeColors.text} mr-2`} />
                    <span className={`${themeColors.text} font-semibold`}>Excellence Achievement</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Statistics */}
      <section className={`py-20 bg-gradient-to-r ${themeColors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Capturing Every Moment</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our dedication to preserving memories is reflected in the extensive documentation of student life and achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2,847</div>
              <div className="text-lg opacity-90">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">156</div>
              <div className="text-lg opacity-90">Events Documented</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">89</div>
              <div className="text-lg opacity-90">Awards & Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-lg opacity-90">Years of Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${themeColors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8`}>
            <Heart className="w-8 h-8 text-white" />
          </div>
          <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-8">
            "Memories are the treasures that we keep locked deep within the storehouse of our souls, to keep our hearts warm when we are lonely."
          </blockquote>
          <p className="text-xl text-gray-600">
            Every photograph in our gallery represents a moment of joy, achievement, and growth in the lives of our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Memories;
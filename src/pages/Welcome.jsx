import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  ChevronRight,
  Star,
  Calendar,
  Bell,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Welcome = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    years: 0,
    achievements: 0,
  });

  useEffect(() => {
    // Animated counter for statistics
    const animateCounter = (target, current, setter, key) => {
      if (current < target) {
        setTimeout(() => {
          setter((prev) => ({ ...prev, [key]: current + 1 }));
        }, 50);
      }
    };

    const targets = {
      students: 1247,
      teachers: 89,
      years: 25,
      achievements: 156,
    };

    Object.keys(targets).forEach((key) => {
      if (stats[key] < targets[key]) {
        animateCounter(targets[key], stats[key], setStats, key);
      }
    });
  }, [stats]);

  const announcements = [
    {
      date: "March 15, 2024",
      title: "Annual Science Fair Registration Open",
      description:
        "Students can now register for our annual science exhibition. Showcase your innovative projects and compete for exciting prizes.",
      priority: "high",
    },
    {
      date: "March 12, 2024",
      title: "Parent-Teacher Conference Schedule",
      description:
        "Individual meetings scheduled for March 20-22. Please check your student portal for specific time slots.",
      priority: "medium",
    },
    {
      date: "March 10, 2024",
      title: "New Library Resources Available",
      description:
        "Over 500 new digital books and research materials have been added to our online library collection.",
      priority: "low",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      relation: "Parent of Emily Johnson (Grade 8)",
      text: "OB365 School Academy has transformed my daughter's approach to learning. The personalized attention and innovative teaching methods have helped her discover her passion for science and mathematics.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      relation: "Parent of David Chen (Grade 11)",
      text: "The holistic development approach here is exceptional. My son has not only excelled academically but has also grown tremendously in leadership and social skills through various programs.",
      rating: 5,
    },
    {
      name: "Amanda Rodriguez",
      relation: "Parent of Sofia Rodriguez (Grade 6)",
      text: "What sets OB365 School apart is their genuine care for each student. The teachers know my daughter's strengths and challenges, and they've created a supportive environment for her to thrive.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "World-Class Curriculum",
      description:
        "Our internationally recognized programs prepare students for global success with cutting-edge teaching methodologies.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description:
        "Highly qualified educators with advanced degrees and years of experience in their respective fields.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Recognition",
      description:
        "Consistently ranked among the top schools nationally, with numerous awards for academic and extracurricular achievements.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Future-Ready Skills",
      description:
        "Focus on 21st-century skills including critical thinking, creativity, collaboration, and digital literacy.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`relative min-h-screen bg-gradient-to-br ${themeColors.gradient} text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Illuminating Minds,
              <br />
              <span className="text-yellow-300">Inspiring Futures</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
              Where educational excellence meets innovation. Join our community
              of learners, thinkers, and future leaders who are shaping
              tomorrow's world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">
                {stats.students}+
              </div>
              <div className="text-lg text-white/80">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">
                {stats.teachers}+
              </div>
              <div className="text-lg text-white/80">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">
                {stats.years}
              </div>
              <div className="text-lg text-white/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">
                {stats.achievements}+
              </div>
              <div className="text-lg text-white/80">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Announcements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, events, and important
              information from our school community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`h-2 ${
                    announcement.priority === "high"
                      ? "bg-red-500"
                      : announcement.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Bell className={`w-5 h-5 ${themeColors.text} mr-2`} />
                    <span className="text-sm text-gray-500">
                      {announcement.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {announcement.description}
                  </p>
                  <button
                    className={`${themeColors.text} font-semibold flex items-center hover:underline`}
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose OB365 School Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for families seeking
              exceptional education and holistic development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div
                  className={`${themeColors.bg} text-white p-4 rounded-2xl group-hover:scale-110 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our school community about their experiences and the
              transformative impact on their children's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.relation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our School
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more about our programs, facilities, and community
              through these quick links.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Admissions",
                desc: "Start your journey with us",
                icon: <Calendar className="w-8 h-8" />,
              },
              {
                title: "Academics",
                desc: "World-class curriculum",
                icon: <BookOpen className="w-8 h-8" />,
              },
              {
                title: "Student Life",
                desc: "Beyond the classroom",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Contact Us",
                desc: "Get in touch today",
                icon: <GraduationCap className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${themeColors.bg} text-white p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
                <ChevronRight className="w-5 h-5 mt-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

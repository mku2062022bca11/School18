import React from "react";
import {
  Calendar,
  Award,
  Users,
  Heart,
  BookOpen,
  Globe,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const OurJourney = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();

  const milestones = [
    {
      year: "1999",
      title: "Foundation Years",
      description:
        "OB365 School International Academy was founded with a vision to provide world-class education. Started with 45 students and 8 dedicated teachers in a modest building.",
      achievement: "First batch of 12 students graduated",
    },
    {
      year: "2003",
      title: "Growth & Recognition",
      description:
        "Expanded to include middle school programs. Introduced innovative teaching methodologies and received our first national education award.",
      achievement: "Winner of 'Innovative Teaching Methods Award'",
    },
    {
      year: "2007",
      title: "Technology Integration",
      description:
        "Became one of the first schools in the region to integrate smart classrooms and digital learning platforms across all grade levels.",
      achievement: "100% digital classroom implementation",
    },
    {
      year: "2012",
      title: "International Partnerships",
      description:
        "Established partnerships with schools in 8 countries, launching student exchange programs and international curriculum standards.",
      achievement: "International Schools Consortium membership",
    },
    {
      year: "2016",
      title: "Campus Expansion",
      description:
        "Opened our state-of-the-art campus with advanced science labs, sports facilities, and performing arts center to accommodate 1500+ students.",
      achievement: "Largest private school campus in the region",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Successfully transitioned to hybrid learning during the pandemic, setting new standards for online education delivery and student engagement.",
      achievement: "99.8% student retention during remote learning",
    },
    {
      year: "2024",
      title: "Future Leadership",
      description:
        "Launched our Advanced Leadership Program and opened the Innovation Hub, fostering entrepreneurship and 21st-century skills.",
      achievement: "Top 5 schools nationally for student outcomes",
    },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation",
      description:
        "We embrace creative thinking and cutting-edge approaches to education, constantly evolving our methods to prepare students for tomorrow's challenges.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Compassion",
      description:
        "We foster an environment of empathy, kindness, and understanding, teaching our students to care for themselves, others, and the world around them.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, encouraging our students to reach their full potential and achieve their dreams.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards, teaching our students to be honest, responsible, and trustworthy members of society.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Perspective",
      description:
        "We prepare our students to be global citizens, understanding diverse cultures and ready to contribute to an interconnected world.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Elizabeth Morrison",
      position: "Principal & Educational Director",
      image:
         "./OurJourney/OurjourneyImg1.jpeg",
      quote:
        "Education is not just about academic success; it's about nurturing confident, compassionate, and capable individuals who will lead positive change in the world.",
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Vice Principal - Academic Affairs",
      image:
        "./OurJourney/OurjourneyImg2.jpeg",
      quote:
        "Our commitment to innovative teaching methods ensures that every student discovers their unique talents and develops critical thinking skills for lifelong success.",
    },
    {
      name: "Ms. Sarah Chen",
      position: "Director of Student Development",
      image:
        "./OurJourney/OurjourneyImg3.jpeg",
      quote:
        "We believe in the holistic development of every child, supporting their emotional, social, and academic growth through personalized attention and care.",
    },
    {
      name: "Dr. James Williams",
      position: "Head of Innovation & Technology",
      image:
        "./OurJourney/OurjourneyImg4.jpeg",
      quote:
        "Technology is a powerful tool that, when thoughtfully integrated into education, can unlock unlimited possibilities for student learning and creativity.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Journey</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            From humble beginnings to educational excellence - discover the
            story of how OB365 School International Academy became a beacon of
            learning and innovation over the past 25 years.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Milestones in Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each year has been marked by growth, innovation, and unwavering
              commitment to educational excellence.
            </p>
          </div>

          <div className="relative">
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${themeColors.bg}`}
            ></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 ${themeColors.bg} rounded-full border-4 border-white shadow-lg`}
                ></div>

                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`inline-block ${themeColors.bg} text-white px-4 py-2 rounded-full text-lg font-bold mb-4`}
                    >
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                    <div
                      className={`${themeColors.text} font-semibold flex items-center`}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      {milestone.achievement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div
                className={`${themeColors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be a globally recognized institution that nurtures innovative
                thinkers, compassionate leaders, and responsible global citizens
                who positively impact society.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where every child has access to
                transformative education that unlocks their full potential and
                prepares them for a rapidly evolving future.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div
                className={`${themeColors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide an exceptional educational experience that combines
                academic rigor with character development, fostering critical
                thinking, creativity, and emotional intelligence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to creating an inclusive, supportive
                environment where every student is valued, challenged, and
                empowered to achieve excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Message from Our Principal
              </h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src="./OurJourney/OurjourneyImg5.jpeg"
                  alt="Dr. Elizabeth Morrison"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-6">
                    "Dear Parents and Students, at OB365 School International
                    Academy, we believe that education is not merely about
                    acquiring knowledge, but about developing the whole person.
                    Our journey over the past 25 years has been one of
                    continuous growth, innovation, and unwavering commitment to
                    excellence. We have witnessed thousands of students grow
                    from curious children into confident, capable young adults
                    ready to make their mark on the world. This transformation
                    is possible because we create an environment where learning
                    is joyful, challenging, and meaningful. As we look to the
                    future, we remain committed to our founding principles while
                    embracing new technologies and pedagogical approaches that
                    will prepare our students for challenges we cannot yet
                    imagine. Together, we will continue to illuminate minds and
                    inspire futures."
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Dr. Elizabeth Morrison
                    </div>
                    <div className={`${themeColors.text} text-sm`}>
                      Principal & Educational Director
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the
              character of our school community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${themeColors.bg} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {coreValues.slice(3).map((value, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${themeColors.bg} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced educators and administrators dedicated to fostering
              excellence and innovation in education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 bg-gray-50 rounded-2xl p-8"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <div className={`${themeColors.text} font-semibold mb-4`}>
                    {leader.position}
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed italic">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;

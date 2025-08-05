import React from 'react';
import { BookOpen, Users, Microscope, Palette, Trophy, Globe, Calculator, Music, Beaker, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Excellence = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();

  const teachingPhilosophy = [
    {
      title: "Student-Centered Learning",
      description: "Every lesson is designed around student needs, interests, and learning styles, ensuring maximum engagement and understanding."
    },
    {
      title: "Critical Thinking Development",
      description: "We encourage students to question, analyze, and evaluate information rather than simply memorize facts."
    },
    {
      title: "Collaborative Learning",
      description: "Students work together on projects and discussions, building communication skills and learning from peers."
    },
    {
      title: "Real-World Application",
      description: "Academic concepts are connected to real-world situations, making learning relevant and meaningful."
    }
  ];

  const subjects = {
    "Kindergarten - Grade 2": [
      "English Language Arts", "Mathematics Foundations", "Science Exploration", "Creative Arts", "Physical Education", "Social Studies Basics"
    ],
    "Grade 3 - Grade 5": [
      "Advanced English", "Mathematics", "General Science", "History & Geography", "Art & Music", "Computer Basics", "Physical Education"
    ],
    "Grade 6 - Grade 8": [
      "Literature & Writing", "Algebra & Geometry", "Biology & Chemistry", "World History", "Foreign Languages", "Technology Integration", "Health & Wellness"
    ],
    "Grade 9 - Grade 10": [
      "Advanced Literature", "Pre-Calculus", "Physics & Advanced Biology", "Modern History", "Second Language", "Computer Science", "Specialized Electives"
    ],
    "Grade 11 - Grade 12": [
      "AP Literature", "AP Calculus", "AP Sciences", "AP History", "Advanced Language Studies", "Programming & Engineering", "College Prep Courses"
    ]
  };

  const calendar = [
    { month: "August", events: ["New Academic Year Begins", "Orientation Week", "Club Registration"] },
    { month: "September", events: ["Parent-Teacher Meet", "Science Fair Preparation", "Sports Tryouts"] },
    { month: "October", events: ["Mid-term Examinations", "Halloween Celebration", "Career Guidance Week"] },
    { month: "November", events: ["Annual Day Preparations", "Inter-school Competitions", "Parent Workshops"] },
    { month: "December", events: ["Winter Break", "Holiday Celebrations", "Year-end Projects"] },
    { month: "January", events: ["New Semester Begins", "Republic Day Celebrations", "Science Exhibition"] },
    { month: "February", events: ["Annual Sports Day", "Arts & Culture Week", "Student Council Elections"] },
    { month: "March", events: ["Final Examinations", "Graduation Preparations", "Spring Concerts"] },
    { month: "April", events: ["Summer Break Begins", "Summer Camps", "International Exchange Programs"] }
  ];

  const programs = [
    {
      icon: <Beaker className="w-12 h-12" />,
      title: "STEM Excellence Program",
      description: "Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on laboratory work, robotics competitions, and research projects.",
      features: ["3D Printing Lab", "Robotics Team", "Science Olympiad", "Engineering Challenges"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Arts Academy",
      description: "Comprehensive arts education including visual arts, music, drama, and digital media production with professional-grade equipment and facilities.",
      features: ["Art Studios", "Music Production", "Theater Program", "Digital Arts"]
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Athletic Excellence",
      description: "Competitive sports programs with professional coaching, state-of-the-art facilities, and opportunities for regional and national competitions.",
      features: ["Swimming Pool", "Tennis Courts", "Athletic Track", "Team Sports"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Leadership",
      description: "International exchange programs, Model UN participation, and leadership development opportunities with global perspectives.",
      features: ["Student Exchange", "Model UN", "Leadership Camps", "Cultural Immersion"]
    }
  ];

  const faculty = [
    {
      name: "Dr. Maria Santos",
      subject: "Advanced Mathematics & AP Calculus",
      image: "./Excellence/ExcellenceImg1.jpeg",
      quote: "Mathematics is the language of the universe. I help students discover the beauty and logic in numbers.",
      qualifications: "Ph.D. Mathematics, Stanford University"
    },
    {
      name: "Prof. David Kim",
      subject: "Physics & Engineering",
      image: "./Excellence/ExcellenceImg2.jpeg",
      quote: "Physics explains how the world works. My goal is to make complex concepts accessible and exciting.",
      qualifications: "M.S. Physics, MIT"
    },
    {
      name: "Ms. Rachel Thompson",
      subject: "English Literature & Creative Writing",
      image: "./Excellence/ExcellenceImg3.jpeg",
      quote: "Literature opens minds and hearts. I guide students to find their own voice through the power of words.",
      qualifications: "M.A. English Literature, Oxford University"
    },
    {
      name: "Dr. Ahmed Hassan",
      subject: "Biology & Environmental Science",
      image: "./Excellence/ExcellenceImg4.jpeg",
      quote: "Understanding life sciences helps us protect our planet. I inspire students to become environmental stewards.",
      qualifications: "Ph.D. Biology, Harvard University"
    },
    {
      name: "Ms. Sophie Laurent",
      subject: "French & International Languages",
      image: "./Excellence/ExcellenceImg5.jpeg",
      quote: "Languages connect cultures and open doors to the world. I help students become global communicators.",
      qualifications: "M.A. Linguistics, Sorbonne University"
    },
    {
      name: "Prof. James Wilson",
      subject: "Computer Science & Robotics",
      image: "./Excellence/ExcellenceImg6.jpeg",
      quote: "Technology shapes our future. I prepare students to be creators, not just consumers of technology.",
      qualifications: "M.S. Computer Science, Carnegie Mellon"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Excellence in Education</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Where innovative teaching meets rigorous academics. Discover our comprehensive approach to nurturing young minds and preparing students for future success.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in nurturing the whole child through innovative, student-centered approaches that prepare learners for the challenges of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingPhilosophy.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className={`w-3 h-16 ${themeColors.bg} rounded-full mb-4`}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Matrix */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our grade-wise curriculum is designed to build strong foundations while advancing critical thinking and practical skills.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(subjects).map(([grade, subjectList], index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${themeColors.bg} text-white px-8 py-6`}>
                  <h3 className="text-2xl font-bold">{grade}</h3>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-4">
                    {subjectList.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <BookOpen className={`w-5 h-5 ${themeColors.text}`} />
                        <span className="text-gray-800 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A year filled with learning opportunities, celebrations, and memorable experiences for our students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {calendar.map((month, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className={`${themeColors.bg} text-white text-center py-3 rounded-lg mb-4`}>
                  <h3 className="text-xl font-bold">{month.month}</h3>
                </div>
                <ul className="space-y-2">
                  {month.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${themeColors.bg} rounded-full`}></div>
                      <span className="text-gray-700">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond traditional academics, we offer specialized programs that develop 21st-century skills and prepare students for future careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${themeColors.bg} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${themeColors.bg} rounded-full`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Distinguished Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our teachers are not just educators – they are mentors, innovators, and passionate advocates for student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                  <div className={`${themeColors.text} font-semibold mb-2`}>{teacher.subject}</div>
                  <div className="text-sm text-gray-500 mb-4">{teacher.qualifications}</div>
                  <blockquote className="text-gray-600 italic leading-relaxed">
                    "{teacher.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Stats */}
      <section className={`py-20 bg-gradient-to-r ${themeColors.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Academic Excellence in Numbers</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our outstanding academic achievements and student success rates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">College Acceptance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">156</div>
              <div className="text-lg opacity-90">AP Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">89</div>
              <div className="text-lg opacity-90">Expert Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;
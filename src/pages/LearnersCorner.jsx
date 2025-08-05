import React, { useState } from "react";
import {
  Clock,
  User,
  Lock,
  BookOpen,
  Award,
  Bell,
  Calendar,
  Download,
  ExternalLink,
  Users,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const LearnersCorner = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();
  const [selectedClass, setSelectedClass] = useState("Grade 8A");

  const timetable = {
    "Grade 8A": [
      {
        time: "8:00 - 8:45",
        monday: "Mathematics",
        tuesday: "English",
        wednesday: "Science",
        thursday: "History",
        friday: "Art",
      },
      {
        time: "8:45 - 9:30",
        monday: "English",
        tuesday: "Mathematics",
        wednesday: "French",
        thursday: "Science",
        friday: "Music",
      },
      {
        time: "9:30 - 10:15",
        monday: "Science",
        tuesday: "History",
        wednesday: "Mathematics",
        thursday: "English",
        friday: "PE",
      },
      {
        time: "10:15 - 10:30",
        monday: "Break",
        tuesday: "Break",
        wednesday: "Break",
        thursday: "Break",
        friday: "Break",
      },
      {
        time: "10:30 - 11:15",
        monday: "History",
        tuesday: "Science",
        wednesday: "English",
        thursday: "Mathematics",
        friday: "Geography",
      },
      {
        time: "11:15 - 12:00",
        monday: "French",
        tuesday: "Art",
        wednesday: "History",
        thursday: "French",
        friday: "Science",
      },
      {
        time: "12:00 - 1:00",
        monday: "Lunch",
        tuesday: "Lunch",
        wednesday: "Lunch",
        thursday: "Lunch",
        friday: "Lunch",
      },
      {
        time: "1:00 - 1:45",
        monday: "PE",
        tuesday: "Geography",
        wednesday: "Computer",
        thursday: "Art",
        friday: "Mathematics",
      },
      {
        time: "1:45 - 2:30",
        monday: "Computer",
        tuesday: "Music",
        wednesday: "PE",
        thursday: "Geography",
        friday: "English",
      },
    ],
  };

  const elearningResources = [
    {
      title: "Khan Academy Integration",
      description:
        "Access personalized learning dashboard with video lessons and practice exercises",
      link: "portal.OB365 School-academy.edu/khan",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "Digital Library",
      description:
        "Over 10,000 e-books, research papers, and multimedia resources",
      link: "library.OB365 School-academy.edu",
      icon: <ExternalLink className="w-8 h-8" />,
    },
    {
      title: "Virtual Labs",
      description:
        "Interactive science simulations and virtual laboratory experiments",
      link: "labs.OB365 School-academy.edu",
      icon: <ExternalLink className="w-8 h-8" />,
    },
    {
      title: "Language Learning Center",
      description:
        "Multilingual courses with native speaker conversations and assessments",
      link: "languages.OB365 School-academy.edu",
      icon: <ExternalLink className="w-8 h-8" />,
    },
  ];

  const homeworkCards = [
    {
      subject: "Mathematics",
      assignment: "Chapter 5: Linear Equations - Problems 1-20",
      dueDate: "March 18, 2024",
      status: "pending",
      difficulty: "medium",
    },
    {
      subject: "English Literature",
      assignment: "Essay: Character Analysis of Romeo & Juliet (500 words)",
      dueDate: "March 20, 2024",
      status: "in-progress",
      difficulty: "high",
    },
    {
      subject: "Science",
      assignment: "Lab Report: Chemical Reactions Experiment",
      dueDate: "March 19, 2024",
      status: "completed",
      difficulty: "medium",
    },
    {
      subject: "History",
      assignment: "Research Project: World War II Timeline",
      dueDate: "March 22, 2024",
      status: "pending",
      difficulty: "high",
    },
  ];

  const examResults = [
    {
      subject: "Mathematics",
      score: "94%",
      grade: "A",
      trend: "up",
      improvement: "+5%",
    },
    {
      subject: "English",
      score: "87%",
      grade: "B+",
      trend: "up",
      improvement: "+3%",
    },
    {
      subject: "Science",
      score: "91%",
      grade: "A-",
      trend: "stable",
      improvement: "0%",
    },
    {
      subject: "History",
      score: "89%",
      grade: "B+",
      trend: "up",
      improvement: "+7%",
    },
    {
      subject: "French",
      score: "85%",
      grade: "B",
      trend: "down",
      improvement: "-2%",
    },
    {
      subject: "Art",
      score: "96%",
      grade: "A",
      trend: "up",
      improvement: "+4%",
    },
  ];

  const notices = [
    {
      title: "Science Fair Registration Extended",
      date: "March 15, 2024",
      content:
        "Due to popular demand, we've extended the registration deadline for the Annual Science Fair to March 25th. Don't miss this opportunity to showcase your innovative projects!",
      priority: "high",
      category: "Academic",
    },
    {
      title: "Spring Break Holiday Schedule",
      date: "March 12, 2024",
      content:
        "School will be closed from March 28th to April 5th for Spring Break. Regular classes resume on April 8th. Have a wonderful break with your families!",
      priority: "medium",
      category: "Holiday",
    },
    {
      title: "New Library Books Available",
      date: "March 10, 2024",
      content:
        "We've added 200+ new titles to our library collection, including latest fiction, non-fiction, and reference materials. Visit the library to explore new reads!",
      priority: "low",
      category: "Library",
    },
    {
      title: "Parent-Teacher Conference Reminders",
      date: "March 8, 2024",
      content:
        "Individual parent-teacher conferences are scheduled for March 20-22. Please check your email for specific appointment times and classroom locations.",
      priority: "high",
      category: "Parent",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learners' Corner
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Your personalized learning hub - access schedules, resources,
            assignments, and track your academic progress all in one place.
          </p>
        </div>
      </section>

      {/* Daily Timetable */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Daily Class Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay organized with your weekly class timetable. Never miss a
              class with our comprehensive schedule system.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div
              className={`${themeColors.bg} text-white px-8 py-6 flex items-center justify-between`}
            >
              <h3 className="text-2xl font-bold">Weekly Timetable</h3>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-white/20 text-white rounded-lg px-4 py-2 border border-white/30"
              >
                <option value="Grade 8A">Grade 8A</option>
                <option value="Grade 8B">Grade 8B</option>
                <option value="Grade 9A">Grade 9A</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Time
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Monday
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Tuesday
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Wednesday
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Thursday
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Friday
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timetable[selectedClass].map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        row.monday === "Break" || row.monday === "Lunch"
                          ? "bg-gray-50"
                          : "hover:bg-gray-50"
                      } transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {row.time}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.monday}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.tuesday}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.wednesday}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.thursday}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.friday}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Student Portal Login */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Portal Access
            </h2>
            <p className="text-xl text-gray-600">
              Log in to access your personalized dashboard, grades, assignments,
              and school communications.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <div
              className={`${themeColors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <Lock className="w-8 h-8 text-white" />
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your student ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: themeColors.primary }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: themeColors.primary }}
                />
              </div>

              <button
                className={`w-full ${themeColors.bg} ${themeColors.bgHover} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
              >
                Login to Portal
              </button>
            </form>

            <div className="text-center mt-6">
              <a
                href="#"
                className={`${themeColors.text} text-sm hover:underline`}
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* E-Learning Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a comprehensive collection of online learning tools,
              digital libraries, and interactive educational platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {elearningResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${themeColors.bg} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <a
                  href={`https://${resource.link}`}
                  className={`${themeColors.text} font-semibold hover:underline flex items-center`}
                >
                  Access Resource <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homework Assignments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Assignments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay on top of your homework with organized assignment cards
              showing due dates, status, and difficulty levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {homeworkCards.map((homework, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {homework.subject}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      homework.status
                    )}`}
                  >
                    {homework.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {homework.assignment}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Due: {homework.dueDate}
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      homework.difficulty === "high"
                        ? "bg-red-100 text-red-800"
                        : homework.difficulty === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {homework.difficulty.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Exam Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your academic progress with detailed performance analytics
              and improvement suggestions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`${themeColors.bg} text-white px-8 py-6`}>
              <h3 className="text-2xl font-bold">
                Quarter 2 Examination Results
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
              {examResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-gray-900">
                      {result.subject}
                    </h4>
                    <span
                      className={`text-2xl font-bold ${
                        result.grade.startsWith("A")
                          ? "text-green-600"
                          : result.grade.startsWith("B")
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {result.grade}
                    </span>
                  </div>

                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {result.score}
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm ${
                        result.trend === "up"
                          ? "text-green-600"
                          : result.trend === "down"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {result.improvement}
                    </span>
                    <span className="text-xs text-gray-500">
                      vs last quarter
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Notices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Important Notices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest announcements, deadlines, and
              important information for students.
            </p>
          </div>

          <div className="space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-l-4 ${getPriorityColor(
                  notice.priority
                )} hover:shadow-xl transition-all duration-300`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {notice.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {notice.date}
                        </span>
                        <span
                          className={`px-2 py-1 rounded ${themeColors.bg} text-white`}
                        >
                          {notice.category}
                        </span>
                      </div>
                    </div>
                    <Bell
                      className={`w-6 h-6 ${
                        notice.priority === "high"
                          ? "text-red-500"
                          : notice.priority === "medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {notice.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnersCorner;

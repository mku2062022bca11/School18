import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { setTheme, getThemeColors } = useTheme();
  const themeColors = getThemeColors();

  const themeButtons = [
    {
      color: "blue",
      emoji: "🔵",
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
    },
    {
      color: "green",
      emoji: "🟢",
      bg: "bg-green-600",
      hover: "hover:bg-green-700",
    },
    {
      color: "purple",
      emoji: "🟣",
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700",
    },
    { color: "red", emoji: "🔴", bg: "bg-red-600", hover: "hover:bg-red-700" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg ${themeColors.bg} mr-3`}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">OB365 School</h3>
                <p className="text-sm text-gray-400">International Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Illuminating minds, inspiring futures. We are committed to
              providing world-class education that shapes tomorrow's leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/portal"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  123 Education Boulevard, Knowledge City, KC 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  info@OB365 School-academy.edu
                </p>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Mon-Fri: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Theme Selector */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Choose Theme</h4>
            <p className="text-gray-400 text-sm mb-4">
              Select your preferred color theme:
            </p>
            <div className="flex space-x-3">
              {themeButtons.map((theme) => (
                <button
                  key={theme.color}
                  onClick={() => setTheme(theme.color)}
                  className={`w-12 h-12 rounded-full ${theme.bg} ${theme.hover} transition-all duration-300 hover:scale-110 flex items-center justify-center text-xl shadow-lg hover:shadow-xl`}
                  title={`Switch to ${theme.color} theme`}
                >
                  {theme.emoji}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OB365 School International Academy. All
            rights reserved. | Designed with ❤️ for excellence in education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

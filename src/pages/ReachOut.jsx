import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ReachOut = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "School Address",
      details: [
        "123 Education Boulevard",
        "Knowledge City, KC 12345",
        "United States",
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +1 (555) 123-4567",
        "Admissions: +1 (555) 123-4568",
        "Emergency: +1 (555) 123-4569",
      ],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Addresses",
      details: [
        "info@OB365 School-academy.edu",
        "admissions@OB365 School-academy.edu",
        "principal@OB365 School-academy.edu",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const visitingHours = [
    {
      day: "Monday - Thursday",
      times: [
        "Morning Tours: 9:00 AM - 11:00 AM",
        "Afternoon Tours: 2:00 PM - 4:00 PM",
      ],
    },
    {
      day: "Friday",
      times: [
        "Morning Tours: 9:00 AM - 11:00 AM",
        "Evening Sessions: 6:00 PM - 7:30 PM",
      ],
    },
    {
      day: "Saturday",
      times: [
        "Family Tours: 10:00 AM - 12:00 PM",
        "Open House: 1:00 PM - 3:00 PM",
      ],
    },
  ];

  const socialLinks = [
    {
      platform: "WhatsApp",
      handle: "+1 (555) 123-CHAT",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      platform: "Instagram",
      handle: "@OB365 School_academy",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      platform: "Email Newsletter",
      handle: "Subscribe for Updates",
      icon: <Mail className="w-6 h-6" />,
      color: `${themeColors.bg} ${themeColors.bgHover}`,
    },
  ];

  const faqs = [
    {
      question: "What are your school timings?",
      answer:
        "School hours are from 8:00 AM to 3:30 PM, Monday through Friday. Extended care is available until 5:30 PM.",
    },
    {
      question: "How can I schedule a campus tour?",
      answer:
        "You can schedule a tour by calling our admissions office at +1 (555) 123-4568 or filling out the contact form above.",
    },
    {
      question: "What documents are needed for admission?",
      answer:
        "Required documents include birth certificate, previous school transcripts, immunization records, and completed application form.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We're here to answer your questions, provide information, and help
            you begin your journey with OB365 School International Academy.
            Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ focusRingColor: themeColors.primary }}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ focusRingColor: themeColors.primary }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ focusRingColor: themeColors.primary }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ focusRingColor: themeColors.primary }}
                    >
                      <option value="general">General Information</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="tours">Campus Tours</option>
                      <option value="support">Student Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: themeColors.primary }}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                    style={{ focusRingColor: themeColors.primary }}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full ${themeColors.bg} ${themeColors.bgHover} text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`${themeColors.bg} text-white p-4 rounded-2xl`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Knowledge City, our campus is easily
              accessible by public transportation and offers ample parking for
              visitors.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  className={`w-16 h-16 ${themeColors.text} mx-auto mb-4`}
                />
                <p className="text-gray-600 text-lg">Interactive School Map</p>
                <p className="text-gray-500">
                  123 Education Boulevard, Knowledge City
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5 min</div>
                  <div className="text-gray-600">from Highway 101</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-600">Parking Spaces</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-gray-600">Bus Routes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our vibrant learning environment firsthand. Schedule a
              personalized tour to see our facilities and meet our educators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visitingHours.map((schedule, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {schedule.day}
                </h3>
                <div className="space-y-3">
                  {schedule.times.map((time, timeIndex) => (
                    <div
                      key={timeIndex}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-2 h-2 ${themeColors.bg} rounded-full`}
                      ></div>
                      <span className="text-gray-600">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className={`${themeColors.bg} ${themeColors.bgHover} text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300`}
            >
              Schedule Your Visit
            </button>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow us on social media and subscribe to our newsletter for the
              latest updates, events, and news from our school community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300`}
                >
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {social.platform}
                </h3>
                <p className="text-gray-600">{social.handle}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600">
                Get weekly updates about school events, achievements, and
                important announcements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ focusRingColor: themeColors.primary }}
              />
              <button
                className={`${themeColors.bg} ${themeColors.bgHover} text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions. For more detailed information,
              please contact us directly.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <button
              className={`${themeColors.bg} ${themeColors.bgHover} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300`}
            >
              View All FAQs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachOut;

import React from "react";
import {
  Calendar,
  Users,
  FileText,
  DollarSign,
  CheckCircle,
  Clock,
  User,
  Phone,
  Mail,
  Download,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Admissions = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();

  const admissionSteps = [
    {
      step: 1,
      title: "Initial Inquiry",
      description:
        "Submit online inquiry form or contact our admissions office to express interest and receive information packet.",
      timeline: "Anytime",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "School Tour & Information Session",
      description:
        "Schedule a personalized campus tour and attend an information session to learn about our programs and facilities.",
      timeline: "2-3 weeks",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Application Submission",
      description:
        "Complete and submit the online application form along with required documents including transcripts and recommendations.",
      timeline: "Application deadlines vary",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 4,
      title: "Assessment & Interview",
      description:
        "Students participate in age-appropriate assessments and interviews to evaluate academic readiness and fit.",
      timeline: "1-2 weeks after application",
      icon: <User className="w-8 h-8" />,
    },
    {
      step: 5,
      title: "Admission Decision",
      description:
        "Receive admission decision via email and postal mail. Accepted students receive enrollment packet.",
      timeline: "2-3 weeks after assessment",
      icon: <Mail className="w-8 h-8" />,
    },
    {
      step: 6,
      title: "Enrollment Confirmation",
      description:
        "Submit enrollment deposit and complete registration forms to secure your child's place in our school.",
      timeline: "Within 2 weeks of acceptance",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const eligibilityChart = [
    {
      grade: "Kindergarten",
      age: "5 years by Sept 1st",
      requirements: "Toilet trained, basic social skills",
      capacity: "24 students",
    },
    {
      grade: "Grade 1",
      age: "6 years by Sept 1st",
      requirements: "Kindergarten completion or equivalent",
      capacity: "24 students",
    },
    {
      grade: "Grade 2-5",
      age: "Age appropriate",
      requirements: "Previous grade completion, transcripts",
      capacity: "26 students/grade",
    },
    {
      grade: "Grade 6-8",
      age: "Age appropriate",
      requirements: "Transcripts, teacher recommendations",
      capacity: "28 students/grade",
    },
    {
      grade: "Grade 9-10",
      age: "Age appropriate",
      requirements: "High school transcripts, entrance exam",
      capacity: "30 students/grade",
    },
    {
      grade: "Grade 11-12",
      age: "Age appropriate",
      requirements: "Strong academic record, AP readiness",
      capacity: "32 students/grade",
    },
  ];

  const feeStructure = [
    {
      category: "Tuition (Annual)",
      kindergarten: "$18,500",
      elementary: "$21,200",
      middle: "$24,800",
      high: "$28,500",
    },
    {
      category: "Registration Fee",
      kindergarten: "$750",
      elementary: "$750",
      middle: "$850",
      high: "$950",
    },
    {
      category: "Technology Fee",
      kindergarten: "$400",
      elementary: "$500",
      middle: "$650",
      high: "$800",
    },
    {
      category: "Activity Fee",
      kindergarten: "$300",
      elementary: "$400",
      middle: "$550",
      high: "$650",
    },
    {
      category: "Lunch Program (Optional)",
      kindergarten: "$2,400",
      elementary: "$2,400",
      middle: "$2,600",
      high: "$2,800",
    },
    {
      category: "Transportation (Optional)",
      kindergarten: "$1,800",
      elementary: "$1,800",
      middle: "$1,900",
      high: "$2,000",
    },
  ];

  const parentTestimonials = [
    {
      name: "Jennifer Martinez",
      child: "Emma Martinez - Grade 7",
      text: "The admissions process was seamless and welcoming. From our first campus tour to Emma's first day, the staff made us feel like part of the OB365 School family. Emma has thrived academically and socially beyond our expectations.",
      joinYear: "2023",
    },
    {
      name: "Robert Thompson",
      child: "Alex Thompson - Grade 10",
      text: "Choosing OB365 School for Alex was the best decision we made. The personalized attention during admissions showed us how much they care about each student. Alex's confidence and academic performance have soared since joining.",
      joinYear: "2022",
    },
    {
      name: "Priya Patel",
      child: "Arjun Patel - Grade 4",
      text: "As new parents to the school system, we were nervous about the admissions process. The team at OB365 School made everything clear and comfortable. Arjun loves going to school every day, which says everything about the environment they've created.",
      joinYear: "2024",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Community
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Begin your child's journey to excellence. Discover how to become
            part of the OB365 School International Academy family.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            Start Application Process
          </button>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission Process Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined admission process is designed to be thorough yet
              welcoming, ensuring the best fit for your child and our school
              community.
            </p>
          </div>

          <div className="relative">
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${themeColors.bg}`}
            ></div>

            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 ${themeColors.bg} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white`}
                >
                  {step.icon}
                </div>

                <div
                  className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-8 h-8 ${themeColors.bg} text-white rounded-full flex items-center justify-center text-sm font-bold mr-3`}
                      >
                        {step.step}
                      </div>
                      <div
                        className={`${themeColors.text} text-sm font-semibold`}
                      >
                        {step.timeline}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Chart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Age & Eligibility Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Review our grade-wise admission requirements to determine the best
              entry point for your child.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`${themeColors.bg} text-white px-8 py-6`}>
              <h3 className="text-2xl font-bold">
                Admission Requirements by Grade
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Grade Level
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Age Requirement
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Academic Requirements
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Class Capacity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {eligibilityChart.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {row.grade}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.age}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {row.requirements}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {row.capacity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Download */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Download Application Forms
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get started with your application by downloading our comprehensive
            forms and information packets.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <Download
                className={`w-12 h-12 ${themeColors.text} mx-auto mb-4`}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Application Form
              </h3>
              <p className="text-gray-600 mb-4">
                Complete admission application with all required fields
              </p>
              <button
                className={`${themeColors.bg} ${themeColors.bgHover} text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all`}
              >
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <FileText
                className={`w-12 h-12 ${themeColors.text} mx-auto mb-4`}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Information Packet
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed school information and admission guidelines
              </p>
              <button
                className={`${themeColors.bg} ${themeColors.bgHover} text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all`}
              >
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <DollarSign
                className={`w-12 h-12 ${themeColors.text} mx-auto mb-4`}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fee Structure
              </h3>
              <p className="text-gray-600 mb-4">
                Complete breakdown of tuition and additional fees
              </p>
              <button
                className={`${themeColors.bg} ${themeColors.bgHover} text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all`}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tuition & Fee Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all grade levels. Financial aid and
              payment plans are available for qualified families.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`${themeColors.bg} text-white px-8 py-6`}>
              <h3 className="text-2xl font-bold">
                Annual Fee Structure (2024-2025)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Category
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Kindergarten
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Elementary (1-5)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Middle (6-8)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      High (9-12)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeStructure.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.kindergarten}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.elementary}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.middle}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.high}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-6 bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Note:</strong> Financial aid is available for qualified
                families. Payment plans can be arranged to spread costs over 10
                months.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sibling Discount:</strong> 10% discount on tuition for
                second child, 15% for third child and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              New Family Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from parents who recently joined our school community about
              their admission experience and their child's progress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`${themeColors.bg} text-white text-center py-2 rounded-lg mb-6`}
                >
                  <div className="text-sm font-semibold">
                    Joined in {testimonial.joinYear}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.child}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-20 bg-gradient-to-r ${themeColors.gradient} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Take the first step towards your child's bright future. Schedule a
            personal tour and discover what makes OB365 School International
            Academy special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

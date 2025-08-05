import React, { useState } from "react";
import {
  Mail,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Clock,
  Users,
  FileText,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const AskUs = () => {
  const { getThemeColors } = useTheme();
  const themeColors = getThemeColors();
  const [openAccordion, setOpenAccordion] = useState(0);

  const faqCategories = [
    {
      title: "Academic Policies",
      icon: <BookOpen className="w-6 h-6" />,
      faqs: [
        {
          question: "What is your examination policy and grading system?",
          answer:
            "We follow a comprehensive assessment system with continuous evaluation. Our grading system includes: A+ (95-100%), A (90-94%), A- (85-89%), B+ (80-84%), B (75-79%), B- (70-74%), C+ (65-69%), C (60-64%), and D (50-59%). Students are assessed through regular quizzes, projects, mid-term exams, and final examinations. We also provide detailed progress reports every quarter to keep parents informed about their child's academic development.",
        },
        {
          question: "How do you handle late assignment submissions?",
          answer:
            "Late assignments are accepted with a penalty system. Assignments submitted within 24 hours of the deadline receive a 10% deduction. Those submitted within 48 hours receive a 20% deduction. After 48 hours, assignments may not be accepted unless there are documented extenuating circumstances such as illness or family emergency. We encourage students to communicate with teachers in advance if they anticipate difficulties meeting deadlines.",
        },
      ],
    },
    {
      title: "School Timing & Schedule",
      icon: <Clock className="w-6 h-6" />,
      faqs: [
        {
          question: "What are the school timings for different grade levels?",
          answer:
            "Our school operates on the following schedule: Kindergarten to Grade 2: 8:30 AM - 2:30 PM, Grades 3-5: 8:00 AM - 3:00 PM, Grades 6-8: 8:00 AM - 3:30 PM, and Grades 9-12: 8:00 AM - 3:45 PM. We also offer before-school care starting at 7:00 AM and after-school programs until 5:30 PM for working parents. All students must be picked up by 6:00 PM unless enrolled in specific evening activities.",
        },
        {
          question: "What happens if my child arrives late to school?",
          answer:
            "Students arriving after 8:15 AM must report to the main office to receive a late pass. Frequent tardiness (more than 3 times per month) will result in a parent conference. Chronic lateness may affect academic performance and participation in extracurricular activities. We understand that emergencies occur, but we encourage families to establish morning routines that ensure punctual arrival.",
        },
      ],
    },
    {
      title: "Dress Code & Uniforms",
      icon: <Users className="w-6 h-6" />,
      faqs: [
        {
          question: "What is the school dress code and uniform policy?",
          answer:
            "Students in Grades K-8 are required to wear school uniforms: navy blue or khaki pants/skirts, white or light blue collared shirts, and black or brown shoes. High school students (Grades 9-12) follow a dress code allowing casual but appropriate attire - no shorts above mid-thigh, no tank tops, no clothing with inappropriate messages. All students must wear closed-toe shoes for safety. Uniform exceptions are made for special events and designated 'dress-down' days.",
        },
        {
          question:
            "Are there any special uniform requirements for PE classes?",
          answer:
            "Yes, all students must wear the official PE uniform during physical education classes: gray shorts or sweatpants with the school logo, white or gray t-shirt with school logo, and athletic shoes with non-marking soles. Students may change in designated locker rooms before and after PE class. PE uniforms can be purchased through our school store or approved vendors.",
        },
      ],
    },
    {
      title: "Student ID & Access Cards",
      icon: <CreditCard className="w-6 h-6" />,
      faqs: [
        {
          question:
            "How do students obtain their school ID cards and what are they used for?",
          answer:
            "All students receive their ID cards during orientation week or within the first week of enrollment. ID cards are used for library access, cafeteria purchases, building entry, and identification during field trips. Students must carry their ID cards at all times during school hours. Lost or damaged cards can be replaced at the main office for a $10 fee. Digital copies are also available through our student portal app.",
        },
        {
          question: "What should I do if my child loses their ID card?",
          answer:
            "Report lost ID cards immediately to the main office to prevent misuse. A temporary card will be issued the same day, and a permanent replacement will be ready within 24-48 hours. The replacement fee is $10, which can be paid online through the parent portal or in person. For security reasons, lost cards are immediately deactivated in our system.",
        },
      ],
    },
    {
      title: "Online Access & Technology",
      icon: <FileText className="w-6 h-6" />,
      faqs: [
        {
          question:
            "How do students and parents access online learning platforms and grades?",
          answer:
            "Students and parents receive login credentials for our integrated learning management system during enrollment. The portal provides access to grades, assignments, announcements, and digital resources. Students can access Khan Academy, digital library resources, and virtual labs. Parents can monitor progress, communicate with teachers, and receive real-time notifications. Technical support is available Monday-Friday from 8:00 AM to 4:00 PM.",
        },
        {
          question:
            "What technology devices are required or provided by the school?",
          answer:
            "Grades K-5: School provides tablets for classroom use. Grades 6-8: Students may bring personal devices or use school-provided laptops. Grades 9-12: Students are expected to have a personal laptop or tablet meeting minimum specifications (available on our website). The school provides high-speed WiFi, charging stations, and technical support. Financial assistance is available for families who need help acquiring devices.",
        },
      ],
    },
    {
      title: "Leave & Absence Policies",
      icon: <HelpCircle className="w-6 h-6" />,
      faqs: [
        {
          question:
            "What is the procedure for requesting leave or reporting absences?",
          answer:
            "All absences must be reported by 9:00 AM on the day of absence through our parent portal, phone call, or email. Planned absences (vacations, appointments) should be requested at least 48 hours in advance. Students with excused absences have the right to make up missed work. Unexcused absences exceeding 10% of school days may result in academic penalties. Medical absences require a doctor's note for periods longer than 3 consecutive days.",
        },
        {
          question:
            "How many sick days are allowed before requiring medical documentation?",
          answer:
            "Students may take up to 3 consecutive sick days without medical documentation. Beyond 3 days, a doctor's note is required for the absence to be considered excused. For students with chronic health conditions, we work with families to develop individualized attendance plans. We also accept documentation from licensed healthcare providers including doctors, nurse practitioners, and mental health professionals.",
        },
      ],
    },
    {
      title: "Lunch & Nutrition",
      icon: <Users className="w-6 h-6" />,
      faqs: [
        {
          question:
            "What lunch options are available and how does the meal program work?",
          answer:
            "We offer a comprehensive lunch program with hot meals, salad bar, and grab-and-go options. Monthly menus are published online with nutritional information and allergen alerts. Students can purchase meals using their ID cards, which parents can fund online. We accommodate dietary restrictions and allergies with advance notice. Free and reduced-price meals are available for qualifying families. Students may also bring lunch from home.",
        },
        {
          question:
            "How do you handle food allergies and dietary restrictions?",
          answer:
            "Food allergies are taken very seriously. Parents must complete detailed allergy forms during enrollment, and we maintain updated records with photos. Our kitchen staff is trained in allergen management, and we provide separate preparation areas for allergen-free meals. Students with severe allergies may have individual action plans involving teachers, nurses, and administrators. We also maintain nut-free zones and can accommodate vegetarian, vegan, halal, and kosher dietary needs.",
        },
      ],
    },
    {
      title: "Pickup & Transportation",
      icon: <Clock className="w-6 h-6" />,
      faqs: [
        {
          question: "What are the pickup and drop-off procedures and timing?",
          answer:
            "Morning drop-off begins at 7:30 AM with supervision available. Cars should use the designated drop-off lane and remain in vehicles. Afternoon pickup follows a structured system: Grades K-2 at 2:30 PM, Grades 3-5 at 3:00 PM, and Grades 6-12 at 3:30-3:45 PM. Parents must display the provided pickup placard. Changes to pickup arrangements must be communicated in writing by 2:00 PM. Late pickup (after 4:00 PM) incurs a $1 per minute fee.",
        },
        {
          question: "What transportation options are available for students?",
          answer:
            "We offer bus transportation covering major residential areas within a 15-mile radius. Bus routes and schedules are published annually and updated as needed. Students must follow bus safety rules and assigned seating. Transportation fees are $500 per semester or $900 annually. We also accommodate carpools and have designated areas for rideshare services. Field trip transportation is provided separately and included in trip fees.",
        },
      ],
    },
    {
      title: "Birthday & Celebration Policies",
      icon: <Users className="w-6 h-6" />,
      faqs: [
        {
          question:
            "What is the policy for birthday celebrations and bringing treats to school?",
          answer:
            "Birthday celebrations are welcome with advance notice to teachers. Treats must be store-bought with ingredient labels due to allergy concerns - homemade items are not permitted. Celebrations should be simple and inclusive, typically lasting 15-20 minutes. Party invitations may only be distributed at school if the entire class is invited. We maintain a class birthday calendar and can suggest allergen-free treat options. Non-food celebrations like books donations or special activities are encouraged.",
        },
        {
          question:
            "Can we bring outside decorations or party favors for classroom celebrations?",
          answer:
            "Simple decorations are allowed with teacher approval, but they must be easy to set up and remove. Balloons are not permitted due to latex allergy concerns and environmental policies. Party favors should be small, safe, and equitable for all students. Teachers may suggest alternatives that align with curriculum themes. All celebration materials must be removed by the end of the school day, and cleaning up is the responsibility of the organizing parent.",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${themeColors.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about school policies, procedures,
            and daily operations. We're here to help make your school experience
            smooth and informed.
          </p>
        </div>
      </section>

      {/* FAQ Categories Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse by category to find specific information about our school
              policies and procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {faqCategories.slice(0, 6).map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`${themeColors.bg} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {category.faqs.length} questions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Q&A
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive answers to help you understand our school policies
              and procedures.
            </p>
          </div>

          <div className="space-y-4">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div
                  className={`${themeColors.bg} text-white p-6 rounded-t-2xl ${
                    categoryIndex === 0 ? "rounded-t-2xl" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* FAQ Items */}
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Unique index for each FAQ
                  const isOpen = openAccordion === globalIndex;

                  return (
                    <div key={faqIndex} className="bg-white border-x border-b">
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUp
                            className={`w-6 h-6 ${themeColors.text} flex-shrink-0`}
                          />
                        ) : (
                          <ChevronDown
                            className={`w-6 h-6 ${themeColors.text} flex-shrink-0`}
                          />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Last item bottom border radius */}
                {categoryIndex === faqCategories.length - 1 && (
                  <div className="bg-white rounded-b-2xl h-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`${themeColors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8`}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            If you couldn't find the answer you were looking for, don't hesitate
            to reach out to us directly. Our team is always ready to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <Phone className={`w-8 h-8 ${themeColors.text} mx-auto mb-4`} />
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Mail className={`w-8 h-8 ${themeColors.text} mx-auto mb-4`} />
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@OB365 School-academy.edu</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Clock className={`w-8 h-8 ${themeColors.text} mx-auto mb-4`} />
              <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8:00 AM - 4:00 PM</p>
            </div>
          </div>

          <button
            className={`${themeColors.bg} ${themeColors.bgHover} text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300`}
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Policy Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Policy Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download comprehensive policy documents for detailed information
              about school operations and procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Student Handbook", pages: "45 pages", type: "PDF" },
              { title: "Parent Guide", pages: "32 pages", type: "PDF" },
              { title: "Academic Policies", pages: "28 pages", type: "PDF" },
              { title: "Safety Procedures", pages: "18 pages", type: "PDF" },
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <FileText
                  className={`w-12 h-12 ${themeColors.text} mx-auto mb-4`}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {doc.pages} • {doc.type}
                </p>
                <button
                  className={`${themeColors.bg} ${themeColors.bgHover} text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskUs;

import { Shield, AlertTriangle, Lock, Eye, CheckCircle, PlayCircle, Clock, Users, Menu, X } from "lucide-react";
import { useState } from "react";

export default function TrainingPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trainingModules = [
    {
      id: 1,
      title: "Phishing Detection Mastery",
      description:
        "Learn to identify and avoid phishing attacks through real-world examples",
      duration: "45 min",
      difficulty: "Beginner",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      lessons: [
        "Recognizing suspicious emails",
        "URL analysis techniques",
        "Social engineering tactics",
        "Reporting phishing attempts",
      ],
    },
    {
      id: 2,
      title: "Password Security & Authentication",
      description:
        "Master strong password creation and multi-factor authentication",
      duration: "30 min",
      difficulty: "Beginner",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      lessons: [
        "Creating strong passwords",
        "Password manager usage",
        "Two-factor authentication",
        "Biometric security",
      ],
    },
    {
      id: 3,
      title: "Safe Browsing Practices",
      description:
        "Navigate the web securely and protect your digital footprint",
      duration: "35 min",
      difficulty: "Intermediate",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      lessons: [
        "Secure website identification",
        "Privacy settings optimization",
        "Cookie management",
        "VPN usage guidelines",
      ],
    },
    {
      id: 4,
      title: "Social Engineering Defense",
      description:
        "Protect yourself from manipulation and psychological attacks",
      duration: "50 min",
      difficulty: "Advanced",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      lessons: [
        "Psychological manipulation tactics",
        "Phone scam prevention",
        "Pretexting awareness",
        "Building security mindset",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">मिठायादर्पण</h1>
              <span className="text-lg text-gray-600 hidden sm:block">Mithayadarpan</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Home
              </a>
              <a href="/training" className="text-orange-600 font-semibold">
                Training
              </a>
              <a
                href="/wisdom"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Wisdom
              </a>
              <a
                href="/community"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Community
              </a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-orange-200 py-4">
              <nav className="flex flex-col space-y-3">
                <a 
                  href="/" 
                  className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/training" 
                  className="text-orange-600 font-semibold px-4 py-2 rounded-lg bg-orange-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Training
                </a>
                <a 
                  href="/wisdom" 
                  className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wisdom
                </a>
                <a 
                  href="/community" 
                  className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cyber Defense Training
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Build practical skills to protect yourself and others from cyber
            threats
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm">
            <div className="bg-white px-3 sm:px-4 py-2 rounded-full border border-gray-200">
              <span className="text-gray-600">Interactive Simulations</span>
            </div>
            <div className="bg-white px-3 sm:px-4 py-2 rounded-full border border-gray-200">
              <span className="text-gray-600">Real-world Scenarios</span>
            </div>
            <div className="bg-white px-3 sm:px-4 py-2 rounded-full border border-gray-200">
              <span className="text-gray-600">Progress Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {trainingModules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedModule(module)}
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {module.icon}
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500 flex items-center justify-end">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {module.difficulty}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{module.description}</p>
                  <div className="space-y-2 mb-6">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/training/module/${module.id}`;
                    }}
                    className={`w-full bg-gradient-to-r ${module.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center`}
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Module
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Try Our Phishing Simulator
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Test your skills with our interactive phishing detection tool
          </p>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 sm:p-12">
            <div className="max-w-md mx-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Interactive Simulator
              </h4>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Practice identifying phishing emails in a safe environment with
                instant feedback
              </p>
              <button
                onClick={() => (window.location.href = "/training/simulator")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all w-full sm:w-auto"
              >
                Launch Simulator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Track Your Progress
          </h3>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Monitor your learning journey and earn certificates
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-100 text-sm sm:text-base">Modules Completed</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">12</div>
              <div className="text-blue-100 text-sm sm:text-base">Certificates Earned</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-blue-100 text-sm sm:text-base">Average Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">
                  Mithayadarpan
                </span>
              </div>
              <p className="text-sm">
                Bridging cyber security and ancient wisdom for a safer digital
                world.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Training</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Cyber Defense
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Phishing Prevention
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Digital Hygiene
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Wisdom</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Bhagavad Gita
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Digital Ethics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Mindful Tech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Community</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Discussion Forums
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Expert Sessions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Progress Tracking
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; 2025 Mithayadarpan. Empowering digital citizens through
              security and wisdom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
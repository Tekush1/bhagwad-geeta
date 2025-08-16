import { Users, MessageCircle, Award, Calendar, Star, Shield, BookOpen, Heart, Menu, X, Bell, Mail, ArrowRight, CheckCircle, Clock, Rocket, Target, Globe } from 'lucide-react';
import { useState } from 'react';

export default function CommunityPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const upcomingFeatures = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discussion Forums",
      description: "Share experiences, ask questions, and learn from fellow cyber security enthusiasts",
      status: "Coming Soon"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Connect with cybersecurity professionals and spiritual wisdom teachers",
      status: "Planning"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Groups",
      description: "Join collaborative learning sessions on digital ethics and security practices",
      status: "In Development"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievement System",
      description: "Track your progress and earn badges for completing security challenges",
      status: "Coming Soon"
    }
  ];

  const communityGoals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "Building India's first community that bridges ancient wisdom with modern cybersecurity"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Inclusive Learning",
      description: "Creating a safe space for learners of all backgrounds to grow together"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Practical Security",
      description: "Focus on real-world applications that protect Indian digital citizens"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">मिठायादर्पण</h1>
              <span className="text-lg text-gray-600 hidden sm:block">Mithayadarpan</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="/training" className="text-gray-700 hover:text-orange-600 transition-colors">Training</a>
              <a href="/wisdom" className="text-gray-700 hover:text-orange-600 transition-colors">Wisdom</a>
              <a href="/community" className="text-orange-600 font-semibold">Community</a>
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
                <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50">Home</a>
                <a href="/training" className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50">Training</a>
                <a href="/wisdom" className="text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50">Wisdom</a>
                <a href="/community" className="text-orange-600 font-semibold px-4 py-2 rounded-lg bg-orange-50">Community</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Rocket className="w-4 h-4" />
              <span>Community Coming Soon</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Join Our Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Community</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're building something special - a community where cyber security meets ancient wisdom. 
            Be among the first to join when we launch!
          </p>

          {/* Early Access Signup */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Early Access</h3>
            <p className="text-gray-600 mb-6">Be notified when our community launches and get exclusive early access.</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">You're on the list!</h4>
                <p className="text-gray-600">We'll notify you as soon as our community is ready.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Community Vision</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a unique learning environment that combines practical cybersecurity skills with timeless wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityGoals.map((goal, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl w-fit mx-auto mb-6">
                  {goal.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{goal.title}</h4>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What's Coming</h3>
            <p className="text-xl text-gray-600">Features we're building for our community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Development Roadmap</h3>
            <p className="text-xl text-gray-600">Our journey to build the perfect learning community</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 1: Foundation</h4>
                <p className="text-gray-600">Core learning platform and content creation - Completed</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 2: Community Platform</h4>
                <p className="text-gray-600">Building discussion forums, user profiles, and interaction features - In Progress</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-orange-50 rounded-xl border border-orange-200">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phase 3: Launch</h4>
                <p className="text-gray-600">Beta testing with early users and community launch - Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h3 className="text-4xl font-bold mb-4">Stay Connected</h3>
            <p className="text-xl mb-8 text-orange-100">
              Get updates on our community development and be the first to know when we launch
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Notify Me
              </button>
            </div>
            
            <p className="text-sm text-orange-200 mt-4">
              No spam, just important updates about our community launch.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">Mithayadarpan</span>
              </div>
              <p className="text-sm">Bridging cyber security and ancient wisdom for a safer digital world.</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Training</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Cyber Defense</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Phishing Prevention</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Hygiene</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Wisdom</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Bhagavad Gita</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Ethics</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Mindful Tech</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Mithayadarpan. Building the future of digital security education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
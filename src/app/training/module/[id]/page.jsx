import { Shield, Lock, Eye, Users, ArrowLeft, CheckCircle, PlayCircle, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TrainingModule({ params }) {
  const moduleId = parseInt(params.id);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const modules = {
    1: {
      title: "Phishing Detection Mastery",
      description: "Learn to identify and avoid phishing attacks through real-world examples",
      duration: "45 min",
      difficulty: "Beginner",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      lessons: [
        {
          title: "Recognizing suspicious emails",
          content: "Phishing emails often have telltale signs that can help you identify them. Look for generic greetings like 'Dear Customer' instead of your actual name, urgent language that pressures you to act quickly, and suspicious sender addresses that don't match the claimed organization.",
          tips: [
            "Check the sender's email domain carefully",
            "Look for spelling and grammar mistakes",
            "Be wary of urgent language like 'Act now' or 'Immediate action required'"
          ]
        },
        {
          title: "URL analysis techniques",
          content: "Malicious URLs are a common way attackers trick users. Before clicking any link, hover over it to see the actual destination. Look for misspelled domain names, extra subdomains, or completely different domains than expected.",
          tips: [
            "Hover over links to reveal their true destination",
            "Check for misspelled popular websites (like amazn.com instead of amazon.com)",
            "Be suspicious of URL shorteners from unknown sources"
          ]
        },
        {
          title: "Social engineering tactics",
          content: "Attackers use psychological manipulation to trick you into revealing information or taking actions. They create false urgency, impersonate authority figures, or appeal to your emotions like fear or greed.",
          tips: [
            "Question unexpected requests for personal information",
            "Verify requests through independent channels",
            "Don't let urgency override your better judgment"
          ]
        },
        {
          title: "Reporting phishing attempts",
          content: "When you encounter phishing, reporting it helps protect others. Most email providers have built-in reporting features. You can also forward phishing emails to the Anti-Phishing Working Group at reportphishing@apwg.org.",
          tips: [
            "Use your email provider's built-in reporting features",
            "Forward suspicious emails to reportphishing@apwg.org",
            "Alert your IT department if you receive phishing at work"
          ]
        }
      ]
    },
    2: {
      title: "Password Security & Authentication",
      description: "Master strong password creation and multi-factor authentication",
      duration: "30 min",
      difficulty: "Beginner",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      lessons: [
        {
          title: "Creating strong passwords",
          content: "Strong passwords are your first line of defense. Use a combination of uppercase and lowercase letters, numbers, and symbols. Make passwords at least 12 characters long and avoid common words or personal information.",
          tips: [
            "Use at least 12 characters",
            "Include uppercase, lowercase, numbers, and symbols",
            "Avoid personal information like birthdays or names"
          ]
        },
        {
          title: "Password manager usage",
          content: "Password managers generate and store unique passwords for all your accounts. They encrypt your data and only require you to remember one master password. Popular options include Bitwarden, 1Password, and LastPass.",
          tips: [
            "Use a reputable password manager",
            "Enable two-factor authentication on your password manager",
            "Regularly backup your password database"
          ]
        },
        {
          title: "Two-factor authentication",
          content: "Two-factor authentication (2FA) adds an extra layer of security by requiring something you know (password) and something you have (phone, app, or hardware token). Enable 2FA on all important accounts.",
          tips: [
            "Use authenticator apps instead of SMS when possible",
            "Keep backup codes in a safe place",
            "Enable 2FA on email, banking, and social media accounts"
          ]
        },
        {
          title: "Biometric security",
          content: "Biometric authentication uses your physical characteristics like fingerprints, face recognition, or voice patterns. While convenient, biometrics should supplement, not replace, strong passwords and 2FA.",
          tips: [
            "Use biometrics as a convenience feature, not sole security",
            "Be aware that biometrics can't be changed if compromised",
            "Combine biometrics with other authentication methods"
          ]
        }
      ]
    }
  };

  const currentModule = modules[moduleId];
  
  if (!currentModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <a href="/training" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold">
            Back to Training
          </a>
        </div>
      </div>
    );
  }

  const currentLessonData = currentModule.lessons[currentLesson];
  const isLessonCompleted = completedLessons.includes(currentLesson);

  const markLessonComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson]);
    }
  };

  const nextLesson = () => {
    if (currentLesson < currentModule.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const goToLesson = (index) => {
    setCurrentLesson(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">मिठायादर्पण</h1>
                <span className="text-lg text-gray-600">Mithayadarpan</span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="/training" className="text-orange-600 font-semibold">Training</a>
              <a href="/wisdom" className="text-gray-700 hover:text-orange-600 transition-colors">Wisdom</a>
              <a href="/community" className="text-gray-700 hover:text-orange-600 transition-colors">Community</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            {/* Back Button */}
            <div className="mb-6">
              <a href="/training" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Training
              </a>
            </div>

            {/* Module Info */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${currentModule.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {currentModule.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{currentModule.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{currentModule.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentModule.duration}
                </div>
                <div>{currentModule.difficulty}</div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className={`bg-gradient-to-r ${currentModule.color} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${(completedLessons.length / currentModule.lessons.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                {completedLessons.length} of {currentModule.lessons.length} lessons completed
              </div>
            </div>

            {/* Lesson Navigation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Lessons</h3>
              <div className="space-y-2">
                {currentModule.lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => goToLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                      currentLesson === index 
                        ? 'bg-orange-50 border border-orange-200 text-orange-800' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {completedLessons.includes(index) ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <PlayCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium">{lesson.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{currentLessonData.title}</h1>
                  {isLessonCompleted && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      <span className="font-semibold">Completed</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  Lesson {currentLesson + 1} of {currentModule.lessons.length}
                </div>
              </div>

              {/* Lesson Content */}
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {currentLessonData.content}
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">💡 Key Tips:</h3>
                  <ul className="space-y-2">
                    {currentLessonData.tips.map((tip, index) => (
                      <li key={index} className="text-blue-800 flex items-start">
                        <span className="mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <div>
                  {currentLesson > 0 && (
                    <button
                      onClick={() => setCurrentLesson(currentLesson - 1)}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Previous Lesson
                    </button>
                  )}
                </div>
                
                <div className="flex gap-4">
                  {!isLessonCompleted && (
                    <button
                      onClick={markLessonComplete}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mark Complete
                    </button>
                  )}
                  
                  {currentLesson < currentModule.lessons.length - 1 ? (
                    <button
                      onClick={nextLesson}
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors flex items-center ${
                        isLessonCompleted
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                          : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      Next Lesson
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : isLessonCompleted && completedLessons.length === currentModule.lessons.length && (
                    <a
                      href="/training"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center"
                    >
                      Complete Module
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
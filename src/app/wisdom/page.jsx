import {
  Book,
  Heart,
  Lightbulb,
  Quote,
  Star,
  Compass,
  Flower,
  Sun,
} from "lucide-react";
import { useState } from "react";

export default function WisdomPage() {
  const [selectedVerse, setSelectedVerse] = useState(null);

  const wisdomModules = [
    {
      id: 1,
      title: "Digital Dharma",
      description: "Understanding righteous conduct in digital spaces",
      icon: <Compass className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      verses: [
        {
          sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः",
          translation:
            "In the field of dharma, in the field of action, assembled and ready to fight",
          application:
            "Just as Arjuna faced moral dilemmas on the battlefield, we face ethical choices in digital spaces. Every online action is an opportunity to practice dharma.",
        },
      ],
    },
    {
      id: 2,
      title: "Mindful Technology Use",
      description: "Practicing awareness and moderation in digital consumption",
      icon: <Flower className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      verses: [
        {
          sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु",
          translation:
            "For one who is moderate in eating and recreation, moderate in work",
          application:
            "Balance in digital consumption prevents addiction and maintains mental clarity. Set boundaries for screen time and social media use.",
        },
      ],
    },
    {
      id: 3,
      title: "Truth in Communication",
      description: "Practicing honesty and kindness in online interactions",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
      verses: [
        {
          sanskrit: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्",
          translation:
            "Speech that does not agitate, that is truthful, pleasant and beneficial",
          application:
            "Before posting or commenting online, ask: Is it true? Is it kind? Is it necessary? Practice compassionate communication in digital spaces.",
        },
      ],
    },
    {
      id: 4,
      title: "Detachment from Results",
      description: "Finding peace beyond likes, shares, and digital validation",
      icon: <Sun className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      verses: [
        {
          sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
          translation:
            "You have the right to perform action, but never to the fruits of action",
          application:
            "Share content and engage online without attachment to likes or validation. Focus on authentic expression rather than seeking approval.",
        },
      ],
    },
  ];

  const dailyWisdom = [
    {
      theme: "Digital Patience",
      verse: "क्षमा वीरस्य भूषणम्",
      translation: "Patience is the ornament of the brave",
      guidance:
        "When facing online trolls or negative comments, respond with patience rather than anger. True strength lies in maintaining composure.",
    },
    {
      theme: "Cyber Compassion",
      verse: "सर्वभूतेषु यो पश्यति एकत्वम्",
      translation: "One who sees unity in all beings",
      guidance:
        "Remember that behind every profile is a real person with feelings. Practice empathy in all digital interactions.",
    },
    {
      theme: "Digital Detox",
      verse: "संतुष्टः सततं योगी",
      translation: "Ever content, the yogi",
      guidance:
        "Find contentment beyond digital stimulation. Regular breaks from technology help maintain inner peace and clarity.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">मिठायादर्पण</h1>
              <span className="text-lg text-gray-600">Mithayadarpan</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/training"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Training
              </a>
              <a href="/wisdom" className="text-orange-600 font-semibold">
                Wisdom
              </a>
              <a
                href="/community"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Community
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ancient Wisdom for Digital Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Apply timeless teachings from the Bhagavad Gita to navigate modern
            digital challenges with wisdom and integrity
          </p>
          <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-6 rounded-xl border border-orange-200">
            <Quote className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-800 mb-2">
              "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत"
            </p>
            <p className="text-gray-600 mb-2">
              "Whenever there is a decline in dharma, O Bharata"
            </p>
            <p className="text-sm text-gray-500">
              Even in digital spaces, we must uphold righteousness and ethical
              conduct
            </p>
          </div>
        </div>
      </section>

      {/* Wisdom Modules */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Digital Ethics Modules
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {wisdomModules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center text-white mr-4`}
                    >
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {module.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {module.verses.map((verse, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-lg font-medium text-gray-800 mb-2 font-sanskrit">
                        {verse.sanskrit}
                      </p>
                      <p className="text-gray-600 italic mb-3">
                        "{verse.translation}"
                      </p>
                      <p className="text-sm text-gray-700">
                        {verse.application}
                      </p>
                    </div>
                  ))}

                  <button
                    onClick={() =>
                      (window.location.href = `/wisdom/module/${module.id}`)
                    }
                    className={`w-full bg-gradient-to-r ${module.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Explore Module
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Wisdom */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Daily Digital Wisdom
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {dailyWisdom.map((wisdom, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-xl border border-orange-200"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-orange-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {wisdom.theme}
                  </h4>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium text-gray-800 mb-2 font-sanskrit">
                    {wisdom.verse}
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    "{wisdom.translation}"
                  </p>
                </div>
                <p className="text-gray-700 text-sm">{wisdom.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Apply Wisdom in Daily Digital Life
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">
                Before Posting
              </h4>
              <p className="text-purple-100">
                Pause and reflect: Will this content contribute positively? Does
                it align with dharmic principles?
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">
                In Conflicts
              </h4>
              <p className="text-purple-100">
                Respond with compassion rather than anger. See the divine in
                every person, even online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Corner */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Digital Detox Meditation
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-200">
            <Flower className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              5-Minute Mindfulness Break
            </h4>
            <p className="text-gray-600 mb-6">
              Take a moment to disconnect from devices and reconnect with your
              inner self
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-medium text-gray-800 mb-2 font-sanskrit">
                "योगस्थः कुरु कर्माणि"
              </p>
              <p className="text-gray-600 italic">
                "Established in yoga, perform action"
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/wisdom/meditation")}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all"
            >
              Start Meditation
            </button>
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
                  <Book className="w-5 h-5 text-white" />
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

      <style jsx global>{`
        .font-sanskrit {
          font-family: 'Noto Sans Devanagari', 'Arial Unicode MS', sans-serif;
        }
      `}</style>
    </div>
  );
}

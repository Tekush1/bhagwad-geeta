import { ArrowLeft, BookOpen, CheckCircle, Quote, Compass, Flower, Heart, Sun } from 'lucide-react';
import { useState } from 'react';

export default function WisdomModulePage({ params }) {
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [currentLesson, setCurrentLesson] = useState(0);

  const wisdomModules = {
    1: {
      title: "Digital Dharma",
      description: "Understanding righteous conduct in digital spaces",
      icon: <Compass className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      lessons: [
        {
          title: "The Digital Battlefield",
          sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः",
          translation: "In the field of dharma, in the field of action, assembled and ready to fight",
          content: "Just as Arjuna faced moral dilemmas on the battlefield of Kurukshetra, we face ethical choices in digital spaces. Every online action - from the content we share to the way we respond to others - is an opportunity to practice dharma (righteous conduct).",
          application: "Before posting, commenting, or sharing online, pause and ask yourself: 'Does this action align with dharmic principles? Will it contribute positively to the digital world?'",
          reflection: "Think of a recent online interaction where you could have acted more mindfully. How would you handle it differently now?"
        },
        {
          title: "Truth as Your Guide",
          sanskrit: "सत्यमेव जयते",
          translation: "Truth alone triumphs",
          content: "In the digital age, misinformation spreads rapidly. The principle of Satya (truthfulness) becomes our guide in navigating the vast ocean of digital content. We must be both consumers and creators of truth.",
          application: "Fact-check before sharing. Share content that is accurate and beneficial. When you don't know something, admit it rather than spreading uncertainty.",
          reflection: "How can you become a more reliable source of truth in your digital communities?"
        },
        {
          title: "Dharmic Decision Making",
          sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
          translation: "Whenever there is a decline in dharma, O Bharata",
          content: "Krishna teaches that whenever righteousness declines, divine intervention restores balance. In digital spaces, we each have the power to be agents of dharmic restoration through our conscious choices.",
          application: "When you witness cyberbullying, misinformation, or harmful content, consider how you can respond in a way that restores dharmic balance - whether through reporting, positive counter-content, or direct but compassionate engagement.",
          reflection: "What are three specific ways you can help restore dharma in your digital environments?"
        }
      ]
    },
    2: {
      title: "Mindful Technology Use",
      description: "Practicing awareness and moderation in digital consumption",
      icon: <Flower className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      lessons: [
        {
          title: "The Middle Path of Digital Consumption",
          sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु",
          translation: "For one who is moderate in eating and recreation, moderate in work",
          content: "Krishna emphasizes moderation in all aspects of life. In our digital age, this wisdom applies to our consumption of digital content, social media, and technology. Neither complete avoidance nor excessive indulgence leads to peace.",
          application: "Set specific times for checking social media and news. Practice digital fasting periods. Be intentional about the content you consume - choose quality over quantity.",
          reflection: "What would a balanced relationship with technology look like for you personally?"
        },
        {
          title: "Awareness in Digital Habits",
          sanskrit: "योगः चित्तवृत्ति निरोधः",
          translation: "Yoga is the restraint of the fluctuations of the mind",
          content: "Patanjali defines yoga as controlling mental fluctuations. Digital devices often create mental turbulence through constant notifications, information overload, and dopamine-driven feedback loops.",
          application: "Practice mindful phone usage - notice when you reach for your device unconsciously. Use notification settings intentionally. Create technology-free spaces in your home.",
          reflection: "When do you find yourself using technology unconsciously? What triggers these habits?"
        },
        {
          title: "Digital Detox as Spiritual Practice",
          sanskrit: "अन्तर्दृष्टिर्बहिर्दृष्टेः",
          translation: "Inner vision beyond outer sight",
          content: "Regular periods of digital disconnection allow us to reconnect with our inner selves and develop discernment about what truly serves our spiritual growth versus what merely entertains or distracts.",
          application: "Schedule regular digital detox periods - start with 1 hour daily, then extend to longer periods. Use this time for meditation, nature walks, or meaningful conversations.",
          reflection: "What insights arise when you step away from digital stimulation? What do you discover about yourself?"
        }
      ]
    },
    3: {
      title: "Truth in Communication",
      description: "Practicing honesty and kindness in online interactions",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
      lessons: [
        {
          title: "Compassionate Digital Speech",
          sanskrit: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्",
          translation: "Speech that does not agitate, that is truthful, pleasant and beneficial",
          content: "Krishna outlines the ideal form of speech: truthful, beneficial, non-agitating, and pleasant. In digital communication, where tone and context are often lost, these principles become even more crucial.",
          application: "Before posting or commenting, apply the three-gate test: Is it true? Is it kind? Is it necessary? If it fails any of these tests, reconsider your communication.",
          reflection: "How can you bring more compassion to your digital communications while still being authentic?"
        },
        {
          title: "Right Speech in Digital Age",
          sanskrit: "वाचा वृत्तिर्न केवलं मनसः",
          translation: "Speech is not merely words but the expression of mind",
          content: "Our digital communications reflect our mental state and contribute to the collective consciousness of online spaces. Mindful communication can transform not just our own experience but the entire digital environment around us.",
          application: "Practice pausing before responding to inflammatory content. Choose words that elevate rather than escalate conflicts. Share content that inspires and educates rather than merely entertains.",
          reflection: "What impact do your digital words have on others? How can your communication style contribute to a more conscious digital world?"
        },
        {
          title: "Dealing with Digital Conflict",
          sanskrit: "अहिंसा परमो धर्मः",
          translation: "Non-violence is the highest dharma",
          content: "Digital spaces often amplify conflict and misunderstanding. The principle of ahimsa (non-violence) extends beyond physical harm to include emotional and psychological well-being in our online interactions.",
          application: "When faced with online criticism or conflict, respond with patience and understanding. Seek to understand before seeking to be understood. Sometimes the most powerful response is no response at all.",
          reflection: "How can you practice ahimsa in challenging digital situations? What would it look like to respond to online aggression with compassion?"
        }
      ]
    },
    4: {
      title: "Detachment from Results",
      description: "Finding peace beyond likes, shares, and digital validation",
      icon: <Sun className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      lessons: [
        {
          title: "Action Without Attachment to Results",
          sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
          translation: "You have the right to perform action, but never to the fruits of action",
          content: "This central teaching of the Gita is particularly relevant in the age of social media metrics. We can share authentically and engage meaningfully without being attached to likes, shares, or digital validation.",
          application: "Share content because it expresses your authentic self or serves others, not for validation. Notice when you're checking for responses and practice letting go of expectations.",
          reflection: "How does your relationship with social media metrics affect your peace of mind? What would it feel like to post without any expectation of response?"
        },
        {
          title: "Inner Scorecard vs. Outer Scorecard",
          sanskrit: "आत्मन्येवात्मना तुष्टः",
          translation: "Satisfied within the self by the self",
          content: "Warren Buffett spoke of inner vs. outer scorecards - what matters is internal satisfaction rather than external validation. The Gita teaches this same principle: true fulfillment comes from alignment with our higher self, not from others' approval.",
          application: "Develop internal metrics for success - how aligned were your actions with your values? Did you contribute positively to others' lives? These matter more than external metrics.",
          reflection: "What internal measures of success resonate with you? How can you cultivate satisfaction that comes from within rather than from digital validation?"
        },
        {
          title: "Digital Ego and True Self",
          sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति",
          translation: "Who sees Me everywhere and sees everything in Me",
          content: "The ego seeks recognition, comparison, and validation. The true Self recognizes the divine in all beings and expressions. Digital platforms can either feed the ego or become vehicles for authentic expression and connection.",
          application: "Share from a place of service rather than self-promotion. Celebrate others' successes genuinely. Use digital platforms to express your authentic self rather than a curated image.",
          reflection: "When you post online, are you expressing your authentic self or feeding your ego? How can you tell the difference?"
        }
      ]
    }
  };

  const moduleId = parseInt(params.id);
  const module = wisdomModules[moduleId];

  if (!module) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <a href="/wisdom" className="text-orange-600 hover:text-orange-700">
            Return to Wisdom
          </a>
        </div>
      </div>
    );
  }

  const handleLessonComplete = (lessonIndex) => {
    setCompletedLessons(prev => new Set([...prev, lessonIndex]));
  };

  const progress = (completedLessons.size / module.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">मिठायादर्पण</h1>
                <span className="text-lg text-gray-600">Mithayadarpan</span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="/training" className="text-gray-700 hover:text-orange-600 transition-colors">Training</a>
              <a href="/wisdom" className="text-orange-600 font-semibold">Wisdom</a>
              <a href="/community" className="text-gray-700 hover:text-orange-600 transition-colors">Community</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <a href="/wisdom" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Wisdom
          </a>
        </div>

        {/* Module Header */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center text-white mr-6`}>
              {module.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{module.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`bg-gradient-to-r ${module.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {completedLessons.size} of {module.lessons.length} lessons completed
              </div>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-6">
          {module.lessons.map((lesson, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Lesson {index + 1}: {lesson.title}
                    </h3>
                    {completedLessons.has(index) && (
                      <div className="flex items-center text-green-600 text-sm mb-2">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Completed
                      </div>
                    )}
                  </div>
                </div>

                {/* Sanskrit Quote */}
                <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-4 rounded-lg mb-6">
                  <Quote className="w-6 h-6 text-orange-600 mb-2" />
                  <p className="text-lg font-medium text-gray-800 mb-2 font-sanskrit">
                    {lesson.sanskrit}
                  </p>
                  <p className="text-gray-600 italic">
                    "{lesson.translation}"
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teaching</h4>
                    <p className="text-gray-700">{lesson.content}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Practical Application</h4>
                    <p className="text-gray-700">{lesson.application}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reflection</h4>
                    <p className="text-gray-700 italic">{lesson.reflection}</p>
                  </div>
                </div>

                {/* Complete Lesson Button */}
                {!completedLessons.has(index) && (
                  <button
                    onClick={() => handleLessonComplete(index)}
                    className={`bg-gradient-to-r ${module.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {progress === 100 && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Module Complete!</h3>
            <p className="text-green-700 mb-4">
              You have successfully completed the {module.title} module. 
              Take time to integrate these teachings into your daily digital practice.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/wisdom"
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Continue Learning
              </a>
              <a
                href="/wisdom/meditation"
                className="border-2 border-green-500 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Practice Meditation
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .font-sanskrit {
          font-family: 'Noto Sans Devanagari', 'Arial Unicode MS', sans-serif;
        }
      `}</style>
    </div>
  );
}
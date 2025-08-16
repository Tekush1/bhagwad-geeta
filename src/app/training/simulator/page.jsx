import { Shield, AlertTriangle, CheckCircle, XCircle, ArrowLeft, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function PhishingSimulator() {
  const [currentEmail, setCurrentEmail] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const phishingEmails = [
    {
      id: 1,
      isPhishing: true,
      from: "security@amazn-verification.com",
      subject: "URGENT: Your account will be suspended",
      body: "Dear Customer,\n\nYour Amazon account shows suspicious activity. Click here immediately to verify your account or it will be suspended within 24 hours.\n\nVerify Now: http://amazn-verify.secure-login.net\n\nThank you,\nAmazon Security Team",
      redFlags: [
        "Misspelled domain (amazn instead of amazon)",
        "Creates urgency and fear",
        "Suspicious URL with multiple subdomains",
        "Generic greeting 'Dear Customer'"
      ]
    },
    {
      id: 2,
      isPhishing: false,
      from: "notifications@github.com",
      subject: "New push to your repository",
      body: "Hello Priya,\n\nThere was a new push to your repository 'mithayadarpan-website' by user rajpatel.\n\nView the changes: https://github.com/priya/mithayadarpan-website/commit/abc123\n\nBest regards,\nGitHub Team",
      redFlags: [],
      goodSigns: [
        "Legitimate GitHub domain",
        "Personalized greeting",
        "Specific repository information",
        "Valid GitHub URL structure"
      ]
    },
    {
      id: 3,
      isPhishing: true,
      from: "winner@lottery-international.com",
      subject: "Congratulations! You've won $50,000",
      body: "CONGRATULATIONS!!!\n\nYou have been selected as our lucky winner in the International Email Lottery! You've won $50,000 USD.\n\nTo claim your prize, please provide:\n- Full name\n- Phone number\n- Bank account details\n- Copy of ID\n\nReply immediately as this offer expires in 48 hours!\n\nDr. Michael Johnson\nLottery Commission",
      redFlags: [
        "Too good to be true offer",
        "Requests personal financial information",
        "Creates false urgency",
        "Unsolicited lottery win"
      ]
    },
    {
      id: 4,
      isPhishing: false,
      from: "support@paypal.com",
      subject: "Your PayPal payment receipt",
      body: "Hi Priya Sharma,\n\nThis email confirms that you sent a payment of $25.00 USD to Tech Store Inc.\n\nTransaction ID: 1AB23456CD789012E\nDate: Dec 15, 2024\n\nView transaction details in your PayPal account.\n\nThanks for using PayPal!",
      redFlags: [],
      goodSigns: [
        "Legitimate PayPal domain",
        "Specific transaction details",
        "Personalized with actual name",
        "No suspicious links or requests"
      ]
    }
  ];

  const currentEmailData = phishingEmails[currentEmail];

  const handleAnswer = (isPhishingGuess) => {
    setUserAnswer(isPhishingGuess);
    setAnswered(true);
    
    if (isPhishingGuess === currentEmailData.isPhishing) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  const nextEmail = () => {
    if (currentEmail < phishingEmails.length - 1) {
      setCurrentEmail(currentEmail + 1);
      setAnswered(false);
      setUserAnswer(null);
      setShowResult(false);
    }
  };

  const resetSimulator = () => {
    setCurrentEmail(0);
    setScore(0);
    setAnswered(false);
    setUserAnswer(null);
    setShowResult(false);
  };

  const isCorrect = userAnswer === currentEmailData.isPhishing;
  const isComplete = currentEmail === phishingEmails.length - 1 && answered;

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

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <a href="/training" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Training
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Phishing Detection Simulator</h1>
          <p className="text-lg text-gray-600">Test your ability to identify phishing emails</p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">
              {currentEmail + 1} of {phishingEmails.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentEmail + (answered ? 1 : 0)) / phishingEmails.length) * 100}%` }}
            ></div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-2xl font-bold text-gray-900">{score}</span>
            <span className="text-gray-600 ml-1">correct out of {answered ? currentEmail + 1 : currentEmail}</span>
          </div>
        </div>

        {/* Email Simulator */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-6">
          {/* Email Header */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">📧</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email Analysis</div>
                <div className="text-sm text-gray-600">Carefully examine this email</div>
              </div>
            </div>
          </div>

          {/* Email Content */}
          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div>
                <span className="font-semibold text-gray-700">From: </span>
                <span className="text-gray-900 bg-gray-100 px-2 py-1 rounded">
                  {currentEmailData.from}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Subject: </span>
                <span className="text-gray-900">{currentEmailData.subject}</span>
              </div>
              <div className="border-t pt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-gray-800 font-sans">
                    {currentEmailData.body}
                  </pre>
                </div>
              </div>
            </div>

            {/* Answer Buttons */}
            {!answered && (
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleAnswer(false)}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Legitimate Email
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <XCircle className="w-5 h-5 mr-2" />
                  Phishing Email
                </button>
              </div>
            )}

            {/* Result */}
            {showResult && (
              <div className={`p-6 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center mb-4">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mr-3" />
                  )}
                  <h3 className={`text-lg font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </h3>
                </div>
                
                <p className={`mb-4 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  This email is <strong>{currentEmailData.isPhishing ? 'a phishing attempt' : 'legitimate'}</strong>.
                </p>

                {/* Red Flags or Good Signs */}
                {currentEmailData.isPhishing ? (
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">🚩 Red Flags:</h4>
                    <ul className="space-y-1">
                      {currentEmailData.redFlags.map((flag, index) => (
                        <li key={index} className="text-red-700 text-sm">• {flag}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">✅ Good Signs:</h4>
                    <ul className="space-y-1">
                      {currentEmailData.goodSigns.map((sign, index) => (
                        <li key={index} className="text-green-700 text-sm">• {sign}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next Button */}
                <div className="mt-6 flex justify-center">
                  {!isComplete ? (
                    <button
                      onClick={nextEmail}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
                    >
                      Next Email
                    </button>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Simulation Complete!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Your final score: <span className="font-bold">{score} out of {phishingEmails.length}</span>
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={resetSimulator}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </button>
                        <a
                          href="/training"
                          className="border-2 border-orange-500 text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                        >
                          Back to Training
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Pro Tips for Spotting Phishing
          </h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Check the sender's email domain carefully for misspellings</li>
            <li>• Be suspicious of urgent language and threats</li>
            <li>• Hover over links to see the actual URL destination</li>
            <li>• Look for personalized information vs generic greetings</li>
            <li>• Be wary of unsolicited offers or requests for personal information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
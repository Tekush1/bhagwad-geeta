import { ArrowLeft, Play, Pause, RotateCcw, Flower, Heart, Sun, Moon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function MeditationPage() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [currentPhase, setCurrentPhase] = useState(0);
  const [breathPhase, setBreathPhase] = useState('inhale'); // inhale, hold, exhale, pause
  const [breathCount, setBreathCount] = useState(0);
  const intervalRef = useRef();
  const breathIntervalRef = useRef();

  const meditationPhases = [
    {
      title: "Digital Disconnection",
      duration: 60,
      instruction: "Close your eyes and disconnect from all digital thoughts. Feel your breath naturally flowing.",
      mantra: "I release all digital noise",
      sanskrit: "मुक्तिं चिन्तयामि"
    },
    {
      title: "Mindful Awareness", 
      duration: 120,
      instruction: "Notice any urges to check devices. Acknowledge them without judgment and return to your breath.",
      mantra: "I am present in this moment",
      sanskrit: "अहं वर्तमाने स्थितः"
    },
    {
      title: "Inner Peace",
      duration: 90,
      instruction: "Feel the stillness within. This is your natural state, beyond all digital distractions.",
      mantra: "Peace flows through me",
      sanskrit: "शान्तिः मय्यस्ति"
    },
    {
      title: "Mindful Re-engagement",
      duration: 30,
      instruction: "Slowly prepare to return to the digital world with consciousness and intention.",
      mantra: "I engage mindfully",
      sanskrit: "सचेतनं संलग्ने"
    }
  ];

  const breathPattern = [
    { phase: 'inhale', duration: 4000, instruction: 'Breathe in slowly...' },
    { phase: 'hold', duration: 2000, instruction: 'Hold gently...' },
    { phase: 'exhale', duration: 6000, instruction: 'Breathe out completely...' },
    { phase: 'pause', duration: 1000, instruction: 'Rest...' }
  ];

  const getCurrentPhase = () => {
    let totalTime = 0;
    for (let i = 0; i < meditationPhases.length; i++) {
      totalTime += meditationPhases[i].duration;
      if (300 - timeLeft <= totalTime) {
        return i;
      }
    }
    return meditationPhases.length - 1;
  };

  const startBreathingPattern = () => {
    let patternIndex = 0;
    
    const nextBreathPhase = () => {
      const pattern = breathPattern[patternIndex];
      setBreathPhase(pattern.phase);
      
      breathIntervalRef.current = setTimeout(() => {
        patternIndex = (patternIndex + 1) % breathPattern.length;
        if (patternIndex === 0) {
          setBreathCount(prev => prev + 1);
        }
        nextBreathPhase();
      }, pattern.duration);
    };
    
    nextBreathPhase();
  };

  const stopBreathingPattern = () => {
    if (breathIntervalRef.current) {
      clearTimeout(breathIntervalRef.current);
    }
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsActive(false);
            stopBreathingPattern();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      startBreathingPattern();
    } else {
      clearInterval(intervalRef.current);
      stopBreathingPattern();
    }

    return () => {
      clearInterval(intervalRef.current);
      stopBreathingPattern();
    };
  }, [isActive, timeLeft]);

  useEffect(() => {
    setCurrentPhase(getCurrentPhase());
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(300);
    setCurrentPhase(0);
    setBreathCount(0);
    setBreathPhase('inhale');
  };

  const getBreathInstruction = () => {
    const pattern = breathPattern.find(p => p.phase === breathPhase);
    return pattern ? pattern.instruction : 'Breathe naturally...';
  };

  const getBreathCircleScale = () => {
    switch (breathPhase) {
      case 'inhale': return 'scale-110';
      case 'hold': return 'scale-110';
      case 'exhale': return 'scale-75';
      case 'pause': return 'scale-75';
      default: return 'scale-100';
    }
  };

  const isComplete = timeLeft === 0;
  const progress = ((300 - timeLeft) / 300) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Flower className="w-6 h-6 text-white" />
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

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Flower className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Detox Meditation</h1>
          <p className="text-lg text-gray-600">5-minute mindfulness practice for digital wellness</p>
        </div>

        {!isComplete ? (
          <>
            {/* Main Meditation Interface */}
            <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-8 mb-6">
              {/* Timer */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">{formatTime(timeLeft)}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500">
                  Phase {currentPhase + 1} of {meditationPhases.length}
                </div>
              </div>

              {/* Breathing Circle */}
              {isActive && (
                <div className="flex justify-center mb-8">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center transition-transform duration-2000 ${getBreathCircleScale()}`}>
                    <div className="text-white font-semibold text-lg">
                      {breathPhase === 'inhale' && '🌸'}
                      {breathPhase === 'hold' && '🕉️'}
                      {breathPhase === 'exhale' && '🍃'}
                      {breathPhase === 'pause' && '✨'}
                    </div>
                  </div>
                </div>
              )}

              {/* Current Phase Information */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {meditationPhases[currentPhase]?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {meditationPhases[currentPhase]?.instruction}
                </p>
                
                {isActive && (
                  <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <p className="text-amber-800 font-medium mb-2">{getBreathInstruction()}</p>
                    <div className="text-sm text-amber-600">Breath cycle: {breathCount}</div>
                  </div>
                )}

                <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-lg font-medium text-gray-800 mb-1 font-sanskrit">
                    {meditationPhases[currentPhase]?.sanskrit}
                  </p>
                  <p className="text-gray-600 italic text-sm mb-2">
                    "{meditationPhases[currentPhase]?.mantra}"
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center space-x-4">
                {!isActive ? (
                  <button
                    onClick={handleStart}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all flex items-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {timeLeft === 300 ? 'Begin Meditation' : 'Resume'}
                  </button>
                ) : (
                  <button
                    onClick={handlePause}
                    className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all flex items-center"
                  >
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </button>
                )}
                
                <button
                  onClick={handleReset}
                  className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Completion Screen */
          <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sun className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meditation Complete!</h2>
            <p className="text-lg text-gray-600 mb-6">
              You've successfully completed your 5-minute digital detox meditation. 
              You completed {breathCount} breath cycles.
            </p>
            
            <div className="bg-gradient-to-r from-orange-100 to-purple-100 p-6 rounded-lg mb-6">
              <p className="text-lg font-medium text-gray-800 mb-2 font-sanskrit">
                "शान्तिः शान्तिः शान्तिः"
              </p>
              <p className="text-gray-600 italic">
                "Peace, Peace, Peace"
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all flex items-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Meditate Again
              </button>
              <a
                href="/wisdom"
                className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Return to Wisdom
              </a>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-6">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Meditation Tips
          </h3>
          <ul className="space-y-2 text-purple-800 text-sm">
            <li>• Find a quiet space where you won't be disturbed</li>
            <li>• Put all devices on silent or in another room</li>
            <li>• Sit comfortably with your back straight</li>
            <li>• If your mind wanders to digital thoughts, gently return to your breath</li>
            <li>• There's no "perfect" meditation - just be present</li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .font-sanskrit {
          font-family: 'Noto Sans Devanagari', 'Arial Unicode MS', sans-serif;
        }
      `}</style>
    </div>
  );
}
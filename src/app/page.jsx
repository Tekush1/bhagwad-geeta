import {
  Shield,
  Book,
  Users,
  Target,
  ChevronRight,
  Lock,
  Eye,
  Heart,
} from "lucide-react";

export default function HomePage() {
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
              <a
                href="#features"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Features
              </a>
              <a
                href="/training"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cyber Defense Meets
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
              Ancient Wisdom
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn practical cyber safety skills while gaining ethical guidance
            from the Bhagavad Gita. Protect yourself online and make responsible
            digital decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/training"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Learning
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/wisdom"
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Explore Wisdom
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// app/page.tsx
import HeroSection from '../components/HeroSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen p-6">
      <HeroSection />
      
      {/* Features Overview */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1: Real-time Chat */}
        <Link href="/chat">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800">Real-time Chat</h2>
            <p className="mt-2 text-gray-600">Instant messaging for seamless communication with your team.</p>
          </div>
        </Link>
        
        {/* Feature 2: Meeting Rooms */}
        <Link href="/meeting">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800">Meeting Rooms</h2>
            <p className="mt-2 text-gray-600">Host or join meetings effortlessly, anytime, anywhere.</p>
          </div>
        </Link>
        
        {/* Feature 3: Collaborative Tools */}
        <Link href="/collaborative-tools">
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800">Collaborative Tools</h2>
            <p className="mt-2 text-gray-600">Share files and ideas to keep your projects on track.</p>
          </div>
        </Link>
      </div>

      {/* Testimonials Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Our Users Say</h2>
        <p className="text-gray-600">"This platform has transformed our team's workflow. Highly recommend!"</p>
        <p className="mt-2 text-gray-600">- John Doe, Team Leader</p>
      </div>
    </div>
  );
}

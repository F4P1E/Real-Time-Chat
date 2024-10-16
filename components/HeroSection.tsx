// components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../assets/HeroBackground/DoMore.jpg'; // Adjust the path based on your structure


const HeroSection = () => {
  return (
    <section className="relative text-white py-20 text-center rounded-b-lg overflow-hidden"> {/* Added rounded corners */}
      <Image 
        src={heroImage}
        alt="Work Environment Background"
        layout="fill" // Cover the section completely
        objectFit="cover" // Maintain aspect ratio while covering the area
        className="z-0" // Ensure the image is behind the text
      />
      <div className="bg-black bg-opacity-50 relative z-10 py-20"> {/* Dark overlay for better text contrast */}
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Syntax Canvas</h1>
          <p className="text-lg mb-6">
            Collaborate with your team in real-time chat and meetings.
          </p>
          <Link href="/register">
            <button className="bg-white text-blue-500 py-2 px-6 rounded-md hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

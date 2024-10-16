// components/Navbar.tsx
const Navbar = () => {
    return (
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-gray-800">Syntax Canvas</a>
          <div className="space-x-4">
            <a href="/create-room" className="text-gray-600 hover:text-gray-800 transition">Create Room</a>
            <a href="/join-room" className="text-gray-600 hover:text-gray-800 transition">Join Room</a>
            <a href="/login" className="text-gray-600 hover:text-gray-800 transition">Login</a>
            <a href="/register" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Register</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
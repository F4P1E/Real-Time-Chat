// components/MeetingRoom.tsx
import { useState } from 'react';
import '../app/globals.css';

const MeetingRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPrivate(e.target.value === 'private');
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic here to create the room (e.g., call an API or Firebase function)
    console.log(`Room Created: ${roomName}, Privacy: ${isPrivate ? 'Private' : 'Public'}`);
    // Reset the form after creation
    setRoomName('');
    setIsPrivate(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 p-4">
      <h1 className="text-5xl font-semibold text-gray-800 mb-8">Welcome to the Meeting Room!</h1>
      <form onSubmit={handleCreateRoom} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="roomName">
            Room Name
          </label>
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={handleRoomNameChange}
            required
            className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter room name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="privacy">
            Privacy
          </label>
          <select
            id="privacy"
            onChange={handlePrivacyChange}
            className="shadow-md border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 w-full"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default MeetingRoom;

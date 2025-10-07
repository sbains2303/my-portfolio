export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">Saihajpreet Bains</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

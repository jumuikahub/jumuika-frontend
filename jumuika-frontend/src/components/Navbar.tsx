export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-lg font-semibold">Jumuika Hub KE</h1>
      <div className="flex gap-4 text-sm">
        <a href="/about">About</a>
        <a href="/institutions">Institutions</a>
        <a href="/dark">Dark</a>
      </div>
    </nav>
  );
}

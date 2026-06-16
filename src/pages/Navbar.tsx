import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          DevForge
        </Link>

        <div className="flex gap-4">
          <Link to="/">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
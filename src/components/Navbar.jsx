import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎮 JJ Game</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">Story</Link>
        <Link to="/services">Features</Link>
        <Link to="/contact">Feedback</Link>
      </div>
    </nav>
  );
}
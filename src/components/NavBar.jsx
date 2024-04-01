import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
      <h1>Welcome to the Puppy Bowl</h1>
      </div>

      <div>
        <Link to="/add-player">Add New Player</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}
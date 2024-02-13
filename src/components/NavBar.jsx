import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav>
      <ul>
        
        {!user && 
          <>
            <li>
                <Link to="AllPlayers">All Players</Link>
            </li>
            <li>
              <Link to="NewPlayerForm">New Player Form</Link>
            </li>
            <li>
              <Link to="Registration">Registration</Link>
            </li>
            
        </>
        }
      </ul>
    </nav>
  )
}

export default Navbar;

import './NavBar.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className='navList'>
            <li>
                <Link to="/" className='navLink'>Home</Link>    
            </li>
            <li>
                <Link to="/stats" className='navLink'>Stats</Link>
            </li>
            <li>
                <Link to="/champions" className='navLink'>Champions</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
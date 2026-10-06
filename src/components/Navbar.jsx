import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
<Link to="/"className="logo">TINYURL</Link>
<ul className="nav-links">
<li><Link to="/plans">Plans</Link></li>
<li><Link to="/features">Features</Link></li>
<li><Link to="/domains">Domains</Link></li>
<li><Link to="/resources">Resources</Link></li>
</ul>

<div className="nav-auth">
<Link to="/login">Login</Link>
<Link to="/signup">Sign Up</Link>
</div>
        </nav>
    )
}
export default Navbar;
import "./navbar.scss";
import { Link } from 'react-scroll';

export default function navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link activeClass="active" className="test1" to='p1' spy={true} smooth={true} duration={1000}>
                    Home
                </Link></li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

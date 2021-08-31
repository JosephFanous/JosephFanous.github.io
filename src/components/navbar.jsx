import "./navbar.scss";
import { Link } from 'react-scroll';

export default function navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link activeClass="active" className="test1" to='p1' spy={true} smooth={true} duration={1000}>
                    Home
                </Link></li>
                <li><Link activeClass="active" className="test1" to='p2' spy={true} smooth={true} duration={1000}>
                    Projects
                </Link></li>
                <li><Link activeClass="active" className="test1" to='p3' spy={true} smooth={true} duration={1000}>
                Resume
                </Link></li>
                <li><Link activeClass="active" className="test1" to='p4' spy={true} smooth={true} duration={1000}>
                Contact
                </Link></li>
            </ul>
        </div>
    )
}

import { Link, NavLink } from 'react-router-dom';
import images from '../../constants';
import { useRef, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
  const toggleref = useRef();
  const megaref = useRef();
  const stoppropa = (e) => {
    e.stopPropagation();
  }
  const handlemenu = (e) => {
    stoppropa(e);
    megaref.current.classList.toggle('show');
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target !== toggleref) {
        if (megaref.current.classList.contains('show')) {
          megaref.current.classList.toggle('show');
        }
      }
    })
  }, [])
  return (
    <header className="header" id="header">
      <div className="container">
        <NavLink exact='true' to="/" className="logo">Psycho</NavLink>
        <ul className="main-nav">
          <li><NavLink exact='true' to="/Gallery">Gallery</NavLink></li>
          <li><NavLink exact='true' to="/Features">Features</NavLink></li>
          <li><Link to='#/' ref={toggleref} onClick={handlemenu}>Other Links</Link>
            <div className="mega-menu" ref={megaref}>
              <div className="image">
                <img src={images.megamenu} alt="megamenu" />
              </div>
              <ul className="links">
                <li><NavLink exact='true' to="/Testimonials"><i className="far fa-comments fa-fw"></i> Testimonials</NavLink></li>
                <li><NavLink exact='true' to="/Articles"><i className="far fa-chart-bar fa-fw"></i> Articles</NavLink></li>
                <li><NavLink exact='true' to="/Skills"><i className="far fa-check-circle fa-fw"></i> Our Skills</NavLink></li>
                <li><NavLink exact='true' to="/HowItWorks"><i className="far fa-clipboard fa-fw"></i> How It Works</NavLink></li>
              </ul>
              <ul className="links">
                <li><NavLink exact='true' to="/Pricing"><i className="fas fa-server fa-fw"></i> Pricing Plans</NavLink></li>
                <li><NavLink exact='true' to="/TeamMembers"><i className="far fa-user fa-fw"></i> Team Members</NavLink></li>
                <li><NavLink exact='true' to="/Services"><i className="far fa-building fa-fw"></i> Services</NavLink></li>
                <li><NavLink exact='true' to="/TopVideos"><i className="far fa-play-circle fa-fw"></i> Top Videos</NavLink></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Navbar;

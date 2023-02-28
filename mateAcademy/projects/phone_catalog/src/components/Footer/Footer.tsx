import React, { memo } from 'react';
import svg from '../../public/icons/chevron-up.svg';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import './Footer.scss';

const navLinks = ['github', 'contacts', 'rights'];

export const Footer: React.FC = memo(() => {
  return (
    <footer className='Footer'>
      <div className='Footer__container'> 
        <div className='Footer__logo'>
          < Logo />
        </div>
        <nav className='Footer__navigation'>
          <ul className='Footer__list'>
            {navLinks.map(navLink => (
              <li
                className='Footer__list-item'
                key={navLink}
              >
              <Link to="/" className='Footer__link'>
                {navLink}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
        <div className='Footer__totop'>
          <p className='Footer__totop-label'>Back to top</p>
          <button className='Footer__totop-button'>
            <img
              className='Footer__totop-icon'
              src={ svg }
              alt="back to top"
            />
          </button>
        </div>
      </div>
    </footer>
  );
});

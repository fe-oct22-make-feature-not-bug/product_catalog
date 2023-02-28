import React from 'react';
import logo from '../public/logo/logo_footer.png';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <img
        src={ logo }
        alt="Logo"
        className='Logo'
      />
    </Link>
  )
}
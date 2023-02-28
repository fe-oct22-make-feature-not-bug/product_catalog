import React from 'react';
import logo from '../public/logo/logo_footer.svg';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <img
        src={ logo }
        alt="Logo"
        className='logo'
      />
    </Link>
  )
}
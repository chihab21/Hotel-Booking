import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className='main-header'>
      <Link to='/'>
        <h1 className='logo'>Hotel Booking</h1>
      </Link>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>

        {token ? (
          <>
            <Link to='/create'>Create</Link>

            <button className='btn-logout' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

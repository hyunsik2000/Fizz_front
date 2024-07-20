import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import { LuPlusSquare } from "react-icons/lu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [urlPath, setUrlPath] = useState(location.pathname);

  useEffect(() => {
    setUrlPath(location.pathname);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className='header-top' onClick={() => navigate('/')}>Fizz!</div>
      <nav className="header-sections">
        <ul>
          <li>
            <Link to="/" className={urlPath === '/' ? 'active' : ''}>
              <FaHome className="icon" /> 홈
            </Link>
          </li>
          <li>
            <Link to="/search" className={urlPath === '/search' ? 'active' : ''}>
              <FaSearch className="icon" /> 검색
            </Link>
          </li>
          <li>
            <Link to="/follow" className={urlPath === '/follow' ? 'active' : ''}>
              <FaHeart className="icon" /> 팔로잉
            </Link>
          </li>
          <li>
            <Link to="/profile" className={urlPath === '/profile' ? 'active' : ''}>
              <FaUser className="icon" /> 프로필
            </Link>
          </li>
          <li>
            <Link to="/new-post" className={urlPath === '/new-post' ? 'active' : ''}>
            <LuPlusSquare className="icon" /> 게시물
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
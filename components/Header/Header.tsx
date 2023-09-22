'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/img/logo.png';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const endpoint = usePathname().replace('/', '').toUpperCase();

  const isActive = (path: string) => {
    return endpoint === path.toUpperCase();
  };

  return (
    <header id="header" className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="#">
            <Image src={logo} alt="logo" />
            <span className="text">Honeyharvest</span>
          </Link>
        </h1>

        <nav className="main-nav navbar navbar-right navbar-expand-md">
          <button
            className={`navbar-toggler ${open ? '' : 'collapsed'} border-0`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span> </span>
            <span> </span>
            <span> </span>
          </button>
          <Collapse in={open} className="navbar-collapse">
            <div>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive('') ? 'active' : ''}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive('ABOUT') ? 'active' : ''}`}
                    href="/about"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isActive('PRODUCT') ? 'active' : ''
                    }`}
                    href="product"
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isActive('CONTACT') ? 'active' : ''
                    }`}
                    href="contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </nav>
      </div>
    </header>
  );
};

export default Header;

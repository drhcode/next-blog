import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeTogle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='facebook' width={24} height={24} />
        <Image src='/tiktok.png' alt='facebook' width={24} height={24} />
        <Image src='/youtube.png' alt='facebook' width={24} height={24} />
      </div>
      <div className={styles.logo}>DRH Code</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>
          home
        </Link>
        <Link href='/blog' className={styles.link}>
          blog
        </Link>
        <Link href='/contact' className={styles.link}>
          contact
        </Link>
        <Link href='/about' className={styles.link}>
          about
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

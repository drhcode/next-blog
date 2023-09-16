import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='drhcode blog' width={50} height={50} />
          <h1 className={styles.logoText}>DRHCode Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic perspiciatis obcaecati
          assumenda ut commodi optio minima asperiores? Tempora cumque perspiciatis at ipsa quaerat
          eligendi quo, fugit et, ad vero obcaecati?
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          <Image src='/tiktok.png' alt='' width={18} height={18} />
          <Image src='/youtube.png' alt='' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>home</Link>
          <Link href='/'>blogs</Link>
          <Link href='/'>privacy policy</Link>
          <Link href='/'>terms</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>coding</Link>
          <Link href='/'>travel</Link>
          <Link href='/'>fashion</Link>
          <Link href='/'>food</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>facebook</Link>
          <Link href='/'>instagram</Link>
          <Link href='/'>tiktok</Link>
          <Link href='/'>youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

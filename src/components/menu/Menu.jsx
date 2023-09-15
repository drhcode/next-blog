import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/menuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* First Sidebar */}
      <h1 className={styles.subtitle}>{"What's Hot"}</h1>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* Categories in sidebar */}
      <h1 className={styles.subtitle}>Discover by topics</h1>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* Second Sidebar */}
      <h1 className={styles.subtitle}>Chosen by editor</h1>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;

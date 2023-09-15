import Image from 'next/image';
import React from 'react';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.09.2023 - </span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href='/'>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae alias
            sumenda.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore omnis sit. Modi
          tempora dolor illum accusamus doloribus possimus, ea, distinctio ipsam cumque commodi enim
          reiciendis, quia dolorem expedita placeat?
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
